import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.topViewContainer}>
              <Avatar.Image
                source={require("../Assets/p_img1.jpg")}
                size={80}
              />
              <View>
                <Title style={styles.title}> Sourav Raj CM</Title>
                <Caption style={styles.caption}>souravdev@gmail.com</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={() => (
                <MaterialCommunityIcons name="home" color="black" size={25} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="account-circle"
                  color="black"
                  size={25}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("profile");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="contactless-payment-circle"
                  color="black"
                  size={25}
                />
              )}
              label="Access Control"
              onPress={() => {
                props.navigation.navigate("Access_control");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="food" color="black" size={25} />
              )}
              label="Food and Beverages"
              onPress={() => {
                props.navigation.navigate("Food_Beverages");
              }}
            />
          </Drawer.Section>
          <Drawer.Section title="About App" style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons name="lock" color="black" size={25} />
              )}
              label="Change Password"
              onPress={() => {
                props.navigation.navigate("change_password");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="alert-circle"
                  color="black"
                  size={25}
                />
              )}
              label="App Info"
              onPress={() => {
                props.navigation.navigate("app_info");
              }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <MaterialCommunityIcons
                  name="exit-to-app"
                  color='black'
                  size={25}
                />
              )}
              label="Log Out"
              onPress={() => {}}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    color: "#fff",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: "#fff",
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#F5F5F5",
    borderTopWidth: 1,
    // borderTopColor: "#f4f4f4",
  },
  topViewContainer: {
    flex: 1,
    backgroundColor: "rgb(3,33,59)",
    justifyContent: "center",
    padding: 15,
    paddingTop: 20,
    marginTop: -5,
    height: 160,
  },
});
