import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import ImgDetail from "./ImgDetail";

export default function ProfileDetails({ route, navigation }) {
  const { userName, imgs } = route.params;
  // console.log("userName");
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            navigation.navigate("profileScreen");
          }}
        >
          <View>
            <FontAwesome
              name="angle-left"
              size={32}
              color="black"
              style={{ marginLeft: 10 }}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.userNameInput}> {userName} </Text>
      </View>
      <View style={{ padding: 5, marginTop: 10, marginBottom: 30 }}>
        <Text style={{ fontSize: 16 }}>
          Lorem <Text style={{ color: "#1E90FF" }}>#Ipsum</Text> is simply dummy
          text of the printing and typesetting{" "}
          <Text style={{ color: "#1E90FF" }}>#industry</Text>. Lorem Ipsum has
          been the industry's standard dummy text ever{" "}
          <Text style={{ color: "#1E90FF" }}>#since </Text>the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type{" "}
          <Text style={{ color: "#1E90FF" }}>#specimen</Text> book.
        </Text>
      </View>
      <ImgDetail img={imgs} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
  },
  userNameInput: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 4,
  },
});
