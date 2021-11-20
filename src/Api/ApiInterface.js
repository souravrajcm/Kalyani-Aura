import client from "../Api/client";

const auth = {
  headers: {
    Authorization:
      "86DF65DDD11F6A18EBBB9ADD00FC0B084F6303FAA6E3304E20A9E0B0593A108A",
  },
};
//get Feeds list from API

const getFeedsList = () => client.get("/feeds", {}, auth);

//post Feed to Api
const createNewFeed = (descriptions, user_id) =>
  client.post(
    "/feeds",
    {
      description: descriptions,
      user_id: 40,
    },
    auth
  );

//post comment
const postComment = (userId, feedId, comment_description) => {
  client.post(
    "/user/" + `${userId}` + "/feed/" + `${feedId}` + "/comment",
    {
      comment_description: comment_description,
    },
    auth
  );
};

//Like Post
const likePost = (userId, StreamId) =>
  client.put(
    "/users/" + `${userId}` + "/poststream/" + `${StreamId}`,
    {},
    auth
  );

//Unlike Post
const unLikePost = (userId, StreamId) =>
  client.delete(
    "/users/" + `${userId}` + "/poststream/" + `${{ StreamId }}`,
    {},
    auth
  );

//Notification from api
const notification_data = () => client.get("/notification/40", {}, auth);

//get Supporttckets from api
const getSupportTikets = () =>
  client.post("/mysupporttickets", { user_id: 40 }, auth);

//get Events from api
const getEvents = () => client.get("/announcement", {}, auth);

//post Events attend from api
const eventAttend = (UserId, eventId) =>
  client.put(
    "/announcement/" + `${eventId}` + "/users/" + `${UserId}`,
    {},
    auth
  );

//delete Events attend from api
const eventUnAttend = (UserId, eventId) =>
  client.delete(
    "/announcement/" + `${eventId}` + "/users/" + `${UserId}`,
    {},
    auth
  );

export default {
  getFeedsList,
  createNewFeed,
  getSupportTikets,
  getEvents,
  eventAttend,
  eventUnAttend,
  likePost,
  unLikePost,
  notification_data,
};
