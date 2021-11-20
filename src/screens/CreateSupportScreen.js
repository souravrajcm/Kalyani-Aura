import React from "react";
import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SupportCategory from "../Components/SupportCategory";

const data = [
  {
      id:1,
      'category':'Printer',
      'SubCategory':[{
            id:1,
            name:'Printer Not Working',
      },{
        id:2,
        name:'Printer Not Working',
  }],
  },  
  {
    id:2,
    'category':'Wifi',
    'SubCategory':[{
          id:1,
          name:'Printer Not Working',
    }],
},  
{
    id:3,
    'category':'Router',
    'SubCategory':[{
          id:1,
          name:'Printer Not Working',
    }],
},  
{
    id:4,
    'category':'Cabin',
    'SubCategory':[{
          id:1,
          name:'Printer Not Working',
    }],
},  
];

export default function CreateSupportScreen({navigation}) {
  return (
    <ScrollView>
      {data.map((d, k) => (
        <View key={k}>
          <TouchableOpacity onPress={() => {navigation.navigate('subSupportScreen',{
              content: `${d.category}`
          })}}>
            <SupportCategory title={d.category} iconName="chevron-right" />
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
