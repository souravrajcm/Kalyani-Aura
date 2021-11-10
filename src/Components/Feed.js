import React from "react";
import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Button, Menu, Divider, Provider } from "react-native-paper";

import ImgFeed from "./ImgFeed";
import Profile from "./Profile";
import { StatusBar } from "react-native";

const data = [
  {
    userName: "sourav_dev",
    place: "Kalyani Tech Park",
    p_img: require("../Assets/p_img1.jpg"),
    img: require("../Assets/img5.jpg"),
    sub_title: "5 minutes ago",
  },
  {
    userName: "Gokul_raj_kp",
    place: "JP Nagar,Nayandahalli",
    p_img: require("../Assets/p_img2.jpg"),
    img: require("../Assets/img2.jpg"),
    sub_title: " 2 hours ago",
  },
  {
    userName: "Tamilarasan",
    place: "Mysore Road",
    p_img: require("../Assets/p_img3.jpg"),
    img: require("../Assets/img3.jpg"),
    sub_title: "1 day ago",
  },
  {
    userName: "muhammed_jaseel",
    place: "Kalyani Magnum",
    p_img: require("../Assets/p_img1.jpg"),
    img: require("../Assets/img4.jpg"),
    sub_title: "5 days ago",
  },
  {
    userName: "Arul_Aravind",
    place: "Kalyani Tech Park",
    p_img: require("../Assets/p_img3.jpg"),
    img: require("../Assets/img1.jpg"),
    sub_title: " 12 days ago",
  },
  {
    userName: "Yadhuraj_m",
    place: "JP Nagar,Nayandahalli",
    p_img: require("../Assets/p_img1.jpg"),
    img: require("../Assets/p_img3.jpg"),
    sub_title: "1 month ago",
  },
  {
    userName: "Berlin_underworld",
    place: "Mysore Road",
    p_img: require("../Assets/p_img2.jpg"),
    img: require("../Assets/p_img1.jpg"),
    sub_title: "2 month ago",
  },
];

export default function Feeds({ navigation }) {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={{ marginTop: 3, padding: 3 }}>
      <StatusBar translucent={true} barStyle="default" />
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

            <TouchableWithoutFeedback onPress={() => {}}>
              <View style={styles.topIconStyle}>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={29}
                  color="black"
                />
              </View>
            </TouchableWithoutFeedback>
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

          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate("HomeDetailPage", {
                userName: `${d.userName}`,
                post_img: `${d.img}`,
              })
            }
          >
            <View>
              <ImgFeed feed_img={d.img} updateDate={d.sub_title} />
            </View>
          </TouchableWithoutFeedback>
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
