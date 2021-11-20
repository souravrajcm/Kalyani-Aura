import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Feeds from "../Components/Feeds";
import TopViewBrandComponent from "../Components/TopViewBrandComponent";
import Profile from "../Components/Profile";

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Feeds navigate={navigation} />
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate("createPost");
        }}
      >
        <View style={styles.fab}>
          <MaterialCommunityIcons
            name="pencil"
            size={30}
            color="#fff"
            style={{ alignSelf: "center", marginTop: 13 }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  fab: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#070745",
    position: "absolute",
    right: 15,
    bottom: 50,
    // top: 520,
  },
});
