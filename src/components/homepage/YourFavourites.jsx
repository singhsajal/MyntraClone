import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const YourFavourites = () => {

    const arr = ["Diesel", "Jack&Jones", "levi's", "Manyawar", "brand5", "brand6", "brand7", "brand8", "device9", "device10"]

    const renderItem = ({ item }) => (
        <View style={styles.FavouriteButton}>
            <TouchableOpacity style={{ flexDirection: 'column' }} >
                <View style={{ borderWidth: 1, borderColor: 'red', alignItems: 'center' }}>
                    <Text style={{ color: "red" }}>Image</Text>
                </View>
                <View style={{ borderWidth: 1, borderColor: 'red', margin: 8, alignItems: 'center' }}>
                    <Text style={styles.FavouriteText}>{item}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )


    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.Text}>Your Favourites</Text>
            </View>

            <FlatList data={arr}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            >

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red",
        borderWidth: 2,
        margin: 8
    },

    Text: {

        color: "black",
        fontSize: 25,
        fontWeight: "800"

    },
    FavouriteButton: {
        borderWidth: 2,
        borderColor: "red",
        margin: 10,
        padding: 10,
        height: 65,
        width: 150

    },
    FavouriteText: {
        color: "black"
    },
    columnWrapper: {
        justifyContent: 'space-between', // Adjust as needed
    },



})

export default YourFavourites