import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ApiInterface from "../Api/ApiInterface";

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      attend: false,
      eventPost: this.props.item,
      attendCount: 0,
    };
  }

  getAttend = (curentStatus, userId, eventId) => {
    if (curentStatus == "ATTEND") {
      this.setState({ attend: true });
      this.setState({ attendCount: this.state.attendCount + 1 });
      // console.log(curentStatus, userId, eventId);
      const response = ApiInterface.eventAttend(userId, eventId);
      if (!response.ok) return console.log(response.data);
      console.log(response.data);
    } else {
      this.setState({ attend: false });
      this.setState({ attendCount: this.state.attendCount - 1 });
      console.log(curentStatus, userId, eventId);
      const response = ApiInterface.eventUnAttend(userId, eventId);
      if (!response.ok) return console.log(response.data);
      console.log(response.data);
    }
  };

  componentDidMount() {
    // console.log(this.state.eventPost);
    this.state.attend = this.state.eventPost.attendStatus;
    this.state.attendCount = this.props.intrestedpersons;
    console.log(this.state.attendCount);
  }

  render() {
    return (
      <View style={{ backgroundColor: "white", padding: 6, marginBottom: 6 }}>
        <Image
          source={{
            uri: "https://restapi.kalyaniaura.com/storage/" + this.props.img,
          }}
          resizeMode="cover"
          style={{ width: "100%", height: 200 }}
        />
        <Text style={{ marginTop: 6 }}>{this.props.date}</Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, letterSpacing: 0.4 }}>
          {this.props.title}
        </Text>
        <Text numberOfLines={4} style={{ marginTop: 6, fontSize: 16 }}>
          {this.props.subtitle}
        </Text>
        {/* <Text style={{ marginTop: 8 }}>{caption}</Text> */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="map-pin" size={16} style={{ marginRight: 8 }} />
            <Text>{this.props.location}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcon
              name="gesture-tap"
              size={20}
              style={{ marginRight: 8, transform: [{ rotate: "-20deg" }] }}
            />
            <Text>{this.state.attendCount}</Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.attend_btn}>
          {
            <Text
              onPress={(event) =>
                console.log(event._dispatchInstances.memoizedProps.children)
              }
              style={{ color: "white" }}
            >
              {this.state.eventPost.attendStatus ? "UN ATTEND" : "ATTEND"}
            </Text>
          }
        
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.attend_btn}>
          <Text
            onPress={(d) =>
              this.getAttend(
                d._dispatchInstances.memoizedProps.children,
                40,
                this.state.eventPost.id
              )
            }
            style={{ color: "white" }}
          >
            {this.state.attend ? "UN ATTEND" : "ATTEND"}
          </Text>

          {/* {this.state.attend ? (
            <Text style={{ color: "white" }}> ATTEND</Text>
          ) : (
            <Text style={{ color: "white" }}>UN ATTEND</Text>
          )} */}
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  attend_btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b0145",
    paddingTop: 6,
    paddingBottom: 6,
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 8,
  },
});
