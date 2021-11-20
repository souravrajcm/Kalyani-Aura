import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Feeds from "./Feed";
import Profile from "./Profile";
import { MaterialCommunityIcons, Ionicons } from "react-native-vector-icons";
import ImgFeed from "./ImgFeed";

export default function CommentBox({ route }) {
  const {
    profile_img,
    userName,
    place,
    feed_img,
    companyName,
    description,
    comment_count,
    like_count,
  } = route.params;
  return (
    <ScrollView>
      <View style={{ display: "flex", flexDirection: "row" }}>
        <Profile newImgStyle={styles.newImgStyle} profile_img={profile_img} />

        <View>
          <Text style={styles.userName}> {userName} </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.location}>{place}</Text>
            <Text style={styles.location}>{companyName}</Text>
          </View>
        </View>

        <View style={styles.topIconStyle}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={29}
            color="black"
          />
        </View>
      </View>
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <Text style={{ fontSize: 16 }} numberOfLines={3}>
          {description}
        </Text>
      </View>

      <ImgFeed feed_img={feed_img} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: 10,
          justifyContent: "space-between",
          // marginBottom: 10,
        }}
      >
        <MaterialCommunityIcons
          name="heart-outline"
          size={22}
          color="gray"
          style={{ marginLeft: 20 }}
        >
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>
            {like_count}
          </Text>
        </MaterialCommunityIcons>

        <Ionicons
          name="chatbubble-outline"
          size={22}
          color="gray"
          style={styles.iconStyle}
        >
          <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>
            {comment_count}
          </Text>
        </Ionicons>

        <MaterialCommunityIcons
          name="share-variant"
          size={22}
          color="gray"
          style={{ marginRight: 25 }}
        />
      </View>
      <View
        style={{
          marginTop: 25,
          borderBottomWidth: 0.5,
          borderBottomColor: "gray",
          paddingBottom: 8,
        }}
      >
        <Text style={{ fontWeight: "bold" }}> Comment(0) </Text>
      </View>
      <View style={styles.commentBox}>
        <TextInput
          placeholder="Comment the Post.."
          multiline={true}
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.buttonText}> Post </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    right: 10,
  },
  commentBox: {
    marginTop: 25,
    padding: 5,
    flexDirection: "row",
  },
  textInput: {
    width: 250,
    height: 50,
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#0b0145",
    overflow: "hidden",
    lineHeight: 3,
  },
  postButton: {
    height: 40,
    width: 90,
    marginTop: 10,
    marginLeft: 30,
    borderRadius: 8,
    backgroundColor: "#0b0145",
    justifyContent: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
