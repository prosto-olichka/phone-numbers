import React, { useState, useEffect } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import * as Contacts from "expo-contacts";

import ContactItem from "../components/ContactItem";
import Search from "../components/Search";

const AllContactsScreen = ({ navigation }) => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

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
        style={styles.contactItem}
        name={data.item.name}
        imageSource={
          data.item.imageAvailable ? { uri: data.item.image.uri } : undefined
        }
        onPress={() => {
          navigation.navigate("Contact Details Screen", { contact: data.item });
        }}
      />
    );
  };

  const selectedContact = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <Search
            style={styles.search}
            value={search}
            onChangeText={setSearch}
          />
        }
        style={styles.flatList}
        data={selectedContact}
        keyExtractor={({ id }) => id}
        renderItem={renderContact}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contactItem: {
    marginLeft: 16,
  },
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "gray",
    marginLeft: 70,
  },
  search: {
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 5,
  },
  flatList: {
    flex: 1,
  },
});

export default AllContactsScreen;
