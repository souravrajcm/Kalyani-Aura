import React from "react";
import {Text} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {Ionicons, MaterialIcons, FontAwesome} from '@expo/vector-icons';

import ProfileScreen from "../screens/ProfileScreen";
import ProfileDetails from "../Components/ProfileDetails";
import EditProfileScreeen from "../Components/EditProfile";

const Stack = createStackNavigator();

export default function ProfileDetailStack({navigation}) {
  return (
      <Stack.Navigator>
        <Stack.Screen name='profile1' component={ProfileScreen} options={{
          title: 'KALYANI AURA',
          headerLeft: () => (
            <Ionicons.Button
              name = "md-reorder-three-outline"
              size = {35}
              color = "black"
              backgroundColor = "white"
              onPress = {() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerRight: () => (
            <MaterialIcons.Button
              name = 'edit'
              size = {25}
              color = 'black'
              backgroundColor = 'white'
              onPress = {() => {navigation.navigate('editProfile')}}
            />
          )
        }} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetails} options={{headerShown: false}} />
        <Stack.Screen name='editProfile' component={EditProfileScreeen} options={{
          title: 'Profile',
          headerLeft : () => (
            <FontAwesome.Button
            name = "angle-left"
            size = {32}
            color = "black"
            style = {{ backgroundColor: '#fff' }}
            onPress = {() =>{navigation.navigate('profile1')}}
          />
          ),
          headerRight: () => (
            <Text style = {{ marginRight: 25,  fontSize: 18}}>save</Text>
          )
          
        }} />
      </Stack.Navigator>
  );
}
