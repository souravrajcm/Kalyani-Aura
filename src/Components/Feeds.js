import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Alert,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  RefreshControl,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import Share from "react-native-share";

import ImgFeed from "./ImgFeed";
import Profile from "./Profile";
import Likes from "./Likes ";
import MenuList from "./MenuList";
import ApiInterface from "../Api/ApiInterface";

const customShare = async () => {
  const shareOption = {
    message: "Hello world",
  };

  try {
    const shareResponse = await Share.open(shareOption);
  } catch (error) {
    console.log("Error =>", error);
  }
};

export default class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedsData: [],
      feedsafter: [],
      refreshing: false,
    };
  }

  _onRefresh = () => {
    this._getfeedsData();
    // console.log("////////////////////////////");
  };

  _getfeedsData = async () => {
    this.setState({ refreshing: true });
    const response = await ApiInterface.getFeedsList();
    if (!response.ok) return console.log("error on api call" + response.data);
    this.setState({ feedsData: response.data.data });
    this._handleURL(this.state.feedsData);
    // console.log("api:" + this.state.feedsData);
    console.log("////////////////////");
  };

  componentDidMount() {
    this._getfeedsData();
  }

  _handleURL() {
    var i;
    for (i = 0; i < this.state.feedsData.length; i++) {
      //   console.log(this.state.feedsData[i].likes);
      //   console.log(
      //     "propic" + this.state.feedsData[i].image.split("/")[1].trim()
      //   );

      if (this.state.feedsData[i].image != null) {
        this.state.feedsData[i]["image_url"] = this.state.feedsData[i].image
          .split("/")[1]
          .trim();
      }

      this.state.feedsData[i]["profile_img_url"] = this.state.feedsData[
        i
      ].owner.profile_image
        .split("/")[1]
        .trim();
      // console.log(this.state.feedsData[i]["profile_img_url"]);
    }

    // console.log("image_url", this.state.feedsData[0].image_url);
    var q;
    var b;
    // console.log("/////////////");
    // console.log("New ", this.state.feedsData.length);
    if (this.state.feedsData.length == 0) {
      this.state.feedsData[q]["likedStatus"] = false;
    } else {
      for (q = 0; q < this.state.feedsData.length; q++) {
        for (b = 0; b < this.state.feedsData[q].likes.length; b++) {
          if (this.state.feedsData[q].likes == 0) {
            this.state.feedsData[q]["likedStatus"] = false;
          } else {
            if (this.state.feedsData[q].likes[b].id === 40) {
              this.state.feedsData[q]["likedStatus"] = true;
            } else {
              this.state.feedsData[q]["likedStatus"] = false;
            }
          }
        }
      }
    }

    // console.log(this.state.feedsData[0]["profile_img_url"]);
    this.setState({ feedsafter: this.state.feedsData });
    // console.log("Liked status :" + this.state.feedsafter[2].likedStatus);
    this.setState({ refreshing: false });

    console.log("likesss:" + this.state.feedsafter[2].likedStatus);
  }
  render() {
    // console.log("pic" + this.state.feedsData.likedStatus);
    return (
      <View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this._onRefresh()}
            />
          }
          data={this.state.feedsData}
          keyExtractor={(key) => key.id.toString()}
          renderItem={(item) => (
            <View style={styles.container}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Profile
                  newImgStyle={styles.newImgStyle}
                  profile_img={item.item.profile_img_url}
                />
                {/* {/* {console.log("sdfsdfsdf????????????????????")} */}
                {/* {console.log("statusssss:" + item.item.likedStatus)} */}
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.navigate.navigate("profile1");
                  }}
                >
                  <View>
                    <Text style={styles.userName}>{item.item.owner.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.location}>
                        {item.item.owner.company}
                      </Text>
                      <Text style={styles.location}>
                        {item.item.owner.location}
                      </Text>
                      {/* {console.log("Likes" + item.item.likedStatus)} */}
                    </View>
                  </View>
                </TouchableWithoutFeedback>

                <MenuList navigation={this.props.navigate.navigate} />
              </View>
              <View style={{ paddingLeft: 10, paddingRight: 10 }}>
                <Text style={{ fontSize: 16 }} numberOfLines={3}>
                  {item.item.description}
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.props.navigate.navigate("HomeDetailPage", {
                    userName: `${item.item.owner.name}`,
                    description: `${item.item.description}`,
                    post_img: `${item.item.image_url}`,
                  });
                }}
              >
                <ImgFeed feed_img={item.item.image_url} />
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: 10,
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <Likes
                  likes={item.item.likes.length}
                  liked={item.item.likedStatus}
                  item={item.item}
                />
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigate.navigate("commentBox", {
                      profile_img: `${item.item.image_url}`,
                      userName: `${item.item.owner.name}`,
                      companyName: `${item.item.owner.company}`,
                      place: `${item.item.owner.location}`,
                      description: `${item.item.description}`,
                      feed_img: `${item.item.image_url}`,
                      profile_img: `${item.item.profile_img_url}`,
                      comment_count: `${item.item.comments_count}`,
                      like_count: `${item.item.likes.length}`,
                    });
                  }}
                >
                  <Ionicons
                    name="chatbubble-outline"
                    size={22}
                    color="gray"
                    style={styles.iconStyle}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        textAlign: "center",
                        color: "gray",
                      }}
                    >
                      {item.item.comments_count}
                    </Text>
                  </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity onPress={customShare}>
                  <MaterialCommunityIcons
                    name="share-variant"
                    size={22}
                    color="gray"
                    style={{ marginRight: 25 }}
                  />
                </TouchableOpacity>
              </View>
              {/* <Text
                style={{
                  color: "gray",
                  marginLeft: 5,
                  fontSize: 12,
                  marginTop: 1,
                  marginBottom: 5,
                }}
              >
                {" "}
                {d.sub_title}
              </Text> */}
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    elevation: 0.5,
    // marginBottom: 8,
    overflow: "hidden",
    marginTop: 10,
    paddingTop: 5,
  },
  newImgStyle: {
    width: 50,
    height: 50,
    margin: 10,
    borderWidth: 1.5,
    borderColor: "#FF1493",
  },
  userName: {
    color: "black",
    marginLeft: 5,
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  location: {
    marginLeft: 8,
  },
  postDate: {
    marginTop: 15,
    color: "black",
    position: "absolute",
  },
  topIconStyle: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
