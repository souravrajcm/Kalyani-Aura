import React from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View, TextInput } from "react-native";
import { log } from "react-native-reanimated";

import FontAswesomeIcon from "react-native-vector-icons/FontAwesome5";

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.top_bar}>
        <FontAswesomeIcon
          style={{ paddingTop: 16, paddingBottom: 16, paddingLeft: 12, paddingRight: 12 }}
          name="chevron-left"
          size={18}
        />
        <View style={styles.search_bar}>
          <TextInput
            style={{ paddingLeft: 2, marginLeft: 4 }}
            placeholder="Search"
            maxLength={10}
            autoFocus={true}
            blurOnSubmit={true}
            onChangeText={(value) => console.log(value)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top_bar: {
    backgroundColor: "#ffffff",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  search_bar: {
    backgroundColor: "#e8e8e8",
    flex: 1,
    borderRadius: 10,
    margin: 10,
  },
});
