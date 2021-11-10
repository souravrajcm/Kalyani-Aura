import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AppInfo() {
  return (
    <View style={{ justifyContent: "center", alignItems: "center",marginTop: 5 }}>
        <Image source={require("../Assets/aura_logo.png")} style={{ width: 200, height: 300 }} resizeMode="contain" />
        <Text style={{marginBottom: 10}}>App Version 1.0</Text>
        <Text style={styles.textStyle}> @ 2021 KALYANI AURA WORKSPACE PVT LTD</Text>
        <Text style={styles.textStyle}>All Right Reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textStyle: {
        fontWeight: 'bold',
        marginTop: 5
    },
});
