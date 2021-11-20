import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'
import SupportCategory from '../Components/SupportCategory'

export default function Sub_Support_Screen({route}) {
    const {content} = route.params;
    console.log(content);
    return (
        <View style={{ marginTop: 3,backgroundColor: '#fff',flex:1 }}>
            {/* <FlatList
            data={content}
            keyExtractor={(k) => k.toString()}
            renderItem={(item) => (
                <SupportCategory title={item.item.name}/>
                
            )}
            
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({})
