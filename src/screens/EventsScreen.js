import React, { useEffect, useState, Component } from "react";
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ApiInterface from "../Api/ApiInterface";
import Events from "../Components/Events";

export default class EventsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsData: [],
      afterStatus: [],
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this._getfeedsData();
  };

  _getfeedsData = async () => {
    this.setState({ refreshing: true });
    const response = await ApiInterface.getEvents();
    if (!response.ok) return console.log(response.data);
    this.setState({ eventsData: response.data.data });

    this._handleURL(this.state.eventsData);
    // console.log(this.state.eventsData);
  };

  componentDidMount() {
    this._getfeedsData();
  }

  _handleURL(reposeData) {
    var a;
    var b;
    for (a = 0; a < reposeData.length; a++) {
      for (b = 0; b < reposeData[a].interested.length; b++) {
        if (reposeData[a].interested[b].id == 40) {
          reposeData[a]["attendStatus"] = true;
        }
      }
    }
    // console.log("**********");
    // console.log(this.state.eventsData);

    var i;
    for (i = 0; i < reposeData.length; i++) {
      if (reposeData[i].image != null) {
        reposeData[i]["image_url"] = reposeData[i].image.split("/")[1].trim();
      }
    }
    this.setState({ refreshing: false });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.eventsData}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          renderItem={({ item }) => (
            <Events
              img={item.image_url}
              date={item.expiration}
              title={item.title}
              subtitle={item.message}
              caption={item.caption}
              location={item.locations.location_name}
              intrestedpersons={item.interested_count}
              item={item}
            />
          )}
        />
      </SafeAreaView>
    );
  }
}

// const data = [
//   {
//     id: 1,
//     img: require("../Assets/event1.jpg"),
//     date: "2021-06-29 16:08:00",
//     title: "Just Thoughts: A Trail Show by Rueben Kaduskar",
//     subtitle:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     caption: "Lorem Ipsum is simply dummy text of the printing ",
//     location: "Nayadhalli",
//     intrestedpersons: "1 Intrested",
//   },
//   {
//     id: 2,
//     img: require("../Assets/event1.jpg"),
//     date: "2021-06-29 16:08:00",
//     title: "Just Thoughts: A Trail Show by Rueben Kaduskar",
//     subtitle:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     caption: "Lorem Ipsum is simply dummy text of the printing ",
//     location: "Nayadhalli",
//     intrestedpersons: "1 Intrested",
//   },
//   {
//     id: 3,
//     img: require("../Assets/event1.jpg"),
//     date: "2021-06-29 16:08:00",
//     title: "Just Thoughts: A Trail Show by Rueben Kaduskar",
//     subtitle:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     caption: "Lorem Ipsum is simply dummy text of the printing ",
//     location: "Nayadhalli",
//     intrestedpersons: "1 Intrested",
//   },
// ];

// const wait = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout));
// };

// export default function EventsScreen() {
//   const [refreshing, setRefreshing] = useState(false);
//   const [events, setEvents] = useState([]);

//   const onRefresh = () => {
//     _getEvents();
//   };

//   const _getEvents = async () => {
//     setRefreshing(true);
//     const response = await ApiInterface.getEvents();
//     if (!response.ok) return console.log(response.data);
//     setEvents(response.data.data);
//     handleURL(events);
//     setRefreshing(false);
//     console.log(response.data);
//   };
// console.log(events[0].id);
// console.log("/////////////////");
// console.log("//////////////" + events);

// useEffect(() => {
//   _getEvents;
// }, []);

// const handleURL = () => {
//   for (var i = 0; i < events.length; i++) {
//     if (events[i].image != null) {
//       events[i]["image_url"] = events[i].image.split("/")[1].trim();
//     }
// console.log(events[0].image_url);
//   }
// };

// console.log(events[0]);

// return (

// );

const styles = StyleSheet.create({
  container: {
    margin: 6,
  },
});
