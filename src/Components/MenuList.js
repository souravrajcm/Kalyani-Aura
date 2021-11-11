import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import MetrialIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default function MenuList() {
  const editPost = () => {
    setEdit(true);
  };
  const [edit, setEdit] = useState(false);

  return (
    <View style={styles.topIconStyle}>
      <TouchableWithoutFeedback onPress={() => editPost()}>
        <View>
          <MetrialIcon name="dots-horizontal" size={29} color="black" />
        </View>
      </TouchableWithoutFeedback>
      {edit && (
        <View
          style={{
            width: 200,
            height: 80,
            backgroundColor: "red",
            position: "absolute",
            zIndex: 1,
            elevation: 1,
            right: 10,
            marginTop: 30,
          }}
        >
          <TouchableOpacity onPress={() => setEdit(false)}>
            <Text>Edit</Text>
          </TouchableOpacity>
          <Text>Delete</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  topIconStyle: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});
