import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainStack from "./MainStack";
import ProfileDetailStack from "./MyStack";
import Access_Control from "../screens/Access_Control";
import Food_Beverages from "../screens/Food_Beverages";
import MyTabs from '../navigation/MyTabs';
import ProfileScreen from "../screens/ProfileScreen";
import { DrawerContent } from "./DrawerContent";
import ChangePassword from "../screens/ChangePassword";
import AppInfo from "../screens/AppInfo";

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
        <Drawer.Screen
          name="Home"
          component={MainStack}
          options={{ drawerLabel: "Home", headerShown: false}}
        />
        <Drawer.Screen
          name="profile"
          component={ProfileDetailStack}
          options={{ drawerLabel: "Profile", headerShown: false }}
        />
        <Drawer.Screen
          name="Access_control"
          component={Access_Control}
          options={{ drawerLabel: "Access Control", title: 'KALYANI AURA' }}
        />
        <Drawer.Screen
          name="Food_Beverages"
          component={Food_Beverages}
          options={{ drawerLabel: "Food and Beverages", title: 'KALYANI AURA' }}
        />
        <Drawer.Screen
          name="change_password"
          component={ChangePassword}
          options={{ drawerLabel: "Change Password", title: 'KALYANI AURA' }}
        />
        <Drawer.Screen
          name="app_info"
          component={AppInfo}
          options={{ drawerLabel: "App Info", title: 'KALYANI AURA' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
