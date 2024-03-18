import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import filter from 'lodash.filter'
import axios from 'axios';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchedProducts = ({ route }) => {


    const [List, Setlists] = useState()
    const [FullData, SetFullData] = useState([])
    const [CoinName, SetCoinName] = useState('')
    const [Price, SetPrice] = useState()
    const [ChangePct, SetChangePct] = useState()
    const [isloading, SetIsLoading] = useState(false)
    const [searchInput, SetSearchInput] = useState(false)

    const navigation = useNavigation()
    //const route = useRoute();



    const FetchProducts = async () => {
        // setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products`);

        //console.log(response.data);
        Setlists(response.data)
        SetFullData(response.data)


        // console.log("listt data", List)
        const ChangePct = data.price_change_percentage_24h
        SetIsLoading(false)


    };

    useEffect(() => {

        //SetIsLoading(true)
        FetchProducts()
        console.log()

    }, [])


    const handleSearch = (text) => {

        SetSearchInput(text)
        const formatedText = text.toLowerCase();
        const filteredData = filter(FullData, (user) => {
            return contains(user, formatedText);

        })
        Setlists(filteredData)
    }


    const contains = (user, text) => {

        // console.log("contains ", user)
        const name = user.description
        if (name.includes(text)) {
            return true
        }
        return false

    }





    //const { data } = route.params;

    //const MensProductList = props.route.params ? props.route.params.MenProduct : [];

    // const { productType, MensProductList } = route.params;
    //console.log("data ", data.category)
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

        //console.log({ item })


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

            {/* <View style={{ borderColor: 'grey', borderWidth: 1, width: 300, borderRadius: 30, margin: 20, height: 40 }}>
                <TextInput style={{ color: 'black', paddingLeft: 20 }} clearButtonMode='always' placeholder='Search' placeholderTextColor={'grey'}
                    clearButtonColor='grey' onChangeText={(text) => handleSearch(text)}></TextInput>
            </View> */}

            <View style={styles.SearchBar}>
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                    <AntDesign name='search1' color={'#c7c3c3'} size={20} />
                </View>
                <View style={{ flex: 18 }} >
                    <TextInput placeholder='Search Product' placeholderTextColor={'#c7c3c3'} style={styles.TextInput} onChangeText={(text) => handleSearch(text)}>
                    </TextInput>
                </View>

            </View>


            <FlatList data={List}
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






})



export default SearchedProducts