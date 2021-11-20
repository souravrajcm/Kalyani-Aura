import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Profile from "../Components/Profile";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ApiInterface from "../Api/ApiInterface";

const options = () => {
  mediaType: "photo";
};

export default function CreatePost() {
  const [fileUri, setFileUri] = useState();
  const [alertView, setalertView] = useState(false);
  const [getDesc, setDesc] = useState("");

  const imagepic = () => {
    setalertView(true);
  };

  const openGallary = () => {
    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
        console.log("canceldd");
      } else if (res.errorCode) {
        console.log("errrorcode");
      } else if (res.errorMessage) {
        console.log("eroormsg");
      } else if (res.assets) {
        console.log(res.assets[0].uri);
        setFileUri(res.assets[0].uri);
      }
    });
  };

  const openCamara = () => {
    launchCamera(options, (res) => {
      if (res.didCancel) {
        console.log("canceldd");
      } else if (res.errorCode) {
        console.log("errrorcode");
      } else if (res.errorMessage) {
        console.log("eroormsg");
      } else if (res.assets) {
        console.log(res.assets[0].uri);
        setFileUri(res.assets[0].uri);
      }
    });
  };

  const _createPost = async (desc, userId) => {
    const response = await ApiInterface.createNewFeed(desc, userId);
    if (!response.ok) return console.log(response.data);
    Alert.alert("Post Successfully Created..!!");
  };

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
        <TextInput
          placeholder="Whats on your mind ? "
          autoComplete={true}
          autoCorrect={true}
          style={styles.comment}
          onChangeText={(text) => setDesc(text)}
          value={getDesc}
        />
      </View>

      {alertView && (
        <View
          style={{
            flex: 1,
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(43,43,41,0.8)",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            elevation: 1,
            zIndex: 1,
          }}
        >
          <View
            style={{
              backgroundColor: "#ffffff",
              elevation: 1,
              height: 210,
              width: "85%",
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: "black",
                margin: 15,
              }}
            >
              Choose{" "}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <TouchableOpacity onPress={() => openCamara()}>
                <MaterialCommunityIcons
                  name="camera"
                  size={50}
                  color="gray"
                  style={{ marginRight: 100 }}
                />
                <Text>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openGallary()}>
                <MaterialCommunityIcons
                  name="image"
                  size={50}
                  color="gray"
                  style={{}}
                />
                <Text> Gallery </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setalertView(false)}>
              <Text
                style={{
                  textAlign: "right",
                  marginRight: 25,
                  marginTop: 25,
                  fontSize: 16,
                  color: "black",
                }}
              >
                CANCEL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <TouchableOpacity onPress={() => imagepic()}>
        <View style={styles.postImgContainer}>
          <MaterialCommunityIcons
            name="camera"
            size={45}
            color="black"
            style={{ marginRight: 15 }}
          />
          <Text style={{ textAlignVertical: "center" }}>Add Image/Picture</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => _createPost(getDesc, 40)}>
        <View style={styles.postButton}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>POST NOW</Text>
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
    marginBottom: 25,
  },
  postButton: {
    width: "80%",
    borderWidth: 1,
    borderBottomColor: "black",
    padding: 10,
    alignItems: "center",
    marginLeft: 35,
  },
});
