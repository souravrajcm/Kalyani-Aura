import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from "react-native";
import { MaterialIcons, FontAwesome } from "react-native-vector-icons";

import Profile from "../Components/Profile";

const data = [
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
  {
    msg: "Sourav raj Liked your post Good Evening",
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function Notification() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {data.map((d, k) => (
        <View style={styles.container} key={k}>
          <View style={{ flexDirection: "row" }}>
            <Profile
              profile_img={require("../Assets/p_img2.jpg")}
              newImgStyle={styles.profileImg}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.textInput1}> @souravdev - 3 minute ago </Text>
              <Text style={styles.textInput2}>{d.msg}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d5eaf5",
    height: 100,
    margin: 3,
    marginTop: 3,
  },
  profileImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 12,
  },
  textInput1: {
    fontSize: 16,
    marginTop: 18,
    // marginLeft: 10,
  },
  textInput2: {
    fontSize: 16,
  },
  iconBadge: {
    width: 25,
    height: 30,
    borderRadius: 10,
    backgroundColor: "red",
    position: "absolute",
    right: 5,
    top: -5,
  },
});
