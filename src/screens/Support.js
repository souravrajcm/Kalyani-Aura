import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  FlatList,
} from "react-native";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import ApiInterface from "../Api/ApiInterface";
import VerticalLine from "../Components/VerticalLine";
import Moment from "moment";

const data = [
  {
    status: 200,
    data: [
      {
        id: 100,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "no ink",
        image: "public/VLVyLmUqBqEO3p9J6KyEitkJe3s4FeA9yGr4cjx2.jpg",
        status: "Pending",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-11-12T14:34:23.000000Z",
        updated_at: "2021-11-12T14:34:23.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [],
      },
      {
        id: 99,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "test",
        image: null,
        status: "Pending",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-11-12T14:17:40.000000Z",
        updated_at: "2021-11-12T14:17:40.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [],
      },
      {
        id: 98,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "My Printer is not working",
        image: null,
        status: "Pending",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-08-14T09:38:19.000000Z",
        updated_at: "2021-08-14T09:38:19.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [
          {
            id: 49,
            message: "Hello please check its been 10 Days",
            supportticket_id: 98,
            created_by: "0",
            created_at: "2021-08-14T09:55:19.000000Z",
            updated_at: "2021-08-14T09:55:19.000000Z",
          },
        ],
      },
      {
        id: 97,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "haiiiii thisdescription",
        image: null,
        status: "Assigned",
        scope_id: 23,
        asset_location: "pn-tkm-sm-tni-pmli-tcdr",
        created_at: "2021-08-11T10:21:25.000000Z",
        updated_at: "2021-08-18T12:22:40.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [
          {
            id: 58,
            message: "test",
            supportticket_id: 97,
            created_by: "0",
            created_at: "2021-11-04T12:30:42.000000Z",
            updated_at: "2021-11-04T12:30:42.000000Z",
          },
          {
            id: 56,
            message: "working is in profresssdone",
            supportticket_id: 97,
            created_by: "0",
            created_at: "2021-08-16T07:33:06.000000Z",
            updated_at: "2021-08-16T07:33:06.000000Z",
          },
          {
            id: 55,
            message: "working is in profresss going",
            supportticket_id: 97,
            created_by: "0",
            created_at: "2021-08-16T07:32:51.000000Z",
            updated_at: "2021-08-16T07:32:51.000000Z",
          },
          {
            id: 54,
            message: "working is in profresss",
            supportticket_id: 97,
            created_by: "0",
            created_at: "2021-08-16T07:31:46.000000Z",
            updated_at: "2021-08-16T07:31:46.000000Z",
          },
          {
            id: 53,
            message: "hey take my ticket is this",
            supportticket_id: 97,
            created_by: "0",
            created_at: "2021-08-16T07:27:45.000000Z",
            updated_at: "2021-08-16T07:27:45.000000Z",
          },
          {
            id: 51,
            message: "hey take my ticket thiss isss",
            supportticket_id: 97,
            created_by: "0",
            created_at: "2021-08-14T10:48:22.000000Z",
            updated_at: "2021-08-14T10:48:22.000000Z",
          },
          {
            id: 47,
            message: "hey take my ticket",
            supportticket_id: 97,
            created_by: "0",
            created_at: "2021-08-12T04:02:35.000000Z",
            updated_at: "2021-08-12T04:02:35.000000Z",
          },
        ],
      },
      {
        id: 96,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "haiiiii this",
        image: null,
        status: "Assigned",
        scope_id: 23,
        asset_location: "pn-tkm-sm-tni-pmli-tcdr",
        created_at: "2021-08-11T10:19:24.000000Z",
        updated_at: "2021-08-17T06:04:56.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [
          {
            id: 62,
            message: "something",
            supportticket_id: 96,
            created_by: "0",
            created_at: "2021-11-06T06:07:47.000000Z",
            updated_at: "2021-11-06T06:07:47.000000Z",
          },
          {
            id: 61,
            message: "f",
            supportticket_id: 96,
            created_by: "0",
            created_at: "2021-11-06T06:07:39.000000Z",
            updated_at: "2021-11-06T06:07:39.000000Z",
          },
          {
            id: 60,
            message: "testing....",
            supportticket_id: 96,
            created_by: "0",
            created_at: "2021-11-06T05:28:55.000000Z",
            updated_at: "2021-11-06T05:28:55.000000Z",
          },
        ],
      },
      {
        id: 95,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "ticket description is there are more",
        image: null,
        status: "Pending",
        scope_id: 23,
        asset_location: "pn-tkm-sm-tni-pmli-tcdr",
        created_at: "2021-08-11T10:12:03.000000Z",
        updated_at: "2021-08-17T05:57:57.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [],
      },
      {
        id: 94,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "ticket description is",
        image: null,
        status: "assigned",
        scope_id: 23,
        asset_location: "pn-tkm-sm-tni-pmli-tcdr",
        created_at: "2021-08-11T10:09:30.000000Z",
        updated_at: "2021-09-11T10:45:56.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [
          {
            id: 57,
            message: "rfff",
            supportticket_id: 94,
            created_by: "0",
            created_at: "2021-10-29T04:21:34.000000Z",
            updated_at: "2021-10-29T04:21:34.000000Z",
          },
        ],
      },
      {
        id: 93,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "muru gdfgdfg",
        image: null,
        status: "assigned",
        scope_id: 23,
        asset_location: "pn-tkm-sm-tni-pmli-tcdr",
        created_at: "2021-08-11T10:00:48.000000Z",
        updated_at: "2021-09-11T10:51:00.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [],
      },
      {
        id: 92,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "muru",
        image: null,
        status: "assigned",
        scope_id: 23,
        asset_location: "pn-tkm-sm-tni-pmli-tcdr",
        created_at: "2021-08-11T10:00:13.000000Z",
        updated_at: "2021-08-17T06:21:32.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [],
      },
      {
        id: 91,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "muru",
        image: null,
        status: "assigned",
        scope_id: 23,
        asset_location: "pn-tkm-sm-tni-pmli-tcdr",
        created_at: "2021-08-11T09:53:15.000000Z",
        updated_at: "2021-09-08T12:06:12.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [],
      },
      {
        id: 90,
        sub_category_id: 71,
        user_id: 40,
        location_id: 1,
        ticket_description: "hi Helen",
        image: "public/BfU7mX4ZfaSPSDioSrAGM8M3pWYTSphhopFFuiSH.jpg",
        status: "Pending",
        scope_id: 26,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-23T07:54:34.000000Z",
        updated_at: "2021-07-23T07:54:34.000000Z",
        subcategory: {
          id: 71,
          supportcategory_id: 50,
          sub_category: "Not Clean",
          created_at: "2021-07-07T09:08:11.000000Z",
          updated_at: "2021-07-07T09:08:11.000000Z",
        },
        comment: [],
      },
      {
        id: 89,
        sub_category_id: 71,
        user_id: 40,
        location_id: 1,
        ticket_description: "workspaces not clean",
        image: null,
        status: "Assigned",
        scope_id: 26,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-20T08:58:17.000000Z",
        updated_at: "2021-07-31T05:49:40.000000Z",
        subcategory: {
          id: 71,
          supportcategory_id: 50,
          sub_category: "Not Clean",
          created_at: "2021-07-07T09:08:11.000000Z",
          updated_at: "2021-07-07T09:08:11.000000Z",
        },
        comment: [
          {
            id: 45,
            message: "hi",
            supportticket_id: 89,
            created_by: "0",
            created_at: "2021-07-29T05:35:59.000000Z",
            updated_at: "2021-07-29T05:35:59.000000Z",
          },
        ],
      },
      {
        id: 88,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "d\nd\ndd\n\nd\ndtestibf\nkey\nprinter",
        image: "public/tyg8PUP8hrGsoo5w81TZYZTKo6qpWGtW6jklG6jo.jpg",
        status: "assigned",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-18T06:57:48.000000Z",
        updated_at: "2021-07-23T07:39:56.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [
          {
            id: 59,
            message: "Testing....",
            supportticket_id: 88,
            created_by: "0",
            created_at: "2021-11-06T04:30:47.000000Z",
            updated_at: "2021-11-06T04:30:47.000000Z",
          },
          {
            id: 34,
            message: "please some body help",
            supportticket_id: 88,
            created_by: "0",
            created_at: "2021-07-19T12:24:23.000000Z",
            updated_at: "2021-07-19T12:24:23.000000Z",
          },
          {
            id: 33,
            message: "how long it takes",
            supportticket_id: 88,
            created_by: "0",
            created_at: "2021-07-19T12:24:14.000000Z",
            updated_at: "2021-07-19T12:24:14.000000Z",
          },
          {
            id: 32,
            message: "hi any status",
            supportticket_id: 88,
            created_by: "0",
            created_at: "2021-07-19T12:24:06.000000Z",
            updated_at: "2021-07-19T12:24:06.000000Z",
          },
        ],
      },
      {
        id: 87,
        sub_category_id: 74,
        user_id: 40,
        location_id: 1,
        ticket_description: "slow net",
        image: null,
        status: "Assigned",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-18T06:54:20.000000Z",
        updated_at: "2021-07-23T08:53:52.000000Z",
        subcategory: {
          id: 74,
          supportcategory_id: 51,
          sub_category: "Internet Too Slow",
          created_at: "2021-07-07T09:08:38.000000Z",
          updated_at: "2021-07-07T09:08:38.000000Z",
        },
        comment: [
          {
            id: 19,
            message: "sloved",
            supportticket_id: 87,
            created_by: "0",
            created_at: "2021-07-18T06:54:33.000000Z",
            updated_at: "2021-07-18T06:54:33.000000Z",
          },
        ],
      },
      {
        id: 85,
        sub_category_id: 68,
        user_id: 40,
        location_id: 1,
        ticket_description: "Printer Not working",
        image: "public/TsDfF7N9GL8fQelYgwmHPDsxAaXvwe5rsJnxAIrT.jpg",
        status: "Assigned",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-15T13:21:33.000000Z",
        updated_at: "2021-07-23T04:15:11.000000Z",
        subcategory: {
          id: 68,
          supportcategory_id: 49,
          sub_category: "Printer Not Turning On",
          created_at: "2021-07-07T09:07:43.000000Z",
          updated_at: "2021-07-07T09:07:43.000000Z",
        },
        comment: [
          {
            id: 41,
            message: "How can ihelpyou",
            supportticket_id: 85,
            created_by: "1",
            created_at: "2021-07-23T04:14:25.000000Z",
            updated_at: "2021-07-23T04:14:25.000000Z",
          },
          {
            id: 40,
            message: "Hi, Good Morning.",
            supportticket_id: 85,
            created_by: "1",
            created_at: "2021-07-23T04:14:10.000000Z",
            updated_at: "2021-07-23T04:14:10.000000Z",
          },
          {
            id: 18,
            message: "Hi",
            supportticket_id: 85,
            created_by: "0",
            created_at: "2021-07-17T04:57:46.000000Z",
            updated_at: "2021-07-17T04:57:46.000000Z",
          },
        ],
      },
      {
        id: 84,
        sub_category_id: 71,
        user_id: 40,
        location_id: 1,
        ticket_description: "scds",
        image: "public/9OC0xBt0Aq42CtSOeu7OAnoyObuOCzHIDf9fXJ51.jpg",
        status: "Pending",
        scope_id: 26,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-15T10:51:37.000000Z",
        updated_at: "2021-07-15T10:51:37.000000Z",
        subcategory: {
          id: 71,
          supportcategory_id: 50,
          sub_category: "Not Clean",
          created_at: "2021-07-07T09:08:11.000000Z",
          updated_at: "2021-07-07T09:08:11.000000Z",
        },
        comment: [],
      },
      {
        id: 83,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "hi",
        image: "public/TaxibhFX9jO2tRrd9S8ZiUPxV5Qvnn7vzuhzvdQ5.jpg",
        status: "Due",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-15T08:11:24.000000Z",
        updated_at: "2021-07-23T08:42:35.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [
          {
            id: 44,
            message: "Hallow my name is jaseel, how can i help you",
            supportticket_id: 83,
            created_by: "1",
            created_at: "2021-07-26T12:35:44.000000Z",
            updated_at: "2021-07-26T12:35:44.000000Z",
          },
          {
            id: 39,
            message: "Hallow my name is jaseel, how can i help you",
            supportticket_id: 83,
            created_by: "1",
            created_at: "2021-07-22T12:36:52.000000Z",
            updated_at: "2021-07-22T12:36:52.000000Z",
          },
        ],
      },
      {
        id: 82,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "test",
        image: "public/yNU2deWulCCDdjsQBBCwmRbdFq2huWRs4HGJNVKb.jpg",
        status: "Assigned",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-15T08:10:53.000000Z",
        updated_at: "2021-07-23T08:56:34.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [
          {
            id: 38,
            message: "Hallow my name is jaseel, how can i help you",
            supportticket_id: 82,
            created_by: "1",
            created_at: "2021-07-22T04:26:25.000000Z",
            updated_at: "2021-07-22T04:26:25.000000Z",
          },
          {
            id: 14,
            message: "What's the status",
            supportticket_id: 82,
            created_by: "0",
            created_at: "2021-07-15T13:21:07.000000Z",
            updated_at: "2021-07-15T13:21:07.000000Z",
          },
        ],
      },
      {
        id: 81,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "Test",
        image: "public/Ar8RWia7c8JqoZWhxse1JRLQnkuj9ZNk4HnZt33O.jpg",
        status: "Assigned",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-15T08:06:30.000000Z",
        updated_at: "2021-07-23T08:54:02.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [
          {
            id: 42,
            message: "Hi",
            supportticket_id: 81,
            created_by: "1",
            created_at: "2021-07-23T06:36:14.000000Z",
            updated_at: "2021-07-23T06:36:14.000000Z",
          },
          {
            id: 16,
            message: "Hello",
            supportticket_id: 81,
            created_by: "0",
            created_at: "2021-07-16T11:15:42.000000Z",
            updated_at: "2021-07-16T11:15:42.000000Z",
          },
        ],
      },
      {
        id: 80,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "as",
        image: "public/ZQUgcUyaMJRc14lNdvXvQgwbVB2EtQ04ZwXrcYiH.jpg",
        status: "Assigned",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-15T07:06:29.000000Z",
        updated_at: "2021-07-22T10:06:45.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [],
      },
      {
        id: 79,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "Printer not working",
        image: null,
        status: "Closed",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-07-01T10:34:57.000000Z",
        updated_at: "2021-07-23T08:41:40.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [
          {
            id: 43,
            message: "Hello",
            supportticket_id: 79,
            created_by: "1",
            created_at: "2021-07-23T06:55:46.000000Z",
            updated_at: "2021-07-23T06:55:46.000000Z",
          },
          {
            id: 27,
            message: "Hallow my name is jaseel, how can i help you",
            supportticket_id: 79,
            created_by: "1",
            created_at: "2021-07-19T04:55:47.000000Z",
            updated_at: "2021-07-19T04:55:47.000000Z",
          },
          {
            id: 26,
            message: "sorry",
            supportticket_id: 79,
            created_by: "1",
            created_at: "2021-07-19T04:51:22.000000Z",
            updated_at: "2021-07-19T04:51:22.000000Z",
          },
          {
            id: 25,
            message: "Still checking your complant",
            supportticket_id: 79,
            created_by: "1",
            created_at: "2021-07-19T04:50:08.000000Z",
            updated_at: "2021-07-19T04:50:08.000000Z",
          },
          {
            id: 13,
            message: "any update",
            supportticket_id: 79,
            created_by: "0",
            created_at: "2021-07-01T10:35:16.000000Z",
            updated_at: "2021-07-01T10:35:16.000000Z",
          },
        ],
      },
      {
        id: 78,
        sub_category_id: 67,
        user_id: 40,
        location_id: 1,
        ticket_description: "please help",
        image: "public/DTzn5JUnjtrj9bOEaTJsYNIr2dwvbgkfVF1VDuII.jpg",
        status: "assigned",
        scope_id: 22,
        asset_location: "KAL-HEL-1STFLOOR-1",
        created_at: "2021-06-27T05:47:26.000000Z",
        updated_at: "2021-09-08T11:03:53.000000Z",
        subcategory: {
          id: 67,
          supportcategory_id: 49,
          sub_category: "No ink in printer",
          created_at: "2021-06-25T07:38:14.000000Z",
          updated_at: "2021-06-25T07:38:14.000000Z",
        },
        comment: [
          {
            id: 48,
            message: "I look in to this",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-08-14T09:39:01.000000Z",
            updated_at: "2021-08-14T09:39:01.000000Z",
          },
          {
            id: 37,
            message: "hcdsljf",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-20T12:29:38.000000Z",
            updated_at: "2021-07-20T12:29:38.000000Z",
          },
          {
            id: 36,
            message: "Thank you.",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-20T12:27:54.000000Z",
            updated_at: "2021-07-20T12:27:54.000000Z",
          },
          {
            id: 35,
            message: "thank",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-20T12:27:46.000000Z",
            updated_at: "2021-07-20T12:27:46.000000Z",
          },
          {
            id: 29,
            message: "asc",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-19T09:31:13.000000Z",
            updated_at: "2021-07-19T09:31:13.000000Z",
          },
          {
            id: 28,
            message: "Hallow my name is jaseel, how can i help you",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-19T05:34:10.000000Z",
            updated_at: "2021-07-19T05:34:10.000000Z",
          },
          {
            id: 24,
            message: "Thank you.",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-19T04:46:36.000000Z",
            updated_at: "2021-07-19T04:46:36.000000Z",
          },
          {
            id: 23,
            message: "Your case is closed.",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-19T04:45:46.000000Z",
            updated_at: "2021-07-19T04:45:46.000000Z",
          },
          {
            id: 22,
            message: "Hallow my name is jaseel, how can i help you",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-19T04:23:09.000000Z",
            updated_at: "2021-07-19T04:23:09.000000Z",
          },
          {
            id: 21,
            message: "Hallow my name is jaseel, how can i help you",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-19T04:23:00.000000Z",
            updated_at: "2021-07-19T04:23:00.000000Z",
          },
          {
            id: 20,
            message: "dckl",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-19T04:05:33.000000Z",
            updated_at: "2021-07-19T04:05:33.000000Z",
          },
          {
            id: 17,
            message: "Its a test message",
            supportticket_id: 78,
            created_by: "1",
            created_at: "2021-07-16T11:57:22.000000Z",
            updated_at: "2021-07-16T11:57:22.000000Z",
          },
          {
            id: 12,
            message: "please update the status",
            supportticket_id: 78,
            created_by: "0",
            created_at: "2021-07-01T10:35:09.000000Z",
            updated_at: "2021-07-01T10:35:09.000000Z",
          },
        ],
      },
    ],
  },
];

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

// const DATA = [
//   {
//     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     title: "First Item",
//   },
//   {
//     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     title: "Second Item",
//   },
//   {
//     id: "58694a0f-3da1-471f-bd96-145571e29d72",
//     title: "Third Item",
//   },
// ];

export default function Support({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [supporttickets, setSupportTickets] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getSupportTikets = async () => {
    console.log("/////////////////////////////////");
    const response = await ApiInterface.getSupportTikets();
    if (!response.ok) return console.log("error" + response);
    setSupportTickets(response.data.data);
    // console.log("res " + response.data.data);
    // console.log("/////////////////////////////////");
    // console.log(supporttickets[0]);
  };
  useEffect(() => {
    getSupportTikets();
  }, []);

  const Item = ({ title }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{title.id}</Text> */}
      {/* {console.log(title)} */}
    </View>
  );

  const renderItem = ({ item }) => (
    <View>
      <TouchableWithoutFeedback
      // onPress={() => {
      //   navigation.navigate("Support Status", {
      //     title: `${d.title}`,
      //     desc: `${d.desc}`,
      //     status: `${d.status}`,
      //     updateTime: `${d.updateTime}`,
      //     userName: `${d.status}`,
      //   });
      // }}
      // key={k}
      >
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.firstBoxText}>
              {item.subcategory.sub_category}
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16 }}>{item.ticket_description}</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 10,
            }}
          >
            <View style={styles.buttonStyle}>
              <Text style={{ color: "white", fontSize: 14 }}>
                {item.status}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesome5 name="clock" size={24} color="gray" />
              <Text style={{ marginLeft: 5 }}>
                {Moment.utc(item.updated_at)
                  .local()
                  .startOf("seconds")
                  .fromNow()}
              </Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Text style={{ marginRight: 5 }}>yadhuraj m</Text>
              <FontAwesome
                name="user-circle"
                size={24}
                color="gray"
                style={{ marginRight: 5 }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );

  // console.log(supporttickets);
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <FlatList
        data={supporttickets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {/* <TouchableOpacity> */}
      {/* <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#070745",
          borderRadius: 50,
          position: "absolute",
          zIndex: 1,
          elevation: 1,
          bottom: 10,
          right: 10,
        }}
      >
        <MaterialCommunityIcons
          name="pencil"
          size={30}
          color="#fff"
          style={{ alignSelf: "center", marginTop: 13 }}
        />
      </TouchableOpacity> */}
      {/* </TouchableOpacity> */}
      {/* <View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 3 }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {data.map((d, k) => (
            <TouchableWithoutFeedback
              onPress={() => {
                navigation.navigate("Support Status", {
                  title: `${d.title}`,
                  desc: `${d.desc}`,
                  status: `${d.status}`,
                  updateTime: `${d.updateTime}`,
                  userName: `${d.status}`,
                });
              }}
              key={k}
            >
              <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                  <Text style={styles.firstBoxText}>{d.title}</Text>
                </View>
                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 16 }}> {d.desc} </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <View style={styles.buttonStyle}>
                    <Text style={{ color: "white", fontSize: 14 }}>
                      {d.status}
                    </Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <FontAwesome5 name="clock" size={24} color="gray" />
                    <Text style={{ marginLeft: 5 }}> {d.updateTime}</Text>
                  </View>
                  <View style={{ display: "flex", flexDirection: "row" }}>
                    <Text style={{ marginRight: 5 }}>{d.username}</Text>
                    <FontAwesome
                      name="user-circle"
                      size={24}
                      color="gray"
                      style={{ marginRight: 5 }}
                    />
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))} */}
      {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate("createSupportScreen");
          }}
        > */}
      {/* <View
          style={{
            width: 60,
            height: 200,
            backgroundColor: "#070745",
            // borderRadius: 50,
            position: "absolute",
            // zIndex: 100,
            // elevation: 100,
          }}
        >
          <MaterialCommunityIcons
            name="pencil"
            size={30}
            color="#fff"
            style={{ alignSelf: "center", marginTop: 13 }}
          />
        </View> */}
      {/* </TouchableOpacity> */}
      {/* </ScrollView>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: 138,
    marginTop: 5,
    elevation: 1,
    padding: 10,
    width: "100%",
  },
  firstBoxText: {
    fontSize: 16,
    // fontWeight: "bold",
    borderWidth: 0.8,
    borderColor: "gray",
    padding: 8,
  },
  buttonStyle: {
    height: 30,
    width: 80,
    backgroundColor: "#00BFFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#070745",
    position: "absolute",
    right: 15,
    bottom: 50,
  },
});
