import React from "react";
import EditProfileScreen from "./src/Components/EditProfile";
// import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// import EventsScreen from "./src/screens/EventsScreen";
// import Home from "./src/screens/Home";
// import VisitorsScreen from "./src/screens/VisitorsScreen";
// import Support from "./src/screens/Support";
// import MyTabs from "./src/navigation/MyTabs";
// import ProfileScreen from "./src/screens/ProfileScreen";
// import Access_Control from "./src/screens/Access_Control";
// import Food_Beverages from "./src/screens/Food_Beverages";

import MyDrawer from "./src/navigation/MyDrawer";

export default function App() {
 
  return (
        <MyDrawer />
  );
}
