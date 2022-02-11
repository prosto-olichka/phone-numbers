import React from "react";
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
import contactsReducer from "./store/reducers/contacts";
import { StatusBar } from "expo-status-bar";

const store = createStore(contactsReducer);

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "tomato",
      }}
    >
      <Tab.Screen
        name="All Contacts Screen"
        component={AllContactsScreen}
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
          tabBarIcon: ({ focused, ...props }) => (
            <Ionicons {...props} name="ios-list" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ActionSheetProvider>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={TabScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Contact Details Screen"
              component={ContactDetailsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ActionSheetProvider>
  );
}
