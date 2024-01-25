import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'


const CategoriesBar = () => {

    const [MenProduct, SetMenProduct] = useState([])
    const [WomenProduct, SetWomenProduct] = useState([])
    const [HomeProduct, SetHomeProduct] = useState([])
    const [BeautyProduct, SetBeaytyProduct] = useState([])

    const navigation = useNavigation()


    const OpenMensProductList = () => {
        console.log(MenProduct)
        navigation.navigate('ProductListing', { data: MenProduct });
    }

    const OpenWomensProductList = () => {
        console.log(WomenProduct)
        navigation.navigate('ProductListing', { data: WomenProduct });
    }

    const OpenHomeProductList = () => {
        console.log(HomeProduct)
        navigation.navigate('ProductListing', { data: HomeProduct });
    }

    const OpenBeautyProductList = () => {
        console.log(BeautyProduct)
        navigation.navigate('ProductListing', { data: BeautyProduct });
    }


    useEffect(() => {
        GetMenProduct()
        GetWomenProduct()
        GetHomeProduct()
        GetBeautyProduct()
    }, [])

    const GetMenProduct = () => {
        fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
            .then(res => res.json())
            .then(json => SetMenProduct(json))
    }

    const GetWomenProduct = () => {
        fetch(`https://fakestoreapi.com/products/category/women's%20clothing`)
            .then(res => res.json())
            .then(json => SetWomenProduct(json))
    }

    const GetHomeProduct = () => {
        fetch(`https://fakestoreapi.com/products/category/electronics`)
            .then(res => res.json())
            .then(json => SetBeaytyProduct(json))
    }

    const GetBeautyProduct = () => {
        fetch(`https://fakestoreapi.com/products/category/jewelery`)
            .then(res => res.json())
            .then(json => SetHomeProduct(json))
    }





    return (
        <View style={styles.main}>

            <View style={styles.CategoryButton}>
                <TouchableOpacity onPress={() => OpenMensProductList()}>
                    <Text style={styles.text}>Men</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.CategoryButton}>
                <TouchableOpacity onPress={() => OpenWomensProductList()}>
                    <Text style={styles.text}>Women</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.CategoryButton}>
                <TouchableOpacity onPress={() => OpenHomeProductList()}>
                    <Text style={styles.text}>Beauty</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.CategoryButton}>
                <TouchableOpacity onPress={() => OpenBeautyProductList()}>
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    text: {
        color: "black"
    },
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",


    },

    CategoryButton: {
        flex: 1,
        margin: 10,
        borderColor: "blue",
        backgroundColor: 'lightblue',
        borderWidth: 2,
        height: 35,
        borderRadius: 14,
        alignItems: "center",
        justifyContent: "center",

    }




})

export default CategoriesBar