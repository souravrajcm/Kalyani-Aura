import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Profile({ newImgStyle, name, textStyle, profile_img }) {
  return (
    <View>
      <ImageBackground
        source={{
          uri: "https://mobileapp.kalyaniaura.com/storage/" + profile_img,
        }}
        style={[styles.imageStyle, newImgStyle]}
        imageStyle={{ borderRadius: 50 }}
      >
        <Text style={textStyle}> {name} </Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    // marginTop: 10,
  },
  iconStyle: {
    position: "absolute",
    bottom: 2,
    right: 12,
  },
});
