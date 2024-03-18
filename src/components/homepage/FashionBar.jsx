import { Text, View, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'



const FashionBar = () => {

    const navigation = useNavigation()

    // const arr = ["Jacket", "T-Shirt", "Flip-Flops", "Sports", "Jacket", "Trousers", "Perfumes"]
    const [MenProduct, SetMenProduct] = useState([])
    const [WomenProduct, SetWomenProduct] = useState([])

    useEffect(() => {
        GetMenProduct()
        //console.log(MenProduct)
    }, [])
    // const GetMenProduct = () => {
    //     fetch(`https://dummyjson.com/products/category/mens-shirts`)
    //         .then(res => res.json())
    //         .then(json => SetMenProduct(json))

    // }


    const GetMenProduct = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/category/men\'s%20clothing');
            //const response = await axios.get('https://dummyjson.com/products/category/mens-shirts');
            //console.log("response", response.data)
            SetMenProduct(response.data);
        } catch (error) {
            // console.error('Error fetching men\'s clothing products:', error);
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


        <FlatList data={MenProduct}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
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
        marginLeft: 5

    },
    TextArea: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }




})

export default FashionBar