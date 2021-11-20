import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function ImgFeed({ feed_img }) {
  // console.log(feed_img == undefined);
  return (
    <View style={{ marginBottom: 10 }}>
      {feed_img != "undefined" && feed_img != undefined ? (
        <Image
          source={{
            uri: "https://mobileapp.kalyaniaura.com/storage/" + feed_img,
          }}
          resizeMode="cover"
          style={styles.feedImg}
        />
      ) : (
        <></>
      )}
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
