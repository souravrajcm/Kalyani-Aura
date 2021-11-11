import React from "react";
import {StyleSheet, View, Text} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome, MaterialIcons } from "react-native-vector-icons";

import MyTabs from "./MyTabs";
import HomeFeedImg from "../Components/HomeFeedImg";
import SupportDetails from "../Components/SupportDetails";
import ProfileScreen from "../screens/ProfileScreen";
import ProfileDetails from "../Components/ProfileDetails";
import MenuBar from "../Components/MenuBar";
import Feeds from "../Components/Feed";
import ImgFeed from "../Components/ImgFeed";
import CommentBox from "../Components/CommentBox";
import Notification from "../screens/Notification";

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
    </Stack.Navigator>
  );
}

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