import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  RefreshControl,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Profile from "../Components/Profile";
import Home from "./Home";
import Feeds from "../Components/Feed";
import MyPosts from "../Components/MyPosts";

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

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function ProfileScreen({ navigation, route }) {
  // const { userName, profile_image } = route.params;
  // console.log(userName);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar translucent={true} />
      <View style={{ marginBottom: 60, marginTop: 5 }}>
        <ImageBackground
          source={require("../Assets/img3.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        />
        <Profile
          profile_img={require("../Assets/p_img1.jpg")}
          newImgStyle={styles.profileImage}
        />
      </View>
      <View style={{ flexDirection: "row", marginBottom: 15, marginLeft: 10 }}>
        <View>
          <Text style={styles.p_name}> Nairobi M</Text>
          <Text style={styles.p_company}> Apple</Text>
          <Text style={styles.p_company}> Nayandahalli</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome
            name="twitter-square"
            size={45}
            color="#049FF6"
            style={{ marginRight: 20 }}
          />
          <FontAwesome
            name="facebook-square"
            size={45}
            color="#355CA9"
            style={{ marginRight: 20 }}
          />
          <FontAwesome
            name="linkedin-square"
            size={45}
            color="#0274B3"
            style={{ marginRight: 20 }}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <View style={styles.detailsBox}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {" "}
            14 Posts{" "}
          </Text>
        </View>
        <View style={[styles.detailsBox, { backgroundColor: "#d5eaf5" }]}>
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>
            {" "}
            0 Like{" "}
          </Text>
        </View>
      </View>
      {data.map((d, k) => (
        <TouchableWithoutFeedback
          key={k}
          onPress={() => {
            navigation.navigate("ProfileDetail", {
              userName: `${d.userName}`,
              imgs: `${d.img}`,
            });
          }}
        >
          <View>
            <MyPosts
              p_img={d.p_img}
              userName={d.userName}
              place={d.place}
              img={d.img}
            />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#F5F5F5",
  },
  imageBackground: {
    height: 180,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
    elevation: 2,
    marginLeft: 5,
    position: "absolute",
    top: -45,
    left: 5,
  },
  p_name: {
    fontWeight: "bold",
    fontSize: 17,
  },
  p_company: {
    marginTop: 3,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    position: "absolute",
    left: 190,
    top: 15,
  },
  detailsBox: {
    width: 180,
    height: 45,
    backgroundColor: "#d5f7d7",
    justifyContent: "center",
    marginHorizontal: 5,
  },
});
