import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ContactDetailsScreen = ({ route }) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.contactPhoto}
          source={
            route.params.contact.imageAvailable
              ? { uri: route.params.contact.image.uri }
              : undefined
          }
        />
        <Text style={styles.name}>{route.params.contact.firstName}</Text>
      </View>
      <Text style={styles.number}>
        {route.params.contact.phoneNumbers[0].number}
      </Text>
      <Text style={styles.number}>
        {!route.params.contact.phoneNumbers[1]
          ? undefined
          : route.params.contact.phoneNumbers[1].number}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  contactPhoto: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 30,
    margin: 15,
  },
  number: {
    fontSize: 18,
    fontStyle: "italic",
    marginHorizontal: 25,
  },
});

export default ContactDetailsScreen;
