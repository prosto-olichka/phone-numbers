import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search onChangeText={(text) => setSearch(text)} />
      </View>
      <FlatList
        style={styles.flatList}
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContact}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    margin: 15,
  },
  flatList: {
    flex: 1,
  },
});

export default AllContactsScreen;
