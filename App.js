import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AllContactsScreen from "./screens/AllContactsScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="All Contacts Screen"
          component={AllContactsScreen}
        />
        <Stack.Screen
          name="Contact Details Screen"
          component={ContactDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
