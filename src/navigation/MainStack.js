import React from "react";
import {StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";

import MyTabs from "./MyTabs";
import HomeFeedImg from "../Components/HomeFeedImg";
import SupportDetails from "../Components/SupportDetails";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileDetails from "../Components/ProfileDetails";
import MenuBar from "../Components/MenuBar";
import Feeds from "../Components/Feed";

const Stack = createStackNavigator();

export default function MainStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tabComponent"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeDetailPage"
        component={HomeFeedImg}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Support Status" component={SupportDetails} />
      <Stack.Screen
        name="profile1"
        component={ProfileScreen}
        options={{
          title: "sourav",
          headerLeft: () => (
            <FontAwesome.Button
              name="angle-left"
              size={32}
              color="black"
              style={{ backgroundColor: '#fff' }}
              onPress={() =>{navigation.navigate('tabComponent')}}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProfileDetail"
        component={ProfileDetails}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name= 'menuBar' component={MenuBar} />
      <Stack.Screen name='feed' component={Feeds}/> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    
})