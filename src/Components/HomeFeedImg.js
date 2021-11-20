import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ImgFeed from "./ImgFeed";
import ImgDetail from "./ImgDetail";

export default function HomeFeedImg({ route, navigation }) {
  const { userName, post_img, description } = route.params;
  // console.log(userName);
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          // padding: 8,
          justifyContent: "flex-start",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        >
          <FontAwesome
            name="angle-left"
            size={30}
            color="black"
            style={{ marginLeft: 10, marginTop: 5 }}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.userNameInput}> {userName} </Text>
      </View>
      <View style={{ padding: 5, marginTop: 10, marginBottom: 30 }}>
        <Text style={{ fontSize: 16 }}>{description}</Text>
      </View>
      <ImgDetail img={post_img} />
      {/* <ImgFeed feed_img={post_img} updateStyle={styles.imgFeed} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    // backgroundColor: '#fff',
    // flex: 1,
  },
  userNameInput: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },
  imgFeed: {
    //   marginTop: 50
  },
});
