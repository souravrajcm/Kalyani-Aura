import React from "react";
import { StyleSheet, Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../screens/Home";
import Support from "../screens/Support";
import EventsScreen from "../screens/EventsScreen";
import VisitorsScreen from "../screens/VisitorsScreen";
import HomeFeedImg from "../Components/HomeFeedImg";
import { View } from "react-native";
import SupportDetails from "../Components/SupportDetails";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#000000"
      barStyle={{ backgroundColor: "#fff" }}
    >
      <Tab.Screen
        name="Homes"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="home-variant"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventScreens}
        options={{
          tabBarLabel: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-text"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Support"
        component={SupportScreens}
        options={{
          tabBarLabel: "Support",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="support" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Visitor"
        component={VisitorScreens}
        options={{
          tabBarLabel: "Visitor",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person-pin" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

const HomeStackScreen = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: "KALYANI AURA",
          headerLeft: () => (
            <Ionicons.Button
              name="md-reorder-three-outline"
              size={35}
              color="black"
              backgroundColor="white"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <View style={{ display: "flex", flexDirection: "row" }}>
              <MaterialIcons.Button
                name="search"
                size={26}
                color="black"
                backgroundColor="white"
              />
              <MaterialIcons.Button
                name="notifications-none"
                size={26}
                color="black"
                backgroundColor="white"
                onPress={() => {navigation.navigate('notification')}}
              />
            </View>
          ),
        }}
      />
      {/* <Stack.Screen name='profile1' component={ProfileScreen} /> */}
      {/* <Stack.Screen name="HomeDetailPage" component={HomeFeedImg} options={{headerShown: false,}} /> */}
    </Stack.Navigator>
  );
};

const EventScreens = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "KALYANI AURA",
          headerLeft: () => (
            <Ionicons.Button
              name="md-reorder-three-outline"
              size={35}
              color="black"
              backgroundColor="white"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
        name="EventScreen"
        component={EventsScreen}
      />
    </Stack.Navigator>
  );
};

const SupportScreens = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "KALYANI AURA",
          headerLeft: () => (
            <Ionicons.Button
              name="md-reorder-three-outline"
              size={35}
              color="black"
              backgroundColor="white"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
        name="SupportScreen"
        component={Support}
      />
      {/* <Stack.Screen
        options={{ title: "Support Status" }}
        name="Support_Details"
        component={SupportDetails}
      /> */}
    </Stack.Navigator>
  );
};

const VisitorScreens = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          title: "KALYANI AURA",
          headerLeft: () => (
            <Ionicons.Button
              name="md-reorder-three-outline"
              size={35}
              color="black"
              backgroundColor="white"
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
        }}
        name="VisitorsScreen"
        component={VisitorsScreen}
      />
    </Stack.Navigator>
  );
};
