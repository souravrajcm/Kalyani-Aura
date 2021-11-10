import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import {
    AntDesign,
    Ionicons,
    MaterialCommunityIcons,
  } from "@expo/vector-icons";

import Profile from "./Profile";


export default function MyPosts({p_img,userName,place,img,}) {
  return (
    <View>
        <View >
             <View style={{ display: "flex", flexDirection: "row",marginTop: 15 }}>
            <Profile newImgStyle={styles.newImgStyle} profile_img={p_img} />
            <View>
              <Text style={styles.userName}> {userName} </Text>
              <Text style={styles.location}>{place}</Text>
            </View>
            <MaterialCommunityIcons
              name="dots-horizontal"
              size={28}
              color="black"
              style={styles.topIconStyle}
            />
          </View>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={{ fontSize: 16 }} numberOfLines={3}>
              Lorem <Text style={{ color: "#1E90FF" }}>#Ipsum</Text> is simply
              dummy text of the printing and typesetting{" "}
              <Text style={{ color: "#1E90FF" }}>#industry</Text>. Lorem Ipsum
              has been the industry's standard dummy text ever{" "}
              <Text style={{ color: "#1E90FF" }}>#since </Text>the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type <Text style={{ color: "#1E90FF" }}>#specimen</Text> book.
            </Text>
          </View>
          <Image source={img} style={styles.imageContainer} />
          <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            justifyContent: "space-between",
            // marginBottom: 10,
          }}
        >
          <AntDesign
            name="heart"
            size={22}
            color="red"
            style={{ marginLeft: 20 }}
          >
            {" "}
            <Text style={{ fontSize: 14, textAlign: "center",color: 'gray' }}>1</Text>
          </AntDesign>
          <Ionicons
            name="chatbubble-outline"
            size={22}
            color="gray"
            style={styles.iconStyle}
          >
            {" "}
            <Text style={{ fontSize: 14, textAlign: "center",color: 'gray' }}>0</Text>
          </Ionicons>
          <MaterialCommunityIcons
            name="share-variant"
            size={22}
            color="gray"
            style={{ marginRight: 25 }}
          />
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 250,
    marginTop: 15,
    marginBottom: 15,
  },
  newImgStyle: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1.5,
    borderColor: "#FF1493",
  },
  userName: {
    color: "black",
    marginLeft: 5,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  location: {
    marginLeft: 8,
  },
  topIconStyle: {
    position: "absolute",
    top: 10,
    right: 15,
  },
});
