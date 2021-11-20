// import { useLinkBuilder } from "@react-navigation/native";
// import React, { useState } from "react";
// import Share from "react-native-share";
// import {
//   Alert,
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableWithoutFeedback,
//   View,
//   TouchableOpacity,
//   StatusBar,
//   FlatList,
// } from "react-native";
// import {
//   AntDesign,
//   Ionicons,
//   MaterialCommunityIcons,
// } from "react-native-vector-icons";

// import ImgFeed from "./ImgFeed";
// import Profile from "./Profile";
// import Likes from "./Likes (2)";
// import MenuList from "./MenuList";

// const feedata = [
//   {
//     status: 200,
//     data: [
//       {
//         id: 193,
//         description: "hello",
//         image: "public/vGmKQATx9y9GCm6PFeUdD02TbjASVpEHELEP05rj.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-11-10T09:24:14.000000Z",
//         updated_at: "2021-11-10T09:24:14.000000Z",
//         comments_count: 0,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [],
//       },
//       {
//         id: 190,
//         description:
//           "It\u2019s no #secret a breath of #fresh air can be an instant form of #stress relief for #people, but it turns out it might be what you hear while taking that #breath that\u2019s #actually doing the calming.",
//         image: "public/X5BeL9lcuBo3732mCt2BC7uZcyQWm9SyvpwJ56vg.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-07-15T10:49:53.000000Z",
//         updated_at: "2021-08-18T08:53:08.000000Z",
//         comments_count: 5,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [
//           {
//             id: 40,
//             name: "yadhurajm",
//           },
//         ],
//       },
//       {
//         id: 189,
//         description:
//           "\u201cBig Sean will at the hmv Underground at 333 Yonge #Kalyaniya#Aura Street on March 24, 2022 at 5:00 PM for an exclusive #TimetoShow #FAN #MEET & #GREET. Space is limited to the first 300 fans on a #LetsTalk first come first served basis (as per the event protocol)\u201d\nWhat #Man and #women tactics do you use when writing event descriptions? Link to your #GrowTogether event and show us your best work or let us know on #Twitter!",
//         image: "public/x9eDXioIYvWAHTAx4YZla8dsZVHas0Pjko307333.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-07-02T09:16:27.000000Z",
//         updated_at: "2021-07-22T04:25:30.000000Z",
//         comments_count: 29,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [],
//       },
//       {
//         id: 188,
//         description:
//           "This ride to the top of Nandi is for beginners and first timers, you will get #TimetoGrow a whole lot of tips and #StayTunned guidance on finishing the climb in #kalyania and events here. Check one off the bucket list. #BeHappy A bunch of riders brave,  of tips and #StayTunned guidance on finishing the climb in #kalyania and events here. Check one off the bucket list. #BeHappy A bunch of riders brave",
//         image: "public/ITaXkEXfUpsSrmr8zexTkGt21XgUcPWOsjHi5T8O.png",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-07-02T08:56:10.000000Z",
//         updated_at: "2021-07-06T10:35:08.000000Z",
//         comments_count: 1,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [],
//       },
//       {
//         id: 168,
//         description:
//           "Find a Comfortable Spot to Focus & Creates Your Best Work at Kalyani AURA Visit us at www.kalyaniaura.com    #KalyaniAura #Bangalore #ManagedWorkspace #Workspaces #OfficeSpace #Office #SharedOffice #FlexibleWorkSpace #ManagedOffice #officedesign #businesscenter #InteriorDesign #officeinteriors #Karnataka #Lockdown #May",
//         image: "public/jH7j4We23ExyAgCkREPKZG5p2LlvO31cLNL1vvD9.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-05-28T08:07:26.000000Z",
//         updated_at: "2021-07-22T04:25:41.000000Z",
//         comments_count: 23,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [
//           {
//             id: 40,
//             name: "yadhurajm",
//           },
//         ],
//       },
//       {
//         id: 167,
//         description:
//           "Check out our Vibrant Spaces at our  Kalyani AURA\r\nVisit us at www.kalyaniaura.com    \r\n#KalyaniAura #Bangalore #ManagedWorkspace #Workspaces #OfficeSpace #Office #SharedOffice #FlexibleWorkSpace #ManagedOffice #officedesign #businesscenter #InteriorDesign #officeinteriors #Karnataka #Lockdown #May",
//         image: "public/aH60wc2adR26nRyN3dcAvqLGpOh08uIowErLH7bW.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-05-28T08:07:04.000000Z",
//         updated_at: "2021-07-22T04:25:44.000000Z",
//         comments_count: 11,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [
//           {
//             id: 40,
//             name: "yadhurajm",
//           },
//         ],
//       },
//       {
//         id: 166,
//         description:
//           "Find a Space that works for you at Kalyani AURA      \r\nVisit us at www.kalyaniaura.com\r\n#KalyaniAura #Bangalore #kalyani #ManagedWorkspace #Workspaces #OfficeSpace #Office #SharedOffice #FlexibleWorkSpace #ManagedOffice #officedesign #businesscenter #InteriorDesign #officeinteriors #Karnataka #Lockdown #May",
//         image: "public/AN7qVPSb3IUpuMDc5EliYIGDNAVViaGGO07ogDth.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-05-28T08:06:39.000000Z",
//         updated_at: "2021-05-30T14:45:59.000000Z",
//         comments_count: 0,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [
//           {
//             id: 40,
//             name: "yadhurajm",
//           },
//         ],
//       },
//       {
//         id: 165,
//         description:
//           "Our Spaces can be Customised to fit as few or as many people as needed at Kalyani AURA     \r\nVisit us at www.kalyaniaura.com    \r\n#KalyaniAura #Bangalore #ManagedWorkspace #Workspaces #OfficeSpace #Office #SharedOffice #FlexibleWorkSpace #ManagedOffice #officedesign #businesscenter #InteriorDesign #officeinteriors #Karnataka #Lockdown #May #Staysafe",
//         image: "public/figa3BU2hXD19vaeqNKDft0VLYoML7E1LdysdWuO.jpg",
//         user_id: 40,
//         post_status: 1,
//         delete_status: 0,
//         created_at: "2021-05-28T08:06:13.000000Z",
//         updated_at: "2021-08-17T04:21:04.000000Z",
//         comments_count: 0,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [
//           {
//             id: 40,
//             name: "yadhurajm",
//           },
//         ],
//       },
//       {
//         id: 164,
//         description:
//           "Re-imagine your Workspace at Kalyani AURA      \r\nVisit us at www.kalyaniaura.com\r\n#KalyaniAura #Bangalore #ManagedWorkspace #Workspaces #OfficeSpace #Office #SharedOffice #FlexibleWorkSpace #ManagedOffice #officedesign #businesscenter #InteriorDesign #officeinteriors #Karnataka #Lockdown #May",
//         image: "public/ZHcqBHiQyGNG8Q4q6oG74iu4VuOIHDqd7EkCbobR.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-05-28T08:05:40.000000Z",
//         updated_at: "2021-05-28T08:05:40.000000Z",
//         comments_count: 1,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [
//           {
//             id: 40,
//             name: "yadhurajm",
//           },
//         ],
//       },
//       {
//         id: 163,
//         description:
//           "Explore the Perfect Balance of Design & Comfort at Kalyani AURA      \r\nVisit us at www.kalyaniaura.com     \r\n#KalyaniAura #Bangalore #ManagedWorkspace #Workspaces #OfficeSpace #Office #SharedOffice #FlexibleWorkSpace #ManagedOffice #officedesign #businesscenter #InteriorDesign #officeinteriors #Karnataka #Lockdown #May",
//         image: "public/zXLasHcgPiyS5meNszGyZXrxTMiPTOygYZZQkjX2.jpg",
//         user_id: 40,
//         post_status: 0,
//         delete_status: 0,
//         created_at: "2021-05-28T08:04:55.000000Z",
//         updated_at: "2021-05-28T08:04:55.000000Z",
//         comments_count: 0,
//         owner: {
//           id: 40,
//           name: "yadhurajm",
//           code: null,
//           mobile: "7865463423",
//           email: "yadhurajm@gmail.com",
//           first_name: "Yadhuraj",
//           last_name: "M",
//           gender: null,
//           area_of_interest: null,
//           designation: null,
//           work_station: 1,
//           working_company: 1,
//           spoc: 0,
//           email_verified_at: null,
//           admin: "false",
//           profile_image: "public/yaSaSFtY2Sf5TanrEv6Arfd9QzvjwejiWxuIE52Y.jpg",
//           created_at: "2021-05-10T08:54:35.000000Z",
//           updated_at: "2021-11-12T04:41:35.000000Z",
//           location: "Nayandahalli",
//           company: "JP Nagar",
//           fb_token:
//             "c6puVN4TSPi3iqQaj-jd1j:APA91bGlb9_HTifqbDVhknDVP67bFnvqLLkuZH6DviQ_yCWd7wtcDd90EVjerWeSb-29xIrEEj4owFLUPr1yLjRF1gkx18A3m_EtQzQPmEif38gBe6VhV-fkdCLabxUNKbDjGG7iIRwE",
//           linkedIn: "www.linkedin.com",
//           facebook: "www.facebook.com",
//           twitter: "twitter.co.in",
//           status: 0,
//         },
//         likes: [
//           {
//             id: 40,
//             name: "yadhurajm",
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default function Feeds({ navigation }) {
//   const [color, setColor] = useState();
//   const [feed, setFeeds] = useState(feedata[0].data);
//   console.log(feed.id);
//   const like = () => {
//     setColor(!color);
// };

// const customShare = async () => {
//   const shareOption = {
//     message: "Some text message",
//   };

//   try {
//     const shareResponse = await Share.open(shareOption);
//   } catch (error) {
//     console.log("Error =>", error);
//   }
// };
// return (
//     <>
//       <View style={{ flex: 1 }}>
//         <FlatList
//           data={feed}
//           keyExtractor={(k) => k.id.toString()}
//           renderItem={(item) => (
//             <View>
//               <View>
//                 <Text style={styles.userName}> {item.item.owner.name} </Text>
//                 <Text style={styles.location}>{item.item.owner.name}</Text>
//               </View>
//             </View>
//           )}
//         />
//       </View>

//       <View style={{ marginTop: 3, padding: 3 }}>
//         <StatusBar translucent={true} barStyle="dark-content" />
//         {data.map((d, k) => (
//           // <View key={k} style={styles.container}>
//           //   {console.log(d.data[0].di)}
//           //   <View style={{ display: "flex", flexDirection: "row" }}>
//           //     <Profile newImgStyle={styles.newImgStyle} profile_img={d.p_img} />
//           //     <TouchableWithoutFeedback
//           //       onPress={() => {
//           //         navigation.navigate("profile1", {
//           //           userName: `${d.userName}`,
//           //         });
//           //       }}
//           //     >
//           //       <View>
//           //         <Text style={styles.userName}> {d.userName} </Text>
//           //         <Text style={styles.location}>{d.place}</Text>
//           //       </View>
//           //     </TouchableWithoutFeedback>

//           //    <MenuList navigation={navigation} />
//           //     {/* {
//           //       edit&&

//           //     <View style={{width:200,height:80,backgroundColor:'red' ,position:"absolute",zIndex:1,elevation:1,right:10,marginTop:30}}>
//           //       <TouchableOpacity onPress={()=>{}}>

//           //       <Text>Edit</Text>
//           //       </TouchableOpacity>
//           //       <Text>Delete</Text>
//           //     </View>
//           //     } */}
//           //   </View>
//           //   <View style={{ paddingLeft: 10, paddingRight: 10 }}>
//           //     <Text style={{ fontSize: 16 }} numberOfLines={3}>
//           //       Lorem <Text style={{ color: "#1E90FF" }}>#Ipsum</Text> is simply
//           //       dummy text of the printing and typesetting{" "}
//           //       <Text style={{ color: "#1E90FF" }}>#industry</Text>. Lorem Ipsum
//           //       has been the industry's standard dummy text ever{" "}
//           //       <Text style={{ color: "#1E90FF" }}>#since </Text>the 1500s, when
//           //       an unknown printer took a galley of type and scrambled it to make
//           //       a type <Text style={{ color: "#1E90FF" }}>#specimen</Text> book.
//           //     </Text>
//           //   </View>

//           //   <TouchableOpacity
//           //     onPress={() => {
//           //       navigation.navigate("HomeDetailPage", {
//           //         userName: `${d.userName}`,
//           //         post_img: `${d.img}`,
//           //       });
//           //     }}
//           //   >
//           //     <ImgFeed feed_img={d.img} updateDate={d.sub_title} />
//           //   </TouchableOpacity>
//           //   <View
//           //     style={{
//           //       display: "flex",
//           //       flexDirection: "row",
//           //       marginLeft: 10,
//           //       justifyContent: "space-between",
//           //       // marginBottom: 10,
//           //     }}
//           //   >
//           //    <Likes liked={d.liked} likes={d.likes} />
//           //     <TouchableOpacity
//           //       onPress={() => {
//           //         navigation.navigate("commentBox", {
//           //           profile_img: `${d.p_img}`,
//           //           userName: `${d.userName}`,
//           //           place: `${d.place}`,
//           //           feed_img: `${d.img}`,
//           //         })
//           //       }}
//           //     >
//           //       <Ionicons
//           //         name="chatbubble-outline"
//           //         size={22}
//           //         color="gray"
//           //         style={styles.iconStyle}
//           //       >
//           //         <Text
//           //           style={{ fontSize: 14, textAlign: "center", color: "gray" }}
//           //         >
//           //           0
//           //         </Text>
//           //       </Ionicons>
//           //     </TouchableOpacity>
//           //       <TouchableOpacity onPress={customShare} >
//           //     <MaterialCommunityIcons
//           //       name="share-variant"
//           //       size={22}
//           //       color="gray"
//           //       style={{ marginRight: 25 }}
//           //     />
//           //     </TouchableOpacity>
//           //   </View>
//           //   <Text style={{ color: "gray", marginLeft: 5, fontSize: 12,marginTop:1,marginBottom:5 }}>
//           //     {" "}
//           //     {d.sub_title}
//           //   </Text>
//           // </View>
//           <></>
//         ))}
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     backgroundColor: "#FFFFFF",
//     elevation: 0.5,
//     marginBottom: 8,
//     overflow: "hidden",
//   },
//   newImgStyle: {
//     width: 50,
//     height: 50,
//     margin: 10,
//     borderWidth: 1.5,
//     borderColor: "#FF1493",
//   },
//   userName: {
//     color: "black",
//     marginLeft: 5,
//     marginTop: 15,
//     fontWeight: "bold",
//     fontSize: 18,
//   },
//   location: {
//     marginLeft: 8,
//   },
//   postDate: {
//     marginTop: 15,
//     color: "black",
//     position: "absolute",
//   },
//   topIconStyle: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//   },
// });
