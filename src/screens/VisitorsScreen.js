import React from "react";
import { Image, RefreshControl, ScrollView, StyleSheet, Text, View } from "react-native";
import Shimmer from "react-native-shimmer";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function VisitorsScreen() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={
      <RefreshControl 
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    } >

<SkeletonPlaceholder>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 60, height: 60, borderRadius: 50 }} />
        <View style={{ marginLeft: 20 }}>
          <View style={{ width: 120, height: 20, borderRadius: 4 }} />
          <View
            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
          />
        </View>
      </View>
    </SkeletonPlaceholder>

    {/* <View style={{ justifyContent: "center", alignItems: "center",marginTop: 5 }}>
      <Shimmer style={{ alignItems: "center" }} duration={1000}>
        <Text style={{ marginTop: 180, fontWeight: "bold", fontSize: 20 }}>Coming Soon</Text>
        <Image source={require("../Assets/aura_logo.png")} style={{ width: 200, height: 300 }} resizeMode="contain" />
      </Shimmer>
    </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
