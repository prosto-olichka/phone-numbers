import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ContactItem from "../components/ContactItem";
import { useSelector } from "react-redux";

const FavoritesScreen = ({ navigation }) => {
  const favoriteContactIds = useSelector((state) => state.favoriteContactIds);
  const allContacts = useSelector((state) => state.allContacts);

  const favoriteContacts = allContacts.filter((contact) =>
    favoriteContactIds.includes(contact.id)
  );

  if (favoriteContactIds.length === 0) {
    return (
      <View style={styles.noFavorite}>
        <Text>No favorites</Text>
      </View>
    );
  }

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

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={favoriteContacts}
        keyExtractor={({ id }) => id}
        renderItem={renderContact}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  noFavorite: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
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

export default FavoritesScreen;
