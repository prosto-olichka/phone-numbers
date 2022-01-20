import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const ContactItem = (props) => {
  return (
    <TouchableOpacity style={styles.contactContainer} onPress={props.onPress}>
      <Image style={styles.image} source={props.imageSource} />
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 25,
    borderWidth: 1,
    backgroundColor: "#bbb",
    borderRadius: 25,
  },
});

export default ContactItem;
