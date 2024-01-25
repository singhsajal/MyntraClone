import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const ProductListing = ({ route }) => {

    //const route = useRoute();
    const { data } = route.params;

    //const MensProductList = props.route.params ? props.route.params.MenProduct : [];

    // const { productType, MensProductList } = route.params;
    console.log("data ", data.category)
    //const arr = ["Diesel", "Jack&Jones", "levi's", "Manyawar", "brand5", "brand6", "brand7", "brand8", "device9", "device10"]

    const renderItem = ({ item }) => {

        console.log({ item })

        return (

            < View style={styles.FavouriteButton} >
                <TouchableOpacity style={{ flexDirection: 'column' }} >
                    <View style={{ alignItems: 'center', height: 170 }}>
                        <Image source={{ uri: item.image }} style={{ height: 175, width: 143 }}></Image>
                    </View>
                    <View style={{ margin: 6, alignItems: 'center', width: 130 }}>
                        <Text style={styles.FavouriteText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View >

        )
    }


    return (
        <View style={styles.main}>
            <View>
                <Text style={styles.Text}></Text>
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

        margin: 8,
        flex: 1,

    },

    Text: {

        color: "black",
        fontSize: 25,
        fontWeight: "800"

    },
    FavouriteButton: {

        margin: 1,
        padding: 10,
        height: 270,
        width: 150,
        borderWidth: 1,
        borderColor: "grey"


    },
    FavouriteText: {
        color: "black"
    },
    columnWrapper: {
        justifyContent: 'space-between', // Adjust as needed
    }






})



export default ProductListing