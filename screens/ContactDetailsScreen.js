import React, { useLayoutEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import call from "react-native-phone-call";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import { toggleFavorite } from "../store/actions/favorite";

const ContactDetailsScreen = ({
  navigation,
  route: {
    params: { contact },
  },
}) => {
  const isFavorite = useSelector((state) =>
    state.favoriteContacts.includes(contact)
  );
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => dispatch(toggleFavorite(contact))}>
          <Ionicons name={isFavorite ? "star" : "star-outline"} />
        </TouchableOpacity>
      ),
    });
  }, [isFavorite, navigation]);

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.contactPhoto}
          source={
            contact.imageAvailable ? { uri: contact.image.uri } : undefined
          }
        />
        <Text style={styles.name}>{contact.firstName}</Text>
      </View>
      {contact.phoneNumbers && contact.phoneNumbers.length > 0 ? (
        <View style={styles.numbersContainer}>
          {contact.phoneNumbers.map((phoneNumber, index) => {
            return (
              <TouchableOpacity
                key={phoneNumber.id}
                onPress={() => call({ number: phoneNumber.number })}
              >
                <Text style={styles.label}>{phoneNumber.label}</Text>
                <Text style={styles.number}>{phoneNumber.number}</Text>
                {contact.phoneNumbers.length - 1 !== index && (
                  <View style={styles.separator} />
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
  separator: {
    borderBottomWidth: 1,
    marginVertical: 10,
    borderColor: "#ccc",
  },
  noNumber: {
    fontSize: 18,
    fontStyle: "italic",
    alignSelf: "center",
  },
});

export default ContactDetailsScreen;
