import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View, RefreshControl } from "react-native";
import TopViewBrandComponent from '../Components/TopViewBrandComponent';
import Feeds from '../Components/Feed';
import Profile from "../Components/Profile";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function Home({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding:5}} refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    } >
      <StatusBar backgroundColor="white" barStyle='dark-content'/>
        <Feeds navigation={navigation}/>
    </ScrollView>
  );
}
 