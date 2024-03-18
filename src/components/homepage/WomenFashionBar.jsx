import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const WomenFashionBar = () => {
    const arr = ["Kurta", "Sarees", "Dresses", "Sports", "Tops", "Jeans", "Purses"]
    const navigation = useNavigation()

    const [WomenProduct, SetWomenProduct] = useState([])

    useEffect(() => {
        GetWomenProduct()
    }, [])

    // const GetWomenProduct = () => {
    //     fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
    //         .then(res => res.json())
    //         .then(json => SetWomenProduct(json))
    // }

    const GetWomenProduct = async () => {
        try {
            // const response = await axios.get('https://dummyjson.com/products/category/womens-dresses');
            const response = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing`);
            SetWomenProduct(response.data);
        } catch (error) {
            console.error('Error fetching women\'s clothing products:', error);
        }
    };

    const GoToProductDetails = (id) => {

        navigation.navigate('ProductDetails', { id: id })



    }

    const renderItem = ({ item }) => (
        <View style={styles.CategoryButton}>
            <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => GoToProductDetails(item.id)}>
                <View style={{}}>
                    <Image source={{ uri: item.image }} style={styles.ImageArea} />
                </View>
                <View style={styles.TextArea}>
                    <Text style={styles.text}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (


        <FlatList data={WomenProduct}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            horizontal>
                
            </FlatList>


        


    )
}


const styles = StyleSheet.create({

    text: {
        color: "black",
        fontSize: 11
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "red",
        borderWidth: 2,

    },

    CategoryButton: {
        flex: 1,
        margin: 5,


        height: 80,
        width: 78,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",

    },
    ImageArea: {

        width: 50,
        height: 50,
        margin: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8

    },
    TextArea: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 6
    }




})

export default WomenFashionBar