import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Profile from "../Components/Profile";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function EditScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Profile
          profile_img={require("../Assets/p_img3.jpg")}
          newImgStyle={styles.profileImg}
        />
        <Text style={styles.userName}> Sourav Raj </Text>
      </View>
      <View style={styles.commentBox}>
      <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 17,lineHeight: 20 }} >
              Lorem <Text style={{ color: "#1E90FF" }}>#Ipsum</Text> is simply
              dummy text of the printing and typesetting{" "}
              <Text style={{ color: "#1E90FF" }}>#industry</Text>. Lorem Ipsum
              has been the industry's standard dummy text ever{" "}
              <Text style={{ color: "#1E90FF" }}>#since </Text>the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type <Text style={{ color: "#1E90FF" }}>#specimen</Text> book.
            </Text>
          </View>
      </View>
      <TouchableOpacity>
        <View style={styles.postImgContainer}>
          <MaterialCommunityIcons
            name="camera"
            size={45}
            color="black"
            style={{ marginRight: 15 }}
          />
          <Text style={{ textAlignVertical: "center" }}>
            Add Image/Picture
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
          <View style={styles.postButton}>
              <Text style={{fontWeight: 'bold',fontSize: 18}}>POST NOW</Text>
          </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileContainer: {
    flexDirection: "row",
    paddingTop: 20,
    marginBottom: 20,
  },
  profileImg: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1.5,
    borderColor: "#FF1493",
    marginRight: 15,
  },
  userName: {
    color: "black",
    marginLeft: 5,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  commentBox: {
    width: "99%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
  },
  comment: {
    fontSize: 17,
  },
  postImgContainer: {
    flexDirection: "row",
    marginLeft: 15,
    marginBottom: 25
  },
  postButton: {
      width: '80%',
      borderWidth: 1,
      borderBottomColor: 'black',
      padding: 10,
      alignItems: 'center',
      marginLeft: 35,
  },
});
