import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";
import VerticalLine from "../Components/VerticalLine";

export default function Support({route,navigation}) {
    const { title, desc, status, username, updateTime} = route.params;
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{padding:3}}>
        <View style={styles.container}  >
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.firstBoxText}>
              {title}
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 16 }}> {desc} </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <View style={styles.buttonStyle}>
              <Text style={{ color: "white", fontSize: 14 }}>{status}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "row" ,marginLeft: 60}}>
              <FontAwesome5 name="clock" size={24} color="gray" />
              <Text style={{ marginLeft: 5 }}> {updateTime}</Text>
            </View>
          </View>
        </View>
        <View style={styles.commentBox}>
            <TextInput placeholder= 'Post any other questions..' multiline={true} style={styles.textInput} />
            <TouchableOpacity style={styles.postButton}>
                <Text style={styles.buttonText}> Post </Text>
            </TouchableOpacity>
          </View>
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
  commentBox: {
      marginTop: 20,
      padding: 5,
      flexDirection: 'row',
  },
  textInput: {
      width: 250,
      height: 50,
      fontSize: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#0b0145',
      overflow : 'hidden',
      lineHeight: 3,
  },
  postButton: {
      height: 40,
      width: 90,
      marginTop: 10,
      marginLeft: 30,
      borderRadius: 8,
      backgroundColor: '#0b0145',
      justifyContent: 'center',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight : 'bold',
      fontSize: 18
  },
});
