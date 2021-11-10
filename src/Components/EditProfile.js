import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import FeatherIcon from "react-native-vector-icons/Feather";
import MeterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";
export default function EditProfileScreeen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ justifyContent: "center", alignSelf: "center", padding: 20 }}>
        <ImageBackground
          imageStyle={{ width: 100, height: 100, borderRadius: 50 }}
          source={require("../Assets/p_img2.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          <FeatherIcon
            style={{ alignSelf: "center", justifyContent: "center", alignItems: "center" }}
            name="camera"
            size={24}
            color="#ffffff"
          />
        </ImageBackground>
      </View>

      {/* card component */}
      {/* member profile */}
      <View style={{ padding: 8 }}>
        <View style={{ borderWidth: 1, borderColor: "#03213b" }}>
          <View style={{ backgroundColor: "#03213b" }}>
            <Text style={{ color: "#ffffff", padding: 8 }}>Member Profile</Text>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <MeterialIcon name="account" size={20} />
            <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
              <Text style={{ paddingBottom: 10 }}>@yadhurajm</Text>
              <View
                style={{ height: 1, backgroundColor: "#b7b7b7", marginBottom: 10, paddingRight: 10, marginRight: 10 }}
              ></View>
            </View>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View style={{ width: "50%" }}>
              <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
                <View style={{ flexDirection: "row" }}>
                  <MeterialIcon name="account" size={20} />
                  <Text style={{ paddingBottom: 10 }}>@yadhurajm</Text>
                </View>
                <View
                  style={{ height: 1, backgroundColor: "#b7b7b7", marginBottom: 10, paddingRight: 10, marginRight: 10 }}
                ></View>
              </View>
            </View>
            <View style={{ width: "50%" }}>
              <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
                <View style={{ flexDirection: "row" }}>
                  <MeterialIcon name="account" size={20} />
                  <Text style={{ paddingBottom: 10 }}>M</Text>
                </View>
                <View
                  style={{ height: 1, backgroundColor: "#b7b7b7", marginBottom: 10, paddingRight: 10, marginRight: 10 }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* Interest */}
      <View style={{ padding: 8 }}>
        <View style={{ borderWidth: 1, borderColor: "#03213b" }}>
          <View style={{ backgroundColor: "#03213b" }}>
            <Text style={{ color: "#ffffff", padding: 8 }}>Member Profile</Text>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <TextInput placeholder="Update your Interest Here"></TextInput>
          </View>
        </View>
      </View>
      {/* Social Media links */}
      <View style={{ padding: 8 }}>
        <View style={{ borderWidth: 1, borderColor: "#03213b" }}>
          <View style={{ backgroundColor: "#03213b" }}>
            <Text style={{ color: "#ffffff", padding: 8 }}>Social Media Profile</Text>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <FontIcon name="twitter-square" color="#01aef2" style={{ padding: 4 }} size={24} />
            <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
              <Text style={{ paddingBottom: 10 }}>twiter.co.in</Text>
              <View
                style={{ height: 1, backgroundColor: "#b7b7b7", marginBottom: 10, paddingRight: 10, marginRight: 10 }}
              ></View>
            </View>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <FontIcon name="facebook-square" color="#01aef2" style={{ padding: 4 }} size={24} />
            <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
              <Text style={{ paddingBottom: 10 }}>www.facebook.com</Text>
              <View
                style={{ height: 1, backgroundColor: "#b7b7b7", marginBottom: 10, paddingRight: 10, marginRight: 10 }}
              ></View>
            </View>
          </View>
          <View style={{ flexDirection: "row", padding: 10 }}>
            <FontIcon name="linkedin-square" color="#01aef2" style={{ padding: 4 }} size={24} />
            <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
              <Text style={{ paddingBottom: 10 }}>www.linkedin.com</Text>
              <View
                style={{ height: 1, backgroundColor: "#b7b7b7", marginBottom: 10, paddingRight: 10, marginRight: 10 }}
              ></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});