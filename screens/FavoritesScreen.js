import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import ContactItem from "../components/ContactItem";

const FavoritesScreen = () => {
  return (
    <FlatList>
      <View>
        <Text>Favorites Screen</Text>
      </View>
    </FlatList>
  );
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
