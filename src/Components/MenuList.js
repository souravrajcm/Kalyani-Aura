import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import MetrialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function MenuList({ navigation }) {
  const [edit, setEdit] = useState(false);
  const editPost = () => {
    setEdit(!edit);
  };
  // const [remove, setRemove] = useState(false);

  return (
    <View style={styles.topIconStyle}>
      <TouchableWithoutFeedback onPress={() => editPost()}>
        <View>
          <MetrialIcon name="dots-horizontal" size={29} color="black" />
        </View>
      </TouchableWithoutFeedback>
      {edit && (
        <View>
          <View
            style={{
              width: 200,
              height: 85,
              backgroundColor: "red",
              position: "absolute",
              zIndex: 1,
              elevation: 1,
              right: 10,
              marginTop: 30,
            }}
          >
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => setEdit(false)}>
                <Text style={{ marginTop: 12, fontSize: 18 }}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("editScreen");
                }}
              >
                <Text style={{ marginTop: 13, fontSize: 18 }}>Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  topIconStyle: {
    position: "absolute",
    top: 5,
    right: 10,
    elevation: 1,
    zIndex: 1,
  },
});
