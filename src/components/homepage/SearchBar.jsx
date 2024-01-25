import { Text, View, StyleSheet, TextInput } from 'react-native'
import React, { Component } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';


const SearchBar = () => {

    return (
        <View style={styles.main} >
            <View style={styles.SearchBar}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name='search1' color={'#c7c3c3'} size={20} />
                </View>
                <View style={{ flex: 18 }}>
                    <TextInput placeholder='Search Product' placeholderTextColor={'#c7c3c3'} style={styles.TextInput}>
                    </TextInput>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    main: {

    },

    SearchBar: {
        margin: 10,

        borderWidth: 2,
        borderColor: '#c7c3c3',
        borderRadius: 30,
        height: 40,
        // alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'

    },

    TextInput: {
        color: 'black',


    }

})
export default SearchBar