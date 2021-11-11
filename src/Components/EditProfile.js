import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  RefreshControl,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { launchImageLibrary, launchCamera } from "react-native-image-picker";

import FeatherIcon from "react-native-vector-icons/Feather";
import MeterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FontIcon from "react-native-vector-icons/FontAwesome";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const options = () => {
  mediaType: "photo";
};

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function EditProfileScreeen() {
  const [fileUri, setFileUri] = useState();
  const [alertView, setalertView] = useState(false);

  const [refreshing, setRefreshing] = React.useState(false);

  const imagepic = () => {
    setalertView(true);
  };

  const openGallary=()=>{

    launchImageLibrary(options,res=>{
      if(res.didCancel){
        console.log("canceldd");
      }else if(res.errorCode){
        console.log('errrorcode');
          }else if(res.errorMessage){
            console.log('eroormsg');
          }else if(res.assets)
          {
            console.log(res.assets[0].uri);
            setFileUri(res.assets[0].uri)
          }

        })
        
      }

const openCamara=()=>{

  launchCamera(options,res=>{
    if(res.didCancel){
      console.log("canceldd");
    }else if(res.errorCode){
      console.log('errrorcode');
    }else if(res.errorMessage){
      console.log('eroormsg');
    }else if(res.assets)
    {
      console.log(res.assets[0].uri);
      setFileUri(res.assets[0].uri)
    }
    
  })
} 
  

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
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
              <TouchableOpacity onPress={()=>openCamara()}>
                <MaterialCommunityIcons
                  name="camera"
                  size={50}
                  color="gray"
                  style={{ marginRight: 100 }}
                />
                <Text>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>openGallary()}>
                <MaterialCommunityIcons
                  name="image"
                  size={50}
                  color="gray"
                  style={{}}
                />
                <Text> Gallery </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={()=>setalertView(false)}>
            <Text style={{textAlign: 'right',marginRight: 25,marginTop: 25, fontSize: 16,color: 'black'}}>CANCEL</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View style={{ flex: 1 }}>
        <View
          style={{ justifyContent: "center", alignSelf: "center", padding: 20 }}
        >
          <ImageBackground
            imageStyle={{ width: 100, height: 100, borderRadius: 50 }}
            source={
              fileUri ? { uri: fileUri } : require("../Assets/p_img2.jpg")
            }
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity onPress={() => imagepic()}>
              <FeatherIcon
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                name="camera"
                size={24}
                color="#ffffff"
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>

        {/* card component */}
        {/* member profile */}
        <View style={{ padding: 8 }}>
          <View style={{ borderWidth: 1, borderColor: "#03213b" }}>
            <View style={{ backgroundColor: "#03213b" }}>
              <Text style={{ color: "#ffffff", padding: 8 }}>
                Member Profile
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <MeterialIcon name="account" size={20} />
              <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
                <Text style={{ paddingBottom: 10 }}>@yadhurajm</Text>
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#b7b7b7",
                    marginBottom: 10,
                    paddingRight: 10,
                    marginRight: 10,
                  }}
                ></View>
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <View style={{ width: "50%" }}>
                <View
                  style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <MeterialIcon name="account" size={20} />
                    <Text style={{ paddingBottom: 10 }}>@yadhurajm</Text>
                  </View>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#b7b7b7",
                      marginBottom: 10,
                      paddingRight: 10,
                      marginRight: 10,
                    }}
                  ></View>
                </View>
              </View>
              <View style={{ width: "50%" }}>
                <View
                  style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <MeterialIcon name="account" size={20} />
                    <Text style={{ paddingBottom: 10 }}>M</Text>
                  </View>
                  <View
                    style={{
                      height: 1,
                      backgroundColor: "#b7b7b7",
                      marginBottom: 10,
                      paddingRight: 10,
                      marginRight: 10,
                    }}
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
              <Text style={{ color: "#ffffff", padding: 8 }}>
                Member Profile
              </Text>
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
              <Text style={{ color: "#ffffff", padding: 8 }}>
                Social Media Profile
              </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <FontIcon
                name="twitter-square"
                color="#01aef2"
                style={{ padding: 4 }}
                size={24}
              />
              <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
                <Text style={{ paddingBottom: 10 }}>twiter.co.in</Text>
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#b7b7b7",
                    marginBottom: 10,
                    paddingRight: 10,
                    marginRight: 10,
                  }}
                ></View>
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <FontIcon
                name="facebook-square"
                color="#01aef2"
                style={{ padding: 4 }}
                size={24}
              />
              <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
                <Text style={{ paddingBottom: 10 }}>www.facebook.com</Text>
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#b7b7b7",
                    marginBottom: 10,
                    paddingRight: 10,
                    marginRight: 10,
                  }}
                ></View>
              </View>
            </View>
            <View style={{ flexDirection: "row", padding: 10 }}>
              <FontIcon
                name="linkedin-square"
                color="#01aef2"
                style={{ padding: 4 }}
                size={24}
              />
              <View style={{ width: "100%", paddingRight: 10, paddingLeft: 4 }}>
                <Text style={{ paddingBottom: 10 }}>www.linkedin.com</Text>
                <View
                  style={{
                    height: 1,
                    backgroundColor: "#b7b7b7",
                    marginBottom: 10,
                    paddingRight: 10,
                    marginRight: 10,
                  }}
                ></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
