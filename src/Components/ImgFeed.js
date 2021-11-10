import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function ImgFeed({ feed_img, updateDate,updateStyle}) {
  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <View>
          <Image source={feed_img} resizeMode="cover" style={styles.feedImg} />
        </View>
        <View
          style={[updateStyle,{
            display: "flex",
            flexDirection: "row",
            marginLeft: 10,
            justifyContent: "space-between",
            // marginBottom: 10,
          }]}
        >
          <AntDesign
            name="heart"
            size={22}
            color="red"
            style={{ marginLeft: 20 }}
          >
            {" "}
            <Text style={{ fontSize: 14, textAlign: "center",color: 'gray' }}>1</Text>
          </AntDesign>
          <Ionicons
            name="chatbubble-outline"
            size={22}
            color="gray"
            style={styles.iconStyle}
          >
            {" "}
            <Text style={{ fontSize: 14, textAlign: "center",color: 'gray' }}>0</Text>
          </Ionicons>
          <MaterialCommunityIcons
            name="share-variant"
            size={22}
            color="gray"
            style={{ marginRight: 25 }}
          />
        </View>
        <Text style={{color: 'gray',marginLeft:5, fontSize: 12,}}> {updateDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  feedImg: {
    width: '100%',
    // maxHeight: 250,
    height: 250,
    marginTop: 10,
    marginBottom: 15,
  },
  iconStyle: {
    // marginRight: 15,
  },
});
