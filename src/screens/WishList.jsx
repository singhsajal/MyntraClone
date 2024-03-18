import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import RazorpayCheckout from 'react-native-razorpay';
import { } from '@env'

const WishList = () => {
    const Dispatch = useDispatch();

    const data = useSelector(state => { console.log({ state }); return state?.Reducer2 });
    // console.log("cartScreen ", data)

    const navigation = useNavigation()


    const OpenProductDetails = (id) => {
        navigation.navigate('ProductDetails', { id: id })

    }

    const RemoveFromCart = (data) => {
        //console.log("data", data)

        Dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: data });

    }






    const renderItem = ({ item }) => {

        // console.log("hii", { item })


        return (

            < View style={styles.FavouriteButton} >
                <TouchableOpacity style={{ flexDirection: 'row' }}>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }}></Image>
                    </View>

                    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.FavouriteText}>{item.title}</Text>
                        <Text style={styles.FavouriteText}>{item.price}</Text>
                    </View>

                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <TouchableOpacity onPress={() => RemoveFromCart(item)}
                            style={{ backgroundColor: "white", borderWidth: 1, borderColor: 'grey', borderRadius: 10, alignItems: 'center', justifyContent: 'center', width: "100%" }}>
                            <Text style={{ color: 'black', backgroundColor: "white", width: "auto" }}>Remove</Text>
                        </TouchableOpacity>

                    </View>




                </TouchableOpacity>



            </View >


        )
    }


    return (
        <View style={styles.main}>

            <View style={{ height: 400, flex: 2, justifyContent: 'space-evenly', padding: 5 }}>
                <FlatList data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}

                    columnWrapperStyle={styles.columnWrapper}
                >

                </FlatList>
            </View>



        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        margin: 9,
        flex: 1,
        padding: 5,
        borderColor: 'red'


    },

    Text: {

        color: "black",
        fontSize: 25,
        fontWeight: "800"

    },
    FavouriteButton: {


        padding: 5,
        height: 90,
        width: "100%",
        borderWidth: 1,
        borderColor: "grey",
        marginVertical: 2,

        borderRadius: 15,
        justifyContent: 'space-evenly',





    },
    FavouriteText: {
        color: "black"
    },

})


export default WishList