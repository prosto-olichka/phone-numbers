import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const ContactItem = (props) => {
  return (
    <View style={styles.contactContainer}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.name}>{props.name}</Text>
        <Text>{props.number}</Text>
        <Image style={styles.image} source={props.imageSource} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    borderRadius: 8,
    padding: 10,
  },
  name: {
    fontSize: 16,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default ContactItem;
