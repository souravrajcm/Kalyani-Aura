import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Shimmer from "react-native-shimmer";

export default function VisitorsScreen() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center",marginTop: 5 }}>
      <Shimmer style={{ alignItems: "center" }} duration={1000}>
        <Text style={{ marginTop: 180, fontWeight: "bold", fontSize: 20 }}>Coming Soon</Text>
        <Image source={require("../Assets/aura_logo.png")} style={{ width: 200, height: 300 }} resizeMode="contain" />
      </Shimmer>
    </View>
  );
}

const styles = StyleSheet.create({});
