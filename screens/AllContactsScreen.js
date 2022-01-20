import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import * as Contacts from "expo-contacts";

import ContactItem from "../components/ContactItem";
import Search from "../components/Search";

const AllContactsScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.IMAGE],
        });
        setContacts(data);
      }
    })();
  }, []);

  const renderContact = (data) => {
    return (
      <ContactItem
        name={data.item.firstName}
        imageSource={
          data.item.imageAvailable ? { uri: data.item.image.uri } : undefined
        }
        // number={data.item.phoneNumbers[0].number}
        onPress={() => {
          navigation.navigate("Contact Details Screen", { contact: data.item });
        }}
      />
    );
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <Search onChangeText={(text) => setSearch(text)} />
      </View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
      />
      <View>
        <Text>All Contacts Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    margin: 15,
  },
});

export default AllContactsScreen;
