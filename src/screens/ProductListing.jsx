import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const ProductListing = ({ route }) => {

    const navigation = useNavigation()
    //const route = useRoute();
    const { data } = route.params;

    //const MensProductList = props.route.params ? props.route.params.MenProduct : [];

    // const { productType, MensProductList } = route.params;
    console.log("data ", data.category)
    //const arr = ["Diesel", "Jack&Jones", "levi's", "Manyawar", "brand5", "brand6", "brand7", "brand8", "device9", "device10"]

    // const OpenProductDetails=()=>{

    //     fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
    //     .then(res => res.json())
    //     .then(json => SetMenProduct(json))

    // }
    const OpenProductDetails = (id) => {
        navigation.navigate('ProductDetails', { id: id })

    }

    const renderItem = ({ item }) => {

        console.log({ item })


        return (

            < View style={styles.FavouriteButton} >
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => OpenProductDetails(item.id)} >
                    <View style={{ alignItems: 'center', height: 170 }}>
                        <Image source={{ uri: item.image }} style={{ height: 230, width: 160 }}></Image>
                    </View>
                    <View style={{ margin: 6, width: 130, marginTop: 70 }}>
                        <Text style={styles.FavouriteText}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            </View >

        )
    }


    return (
        <View style={styles.main}>


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
        height: 320,
        width: 170,
        borderWidth: 2,
        borderColor: "lightgrey",
        borderRadius: 10



    },
    FavouriteText: {
        color: "black"
    },
    columnWrapper: {
        justifyContent: 'space-between', // Adjust as needed
    }






})



export default ProductListing