import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import VerticalLine from "../Components/VerticalLine";

const data = [
  {
    title: "Printer Not Turning On",
    desc: "My Printer is not working",
    updateTime: "2 month ago",
    status: 'Pending',
    username: "Sourav",
  },
  {
    title: "Need cleaning",
    desc: "My cabin is dirty",
    updateTime: "3 month ago",
    status: 'Pending',
    username: "Gokul",
  },
  {
    title: "Printer Not Turning On",
    desc: "My Printer is not working",
    updateTime: "2 month ago",
    status: 'Pending',
    username: "sourav",
  },
  {
    title: "Need cleaning",
    desc: "My cabin is dirty",
    updateTime: "3 month ago",
    status: 'Pending',
    username: "Gokul",
  },
  {
    title: "Printer Not Turning On",
    desc: "My Printer is not working",
    updateTime: "2 month ago",
    status: 'Pending',
    username: "sourav",
  },
  {
    title: "Need cleaning",
    desc: "My cabin is dirty",
    updateTime: "3 month ago",
    status: 'Pending',
    username: "Gokul",
  },
];

export default function Support({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding:3}}>
      {data.map((d, k) => (
        <TouchableWithoutFeedback onPress={() =>{navigation.navigate('Support Status',{
          title : `${d.title}`,
          desc : `${d.desc}`,
          status : `${d.status}`,
          updateTime : `${d.updateTime}` ,
          userName : `${d.status}`
        })}} key={k}>
        <View style={styles.container}  >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.firstBoxText}>
              {d.title}
            </Text>
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
              <Text style={{ color: "white", fontSize: 14 }}>{d.status}</Text>
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
      ))}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: 138,
    marginTop: 5,
    elevation: 1,
    padding: 10,
    width:"100%"
  },
  firstBoxText : {
    fontSize: 16, 
    // fontWeight: "bold",
    borderWidth: .8,
    borderColor:'gray',
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
});
