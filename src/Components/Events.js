import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Events({ img, date, title, subtitle, caption, location, intrestedpersons }) {
  return (
    <View style={{ backgroundColor: "white", padding: 6, marginBottom: 6 }}>
      <Image source={img} resizeMode="cover" style={{ width: "100%", height: 200 }} />
      <Text style={{ marginTop: 6 }}>{date}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 18, letterSpacing: 0.4 }}>{title}</Text>
      <Text style={{ marginTop: 6 }}>{subtitle}</Text>
      <Text style={{ marginTop: 8 }}>{caption}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="map-pin" size={16} style={{ marginRight: 8 }} />
          <Text>{location}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialIcon name="gesture-tap" size={20} style={{ marginRight: 8, transform: [{ rotate: "-20deg" }] }} />
          <Text>{intrestedpersons}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.attend_btn}>
        <Text style={{ color: "#ffffff" }}>ATTEND</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  attend_btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b0145",
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 8
  },
});
