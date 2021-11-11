import React from "react";
<<<<<<< HEAD
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, Ionicons } from "react-native-vector-icons";
=======
import {StyleSheet, View, Text} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, MaterialIcons } from "react-native-vector-icons";
>>>>>>> 136d90161ff931a12744f52a0fc218172ab17481

import MyTabs from "./MyTabs";
import HomeFeedImg from "../Components/HomeFeedImg";
import SupportDetails from "../Components/SupportDetails";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileDetails from "../Components/ProfileDetails";
import MenuBar from "../Components/MenuBar";
import Feeds from "../Components/Feed";
import ImgFeed from "../Components/ImgFeed";
import CommentBox from "../Components/CommentBox";
<<<<<<< HEAD
import SearchScreen from "../screens/SearchScreen";
=======
import Notification from "../screens/Notification";
>>>>>>> 136d90161ff931a12744f52a0fc218172ab17481

const Stack = createStackNavigator();

export default function MainStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="tabComponent" component={MyTabs} options={{ headerShown: false }} />
      <Stack.Screen name="HomeDetailPage" component={HomeFeedImg} options={{ headerShown: false }} />
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
              style={{ backgroundColor: "#fff" }}
              onPress={() => {
                navigation.navigate("tabComponent");
              }}
            />
          ),
        }}
      />
      <Stack.Screen name="ProfileDetail" component={ProfileDetails} options={{ headerShown: false }} />
      <Stack.Screen
        name="commentBox"
        component={CommentBox}
        options={{
          title: "Post Comment",

          headerLeft: () => (
            <FontAwesome.Button
              name="angle-left"
              size={32}
              color="black"
              style={{ backgroundColor: "#fff" }}
              onPress={() => {
                navigation.navigate("tabComponent");
              }}
            />
          ),
        }}
      />
<<<<<<< HEAD
      <Stack.Screen name="searchScreen" component={SearchScreen} options={{ headerShown: false }} />
=======
      <Stack.Screen name='commentBox' component={CommentBox} options={{ 
        title: 'Post Comment',
        
        headerLeft: () => (
          <FontAwesome.Button
            name="angle-left"
            size={32}
            color="black"
            style={{ backgroundColor: '#fff' }}
            onPress={() =>{navigation.navigate('tabComponent')}}
          />
        ),
      }} />
      <Stack.Screen name='notification' component={Notification} options={{ 
        title: 'Notification',
        headerLeft: () => (
          <FontAwesome.Button
            name="angle-left"
            size={32}
            color="black"
            style={{ backgroundColor: '#fff' }}
            onPress={() =>{navigation.navigate('tabComponent')}}
          />
        ),
        headerRight: () => (
          <View style={{marginLeft: 10}}> 
          <MaterialIcons
                name="notifications-none"
                size={32}
                color="black"
                style={{marginRight: 18}}
          />
            <View style={styles.iconBadge}>
              <Text style={{textAlign: 'center', color: '#fff'}} >8</Text>
            </View>
            
            </View>
        )
      }} />
>>>>>>> 136d90161ff931a12744f52a0fc218172ab17481
    </Stack.Navigator>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({});
=======
const styles = StyleSheet.create({
    iconBadge: {
      width: 25,
      height: 20,
      borderRadius: 10,
      backgroundColor: 'red',
      position: 'absolute',
      top: -3,
      right: 6
    },
})
>>>>>>> 136d90161ff931a12744f52a0fc218172ab17481
