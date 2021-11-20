import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";


export default function SupportCategory({title,iconName,}) {
  return (
        <View style={{ marginTop: 3,backgroundColor: '#fff',flex:1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10, padding: 5 }}>
            <Text style={{ fontSize: 18 }}>{title}</Text>
            <MaterialCommunityIcons name={iconName} size={35} color="black" style={{ marginRight: 15 }} />
          </View>
          <View style={{ backgroundColor: "gray", height: 0.5,marginTop: 10 }}></View>
        </View>
  );
}

const styles = StyleSheet.create({});