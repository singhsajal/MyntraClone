import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = () => {

    const navigation = useNavigation()

    const [Name, SetName] = useState('')
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const [BadName, SetBadName] = useState(false)
    const [BadEmail, SetBadEmail] = useState(false)
    const [BadPassword, SetBadPassword] = useState(false)
    const [GoHome, SetGoHome] = useState(false)
    const [InvalidError, SetInvalidError] = useState(false)

    const GoToHomePage = () => {
        navigation.navigate('HomeScreen')
    }

    const login = async (username, password) => {
        try {
            // Fetch existing users from local storage
            const existingUsers = await AsyncStorage.getItem('users');
            const users = existingUsers ? JSON.parse(existingUsers) : [];

            // Check if the username and password match any stored user
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                console.log('Login successful');
                SetGoHome(true)
            } else {
                console.log('Invalid username or password');
                SetInvalidError(true)
            }
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    const ValidateInput = () => {
        if (Name == '') {
            SetBadName(true)

        }
        else {
            SetBadName(false)
            console.log(Name)

        }
        if (Email == '') {
            SetBadEmail(true)
        }
        else {
            SetBadEmail(false)
            console.log(Email)
        }
        if (Email == '') {
            SetBadPassword(true)
        }
        else {
            SetBadPassword(false)
            console.log(Password)
        }
        login(Name, Password)

        if (GoHome == true) {
            GoToHomePage()

        }
        else {
            SetGoHome(true)
        }
    }

    const GoToSignUpPage = () => {
        navigation.navigate('Signup')
    }



    return (
        <View style={styles.main}>
            <View style={styles.FormArea}>
                <Text style={styles.loginText}>Login</Text>

                <View style={styles.TextInput}>
                    <TextInput placeholder='name' placeholderTextColor={"grey"} onChangeText={(text) => { SetName(text) }} style={styles.Text} ></TextInput>
                </View>
                {BadName === true && (<Text style={{ color: "red", marginRight: 140, marginTop: -7 }}>Please enter Name</Text>)}

                <View style={styles.TextInput}>
                    <TextInput placeholder='Email' placeholderTextColor={"grey"} onChangeText={(text) => { SetEmail(text) }} style={styles.Text} ></TextInput>
                </View>
                {BadEmail === true && (<Text style={{ color: "red", marginRight: 140, marginTop: -7 }}>Please enter Email</Text>)}

                <View style={styles.TextInput}>
                    <TextInput placeholder='Password' placeholderTextColor={"grey"} onChangeText={(text) => { SetPassword(text) }} secureTextEntry={true} style={styles.Text} ></TextInput>
                </View>
                {BadPassword === true && (<Text style={{ color: "red", marginRight: 140, marginTop: -7 }}>Please enter Password</Text>)}

                {InvalidError === true && (<Text style={{ color: "red", marginRight: 140, marginTop: -7 }}>Invalid UserName or Password</Text>)}
                <TouchableOpacity style={styles.Submit} onPress={() => ValidateInput()}>
                    <Text style={{ color: "Black" }}> Submit</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.CreateAccount} onPress={() => GoToSignUpPage()}>
                    <Text style={{ color: "black", fontSize: 20 }}> Create New Account</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    main: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    loginText: {

        color: "black",
        fontSize: 40
    },
    FormArea: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 40
    },
    TextInput: {
        borderWidth: 2,
        borderColor: "black",
        width: 270,
        margin: 10,
        padding: 3,
        color: "black"
    },
    Submit: {
        backgroundColor: "black",
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        margin: 10

    },
    CreateAccount: {
        marginTop: 15,
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15

    },
    Text: {
        color: "black"
    }

})


export default Login