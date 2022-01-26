import React from "react";
import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const ContactItem = (props) => {
  return (
    <TouchableOpacity
      style={{ ...styles.contactContainer, ...props.style }}
      onPress={props.onPress}
    >
      <Image style={styles.image} source={props.imageSource} />
      <Text style={styles.name}>{props.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    paddingVertical: 10,
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
    backgroundColor: "#ddd",
    borderRadius: 25,
  },
});

export default ContactItem;
