import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createStore } from "redux";
import { Provider } from "react-redux";

import AllContactsScreen from "./screens/AllContactsScreen";
import ContactDetailsScreen from "./screens/ContactDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import contactsReducer from "./store/reducers/favorite";

const store = createStore(contactsReducer);

const Stack = createNativeStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="All Contacts Screen" component={AllContactsScreen} />
      <Stack.Screen
        name="Contact Details Screen"
        component={ContactDetailsScreen}
      />
      <Stack.Screen name="Favorites Screen" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ActionSheetProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "tomato",
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="All Contacts Screen"
              component={StackScreen}
              options={{
                tabBarIcon: ({ focused, ...props }) => (
                  <Ionicons
                    {...props}
                    name={
                      focused
                        ? "ios-information-circle"
                        : "ios-information-circle-outline"
                    }
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Favorites Screen"
              component={FavoritesScreen}
              options={{
                headerShown: true,
                tabBarIcon: ({ focused, ...props }) => (
                  <Ionicons {...props} name="ios-list" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    </ActionSheetProvider>
  );
}
