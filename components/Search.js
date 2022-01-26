import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search = (props) => {
  return (
    <View style={{ ...styles.inputContainer, ...props.style }}>
      <Ionicons name="md-search" size={16} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 6,
    flexDirection: "row",
    padding: 8,
    backgroundColor: "white",
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 2 },
    alignItems: "center",
  },
  input: {
    flex: 1,
    marginLeft: 12,
  },
});

export default Search;
