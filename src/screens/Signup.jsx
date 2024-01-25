import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {

    const navigation = useNavigation()

    const [Name, SetName] = useState('')
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const [Confirm, SetConfirm] = useState('')
    const [BadName, SetBadName] = useState(false)
    const [BadEmail, SetBadEmail] = useState(false)
    const [BadPassword, SetBadPassword] = useState(false)
    const [BadConfirm, SetBadConfirm] = useState(false)
    const [SendData, SetSendData] = useState(false)
    const [GoLogin, SetGoLogin] = useState(false)

    const GoToLoginPage = () => {
        navigation.navigate('Login')
    }

    const deleteUser = async (usernameToDelete) => {
        try {
            // Fetch existing users from local storage
            const existingUsers = await AsyncStorage.getItem('users');
            const users = existingUsers ? JSON.parse(existingUsers) : [];

            // Find the index of the user to delete
            const userIndexToDelete = users.findIndex(user => user.username === usernameToDelete);

            // If the user is found, remove it from the array
            if (userIndexToDelete !== -1) {
                users.splice(userIndexToDelete, 1);

                // Save the updated array back to local storage
                await AsyncStorage.setItem('users', JSON.stringify(users));

                console.log(`User '${usernameToDelete}' deleted successfully`);
                console.log('Updated users:', users);
            } else {
                console.log(`User '${usernameToDelete}' not found`);
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const signUp = async (username, password) => {

        if (SendData === false) {
            try {
                // Fetch existing users from local storage (if any)
                const existingUsers = await AsyncStorage.getItem('users');
                const users = existingUsers ? JSON.parse(existingUsers) : [];

                // Check if the username is already taken
                const isUsernameTaken = users.some(user => user.username === username);
                if (isUsernameTaken) {
                    console.log('Username is already taken');
                    return;
                }

                // Add the new user to the array
                const newUser = { username, password };
                users.push(newUser);

                // Save the updated array back to local storage
                await AsyncStorage.setItem('users', JSON.stringify(users));

                console.log('User signed up successfully');
                SetGoLogin(true)

            } catch (error) {
                console.error('Error signing up:', error);
            }
        }

        else {

        }
    };



    const ValidateInput = () => {



        if (Name == '') {
            SetBadName(true)
            SetSendData(true)

        }
        else {
            SetBadName(false)
            SetSendData(false)
            console.log(Name)

        }
        if (Email == '') {
            SetBadEmail(true)
            SetSendData(true)
        }
        else {
            SetBadEmail(false)
            SetSendData(false)
            console.log(Email)
        }
        if (Email == '') {
            SetBadPassword(true)
            SetSendData(true)
        }
        else {
            SetBadPassword(false)
            SetSendData(false)
            console.log(Password)
        }
        if (Confirm == '') {
            SetBadConfirm(true)
            SetSendData(true)
        }
        else {
            SetBadConfirm(false)
            SetSendData(false)
            console.log(Password)
        }

        signUp(Name, Password)
        if (GoLogin == true) {
            GoToLoginPage()

        }
        else {
            SetGoLogin(false)
        }

    }


    return (
        <View style={styles.main}>
            <View style={styles.FormArea}>
                <Text style={styles.loginText}>SignUp</Text>

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

                <View style={styles.TextInput}>
                    <TextInput placeholder='ConfirmPassword' placeholderTextColor={"grey"} onChangeText={(text) => { SetConfirm(text) }} secureTextEntry={true} style={styles.Text} ></TextInput>
                </View>
                {BadConfirm === true && (<Text style={{ color: "red", marginRight: 140, marginTop: -7 }}>Please enter Password</Text>)}

                <TouchableOpacity style={styles.Submit} onPress={() => ValidateInput()}>
                    <Text style={{ color: "Black" }}> Submit</Text>
                </TouchableOpacity>

                {/* {SendData === true && (<Text style={{ color: "red", marginRight: 140, marginTop: -7 }}>Please enter Details</Text>)} */}
                <TouchableOpacity style={styles.CreateAccount} onPress={() => navigation.goBack()}>
                    <Text style={{ color: "black", fontSize: 20 }}> Already have account</Text>
                </TouchableOpacity>

                <Button title='Delete user' onPress={() => deleteUser("Sajal")}>

                </Button>

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

export default Signup