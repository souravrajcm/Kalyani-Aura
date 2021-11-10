import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {FontAwesome, MaterialIcons } from '@expo/vector-icons';


export default function TopViewBrandComponent() {
  return (
    <View style={styles.brandContainer}>
      <Text style={styles.brandText}> AURA </Text>
      <View style={[styles.brandContainer, styles.iconStyle]}>
        <FontAwesome
          name="search"
          size={25}
          color="black"
          style={{ marginRight: 25 }}
        />
        <MaterialIcons
          name="notifications-none"
          size={26}
          color="black"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  brandText: {
    fontSize: 24,
    fontFamily: "robust",
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 20,
    color: "black",
  },
  brandContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 5
  },
  iconStyle: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});
