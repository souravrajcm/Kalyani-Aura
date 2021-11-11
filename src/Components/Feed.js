import { useLinkBuilder } from "@react-navigation/native";
import React, { useState } from "react";
import Share from 'react-native-share';
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
<<<<<<< HEAD
import { Button, Menu, Divider, Provider } from "react-native-paper";
import { AntDesign, Ionicons, MaterialCommunityIcons } from "react-native-vector-icons";
=======
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
>>>>>>> 136d90161ff931a12744f52a0fc218172ab17481

import ImgFeed from "./ImgFeed";
import Likes from "./Likes";
import MenuList from "./MenuList";
import Profile from "./Profile";

const data = [
  {
    userName: "sourav_dev",
    place: "Kalyani Tech Park",
    p_img: require("../Assets/p_img1.jpg"),
    img: require("../Assets/img5.jpg"),
    sub_title: "5 minutes ago",
    likes: 150,
    liked: true,
  },
  {
    userName: "Gokul_raj_kp",
    place: "JP Nagar,Nayandahalli",
    p_img: require("../Assets/p_img2.jpg"),
    img: require("../Assets/img2.jpg"),
    sub_title: " 2 hours ago",
    likes: 150,
    liked: true,
  },
  {
    userName: "Tamilarasan",
    place: "Mysore Road",
    p_img: require("../Assets/p_img3.jpg"),
    img: require("../Assets/img3.jpg"),
    sub_title: "1 day ago",
    likes: 150,
    liked: false,
  },
  {
    userName: "muhammed_jaseel",
    place: "Kalyani Magnum",
    p_img: require("../Assets/p_img1.jpg"),
    img: require("../Assets/img4.jpg"),
    sub_title: "5 days ago",
    likes: 150,
    liked: true,
  },
  {
    userName: "Arul_Aravind",
    place: "Kalyani Tech Park",
    p_img: require("../Assets/p_img3.jpg"),
    img: require("../Assets/img1.jpg"),
    sub_title: " 12 days ago",
    likes: 150,
    liked: false,
  },
  {
    userName: "Yadhuraj_m",
    place: "JP Nagar,Nayandahalli",
    p_img: require("../Assets/p_img1.jpg"),
    img: require("../Assets/p_img3.jpg"),
    sub_title: "1 month ago",
    likes: 150,
    liked: true,
  },
  {
    userName: "Berlin_underworld",
    place: "Mysore Road",
    p_img: require("../Assets/p_img2.jpg"),
    img: require("../Assets/p_img1.jpg"),
    sub_title: "2 month ago",
    likes: 150,
    liked: false,
  },
];

export default function Feeds({ navigation }) {
  const [color, setColor] = useState();

  const like = () => {
    setColor(!color);
  };

  const customShare = async () => {
    const shareOption = {
      message: 'Some text message'
    }

    try {
      const shareResponse = await Share.open(shareOption);
    } catch(error){
      console.log('Error =>', error);
    }
  }
  return (
    <View style={{ marginTop: 3, padding: 3 }}>
      <StatusBar translucent={true} barStyle="dark-content" />
      {data.map((d, k) => (
        <View key={k} style={styles.container}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Profile newImgStyle={styles.newImgStyle} profile_img={d.p_img} />
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("profile1", {
                  userName: `${d.userName}`,
                });
              }}
            >
              <View>
                <Text style={styles.userName}> {d.userName} </Text>
                <Text style={styles.location}>{d.place}</Text>
              </View>
            </TouchableWithoutFeedback>
            <MenuList />

            {/* <TouchableWithoutFeedback onPress={() => editPost()}>
              <View style={styles.topIconStyle}>
                <MaterialCommunityIcons name="dots-horizontal" size={29} color="black" />
              </View>
            </TouchableWithoutFeedback> */}
            {/* {
              edit&&

            <View style={{width:200,height:80,backgroundColor:'red' ,position:"absolute",zIndex:1,elevation:1,right:10,marginTop:30}}>
              <TouchableOpacity onPress={()=>{}}>

              <Text>Edit</Text>
              </TouchableOpacity>
              <Text>Delete</Text>
            </View>
            } */}
          </View>
          <View style={{ paddingLeft: 10, paddingRight: 10 }}>
            <Text style={{ fontSize: 16 }} numberOfLines={3}>
              Lorem <Text style={{ color: "#1E90FF" }}>#Ipsum</Text> is simply dummy text of the printing and
              typesetting <Text style={{ color: "#1E90FF" }}>#industry</Text>. Lorem Ipsum has been the industry's
              standard dummy text ever <Text style={{ color: "#1E90FF" }}>#since </Text>the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type{" "}
              <Text style={{ color: "#1E90FF" }}>#specimen</Text> book.
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("HomeDetailPage", {
                userName: `${d.userName}`,
                post_img: `${d.img}`,
              });
            }}
          >
            <ImgFeed feed_img={d.img} updateDate={d.sub_title} />
          </TouchableOpacity>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 10,
              justifyContent: "space-between",
              // marginBottom: 10,
            }}
          >
            <Likes likes={d.likes} liked={d.liked} />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("commentBox", {
                  profile_img: `${d.p_img}`,
                  userName: `${d.userName}`,
                  place: `${d.place}`,
                  feed_img: `${d.img}`,
                });
              }}
            >
              <Ionicons name="chatbubble-outline" size={22} color="gray" style={styles.iconStyle}>
                <Text style={{ fontSize: 14, textAlign: "center", color: "gray" }}>0</Text>
              </Ionicons>
            </TouchableOpacity>
<<<<<<< HEAD

            <MaterialCommunityIcons name="share-variant" size={22} color="gray" style={{ marginRight: 25 }} />
          </View>
          <Text style={{ color: "gray", marginLeft: 5, fontSize: 12 }}> {d.sub_title}</Text>
=======
              <TouchableOpacity onPress={customShare} >
            <MaterialCommunityIcons
              name="share-variant"
              size={22}
              color="gray"
              style={{ marginRight: 25 }}
            />
            </TouchableOpacity>
          </View>
          <Text style={{ color: "gray", marginLeft: 5, fontSize: 12,marginTop:1,marginBottom:5 }}>
            {" "}
            {d.sub_title}
          </Text>
>>>>>>> 136d90161ff931a12744f52a0fc218172ab17481
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    elevation: 0.5,
    marginBottom: 8,
    overflow: "hidden",
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
  postDate: {
    marginTop: 15,
    color: "black",
    position: "absolute",
  },
  topIconStyle: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
