import React from 'react'
import { Dimensions, RefreshControl, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function ChangePassword() {
    const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
    return (
    <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
        />
    } >
        <View style={styles.container}>
            <View>
                <TextInput 
                    placeholder= 'Old Password'
                    style={styles.oldPassword}
                />
                <TextInput 
                    placeholder= 'New Password'
                    secureTextEntry={true}
                    style={styles.oldPassword}
                />
                <TextInput 
                    placeholder= 'Confirm Password'
                    style={styles.oldPassword}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> CHANGE PASSWORD </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: Dimensions.get('window').height/8 ,
        padding: 15,
        justifyContent: 'center'
    },
    oldPassword: {
        width: '100%',
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginTop: 50,
        fontSize: 16,
        letterSpacing: 1,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'rgb(3,33,59)',
        alignSelf: 'center',
        marginTop: 50,
        borderRadius: 8
    },
    buttonText: {
        alignSelf: 'center',
        marginTop: 15,
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 16,
    },
})
