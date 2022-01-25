import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

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
      {route.params.contact.phoneNumbers &&
      route.params.contact.phoneNumbers.length > 0 ? (
        <View style={styles.numbersContainer}>
          {route.params.contact.phoneNumbers.map((id, index) => {
            return (
              <TouchableOpacity>
                <Text style={styles.label}>{id.label}</Text>
                <Text style={styles.number}>{id.number}</Text>
                {route.params.contact.phoneNumbers.length - 1 !== index && (
                  <View style={styles.polosochka} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      ) : (
        <Text style={styles.noNumber}>No numbers</Text>
      )}
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
  numbersContainer: {
    marginHorizontal: 15,
    padding: 10,
  },
  label: {
    textTransform: "capitalize",
  },
  number: {
    fontSize: 18,
    fontStyle: "italic",
  },
  polosochka: {
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  noNumber: {
    fontSize: 18,
    fontStyle: "italic",
    alignSelf: "center",
  },
});

export default ContactDetailsScreen;
