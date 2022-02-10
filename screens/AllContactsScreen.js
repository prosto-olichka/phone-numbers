import React, { useState, useEffect, useLayoutEffect } from "react";
import { FlatList, View, StyleSheet, TouchableOpacity } from "react-native";
import * as Contacts from "expo-contacts";
import { MaterialIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useSelector, useDispatch } from "react-redux";

import { setContacts } from "../store/actions/favorite";
import ContactItem from "../components/ContactItem";
import Search from "../components/Search";

const AllContactsScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState(0);

  const { showActionSheetWithOptions } = useActionSheet();

  const allContacts = useSelector((state) => state.allContacts);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            showActionSheetWithOptions(
              {
                options: ["By first name", "By last name", "Cancel"],
                cancelButtonIndex: 2,
              },
              (item) => {
                if (item < 2) {
                  setSortType(item);
                }
              }
            )
          }
        >
          <MaterialIcons name="sort" size={24} color="gray" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.IMAGE],
        });
        dispatch(setContacts(data));
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

  const contactsToDisplay = allContacts
    .filter(({ name }) => name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortType === 0) {
        const aFirstName = a.firstName || "";
        const bFirstName = b.firstName || "";
        return aFirstName.localeCompare(bFirstName);
      } else {
        const aLastName = a.lastName || "";
        const bLastName = b.lastName || "";
        return aLastName.localeCompare(bLastName);
      }
    });

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
        data={contactsToDisplay}
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
