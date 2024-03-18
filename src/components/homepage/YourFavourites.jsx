import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const YourFavourites = () => {

    const Dispatch = useDispatch();
    const navigation = useNavigation()

    const data = useSelector(state => { console.log({ state }); return state?.Reducer2 });
    console.log("wishScreen ", data)

    const arr = ["Diesel", "Jack&Jones", "levi's", "Manyawar", "brand5", "brand6", "brand7", "brand8", "device9", "device10"]


    const GoToProductDetails = (id) => {

        navigation.navigate('ProductDetails', { id: id })



    }


    const renderItem = ({ item }) => (
        <View style={styles.FavouriteButton}>
            <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => GoToProductDetails(item.id)} >
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: item.image }} style={styles.ImageArea} />
                </View>
                <View style={{ margin: 8, alignItems: 'center' }}>
                    <Text style={styles.FavouriteText}>{item.title}</Text>
                </View>
            </TouchableOpacity >
        </View >

    )


    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.Text}>Your Favourites</Text>
            </View>

            <FlatList data={data}
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
        borderColor: "lightgrey",
        borderWidth: 2,
        margin: 8,
    },

    Text: {

        color: "black",
        fontSize: 25,
        fontWeight: "800"

    },
    FavouriteButton: {
        borderWidth: 2,
        borderColor: "lightgrey",
        margin: 2,
        padding: 2,
        height: 275,
        width: 160,
        borderRadius: 10

    },
    FavouriteText: {
        color: "black"
    },
    columnWrapper: {
        justifyContent: 'space-between', // Adjust as needed
    },
    ImageArea: {
        height: 200,
        width: 155
    }



})

export default YourFavourites