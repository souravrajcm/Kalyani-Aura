import React from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import ApiInterface from "../Api/ApiInterface";

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      feedData: this.props.item,
      likes: 0,
    };
    this.state.liked = this.props.liked;
    this.state.likes = this.props.likes;

    // this.get_likes();
    console.log("ni like" + this.state.liked);
  }

  _isLiked = async (like_btn_name, userId, StreamId) => {
    if (this.props.liked) {
      this.setState({ liked: !this.props.liked });
      // console.log(StreamId);
      // console.log("likkkkk");

      // const Likedresponse = await ApiInterface.likePost(userId, StreamId);
      // if (!Likedresponse.ok)
      //   return console.log("error on like api" + response.data);
      // console.log("liked api : " + Likedresponse.data.data);
    } else {
      this.setState({ liked: !this.state.liked });
      // const unlike_response = await ApiInterface.unLikePost(userId, StreamId);
      // if (!unlike_response.status)
      //   return console.log("error on unlike api call");
      // console.log("unlike api : " + unlike_response.data);

      // console.log("unnnnnnn");
    }
  };
  // get_likes = () => {
  //   this.setState({ liked: this.state.feedData.likedStatus });
  // };
  // };

  componentDidMount() {
    this.setState({ liked: this.state.feedData.likedStatus });
    console.log("this will work");
    // this.get_likes();
    // console.log("llll" + this.state.feedData.likedStatus);
    // console.log("llllllllsdfsdf" + this.state.feedData.likes.length);
    // this.state.liked = this.state.feedData.likedStatus;
  }
  // componentDidUpdate() {
  //   //   this.setState({ liked: this.state.feedData.likedStatus });
  // }

  render() {
    // console.log("///////////////");
    // console.log(this.state.liked);
    // this.get_likes();
    // console.log("refreshinfgggg");

    return (
      // <TouchableOpacity
      // onPress={(e) => {
      //   for (
      //     var i = 0;
      //     i < e._dispatchInstances.memoizedProps.children.length;
      //     i++
      //   ) {
      //     for (
      //       var a = 0;
      //       a < e._dispatchInstances.memoizedProps.children[i].name;
      //       a++
      //     ) {
      //       console.log("//////////");
      //     }
      //   }
      // }}
      // >
      <View>
        {
          this.props.liked && this.state.liked ? (
            // this.state.liked ? (
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() =>
                this._isLiked("cards-heart", 40, this.state.feedData.id)
              }
            >
              <MaterialCommunityIcons
                name="cards-heart"
                size={24}
                color="red"
              />
              <Text>{this.props.likes}</Text>
            </TouchableOpacity>
          ) : (
            // ) : (
            //   <TouchableOpacity
            //     style={{ flexDirection: "row" }}
            //     onPress={() =>
            //       this._isLiked("heart-outline", 40, this.state.feedData.id)
            //     }
            //   >
            //     <MaterialCommunityIcons
            //       name="heart-outline"
            //       size={24}
            //       color="green"
            //     />
            //     <Text>{this.props.likes}</Text>
            //   </TouchableOpacity>
            // )
            //  this.state.liked ?
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() =>
                this._isLiked("heart-outline", 40, this.state.feedData.id)
              }
            >
              <MaterialCommunityIcons
                name="heart-outline"
                size={24}
                color="gray"
              />
              <Text>{this.props.likes}</Text>
            </TouchableOpacity>
          )
          //  : (
          //   <TouchableOpacity
          //     style={{ flexDirection: "row" }}
          //     onPress={() =>
          //       this._isLiked("heart-outline", 40, this.state.feedData.id)
          //     }
          //   >
          //     <MaterialCommunityIcons name="cards-heart" size={24} color="blue" />
          //     <Text>{this.props.likes}</Text>
          //   </TouchableOpacity>
          // )
        }
        {/* <MaterialCommunityIcons
          onPress={(e) =>
            console.log(e._dispatchInstances.memoizedProps.children.name)
          }
          name={this.state.liked ? "cards-heart" : "heart-outline"}
          size={24}
          color={this.state.liked ? "red" : "black"}
        /> */}
      </View>
      // </TouchableOpacity>
    );
  }
}

export default Likes;
