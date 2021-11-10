import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TopViewBrandComponent from '../Components/TopViewBrandComponent';
import Feeds from '../Components/Feed';
import Profile from "../Components/Profile";

export default function Home({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding:5}}>
        <Feeds navigation={navigation}/>
    </ScrollView>
  );
}
 