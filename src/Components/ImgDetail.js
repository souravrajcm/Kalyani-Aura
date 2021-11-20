import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function ImgDetail({ img }) {
  return (
    <View>
      <Image
        source={{
          uri: "https://mobileapp.kalyaniaura.com/storage/" + img,
        }}
        resizeMode="cover"
        style={styles.feedImg}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 10,
          // justifyContent: "",
        }}
      >
        <AntDesign
          name="heart"
          size={22}
          color="red"
          style={{ marginLeft: 20 }}
        >
          {" "}
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>
            1
          </Text>
        </AntDesign>
        <Ionicons
          name="chatbubble-outline"
          size={22}
          color="gray"
          style={{ marginLeft: 120 }}
        >
          {" "}
          <Text
            style={{
              fontSize: 14,
              textAlign: "center",
              color: "gray",
              marginRight: 15,
            }}
          >
            0
          </Text>
        </Ionicons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedImg: {
    width: "100%",
    height: 250,
    marginTop: 10,
    marginBottom: 20,
  },
});
