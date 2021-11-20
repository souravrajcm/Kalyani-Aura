import React, { Component } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  RefreshControl,
  TouchableWithoutFeedback,
} from "react-native";
import { log } from "react-native-reanimated";
import { MaterialIcons, FontAwesome } from "react-native-vector-icons";
import ApiInterface from "../Api/ApiInterface";

import Profile from "../Components/Profile";
export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotification: [],
      refreshing: true,
    };
  }

  _onRefresh() {
    this._getData();
  }

  _getData = async () => {
    this.setState({ refreshing: true });
    const response = await ApiInterface.notification_data();
    if (!response.ok) return console.log("Error :", response.data);
    this.setState({ isNotification: response.data.data });
    this._handleURL(this.state.isNotification);
    this.setState({ refreshing: false });

    // console.log("**", this.state.isNotification[0].action_person.profile_image);
  };

  _handleURL = () => {
    for (var i = 0; i < this.state.isNotification.length; i++) {
      if (this.state.isNotification[i].action_person.profile_image != null)
        this.state.isNotification[i]["profile_img_url"] =
          this.state.isNotification[i].action_person.profile_image
            .split("/")[1]
            .trim();
      // console.log("dta:", this.state.isNotification[i].action_person.profile_image);
    }
    // console.log(this.state.isNotification);
  };

  componentDidMount() {
    this._getData();
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.isNotification}
          refreshControl={
            <RefreshControl
              refreshing={this.props.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <TouchableWithoutFeedback
              onPress={() => this.props.navigation.navigate("commentBox")}
            >
              <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                  <Profile
                    profile_img={item.item.profile_img_url}
                    newImgStyle={styles.profileImg}
                  />
                  <View style={{ marginLeft: 15 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textInput1}>
                        {" "}
                        @ {item.item.action_person.name} -
                      </Text>
                      <Text style={styles.textInput1}> 3 minute ago</Text>
                    </View>
                    <Text style={styles.textInput2}>
                      {item.item.notification_description}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5eaf5",
    minHeight: 80,
    margin: 3,
    marginTop: 2,
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginTop: 12,
    marginLeft: 5,
  },
  textInput1: {
    fontSize: 15,
    marginTop: 18,
    // marginLeft: 10,
  },
  textInput2: {
    fontSize: 16,
    // overflow: "hidden",
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

// import React from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
//   RefreshControl,
// } from "react-native";
// import { MaterialIcons, FontAwesome } from "react-native-vector-icons";

// import Profile from "../Components/Profile";

// const data = [
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
//   {
//     msg: "Sourav raj Liked your post Good Evening",
//   },
// ];

// const wait = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };

// export default function Notification() {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => setRefreshing(false));
//   }, []);
//   return (
//     <ScrollView
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//       }
//     >
//       {data.map((d, k) => (
//         <View style={styles.container} key={k}>
//           <View style={{ flexDirection: "row" }}>
//             <Profile
//               profile_img={require("../Assets/p_img2.jpg")}
//               newImgStyle={styles.profileImg}
//             />
//             <View style={{ marginLeft: 15 }}>
//               <Text style={styles.textInput1}> @souravdev - 3 minute ago </Text>
//               <Text style={styles.textInput2}>{d.msg}</Text>
//             </View>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#d5eaf5",
//     height: 100,
//     margin: 3,
//     marginTop: 3,
//   },
//   profileImg: {
//     width: 70,
//     height: 70,
//     borderRadius: 50,
//     marginTop: 12,
//   },
//   textInput1: {
//     fontSize: 16,
//     marginTop: 18,
//     // marginLeft: 10,
//   },
//   textInput2: {
//     fontSize: 16,
//   },
//   iconBadge: {
//     width: 25,
//     height: 30,
//     borderRadius: 10,
//     backgroundColor: "red",
//     position: "absolute",
//     right: 5,
//     top: -5,
//   },
// });
