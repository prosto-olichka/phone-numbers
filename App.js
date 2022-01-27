import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import AllContactsScreen from "./screens/AllContactsScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ActionSheetProvider>
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
    </ActionSheetProvider>
  );
}

const styles = StyleSheet.create({});
