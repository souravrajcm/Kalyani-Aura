import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import MeterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default function Likes({ likes, liked }) {
  const [likepost, setlikedpost] = useState(liked);
  const likePost = () => {
    setlikedpost(!likepost);
  };
  //   console.log(!likepost);
  return (
    <TouchableOpacity onPress={() => likePost()}>
      {likepost ? (
        <AntIcon name="heart" size={22} color="red" style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>{likes}</Text>
        </AntIcon>
      ) : (
        <MeterialIcon name="heart-outline" size={22} color="gray" style={{ marginLeft: 20 }}>
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>{likes}</Text>
        </MeterialIcon>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
