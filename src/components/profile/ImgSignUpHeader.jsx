import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import Signup from '../../screens/Signup';

const ImgSignUpHeader = () => {

    const navigation = useNavigation()

    const GoToSignUpLoginPage = () => {

        navigation.navigate('Login')

    }


    return (
        <View>
            <View style={styles.image} >
                <Text style={{ color: "black" }}>Image</Text>
            </View>
            <View style={styles.header} />
            <View style={styles.image} />

            <View style={styles.buttonBg} >

                <TouchableOpacity style={styles.button} onPress={GoToSignUpLoginPage}>
                    <Text>SignUp/Login</Text>
                </TouchableOpacity>

            </View>




        </View>
    )
}

const styles = StyleSheet.create({

    header: {
        backgroundColor: "grey",
        height: 80
    },
    buttonBg: {
        backgroundColor: "white",
        height: 80
    },
    image: {

        // backgroundColor: "#ebeced",
        height: 90,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#ebeced',
        width: 80,
        zIndex: 1,
        marginTop: 30,
        marginLeft: 20


    },
    button: {
        backgroundColor: "red",
        height: 35,
        width: 150,
        marginTop: 30,
        marginLeft: 180,
        alignItems: "center",
        justifyContent: "center"
    }

})

export default ImgSignUpHeader