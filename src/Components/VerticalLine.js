import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function VerticalLine() {
    return (
        <View style={styles.verticalline}>
        </View>
    )
}

const styles = StyleSheet.create({
    verticalline: {
        backgroundColor: 'red',
        width: 5,
        // flex: 1
    }
})
