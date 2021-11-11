import React from "react";
import {
  Image,
  StyleSheet,
  View,
} from "react-native";

export default function ImgFeed({
  feed_img,
}) {
  return (
    <View style={{ marginBottom: 10 }}>
      <Image source={feed_img} resizeMode="cover" style={styles.feedImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  feedImg: {
    width: "100%",
    height: 250,
    marginTop: 10,
    marginBottom: 15,
  },
});
