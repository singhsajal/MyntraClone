import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import RazorpayCheckout from 'react-native-razorpay';
import { } from '@env'


const Cart = () => {


    const Dispatch = useDispatch();

    const data = useSelector(state => { console.log({ state }); return state?.Reducer });
    console.log("cartScreen ", data)

    const navigation = useNavigation()


    const OpenProductDetails = (id) => {
        navigation.navigate('ProductDetails', { id: id })

    }

    const RemoveFromCart = (data) => {
        console.log("data", data)

        Dispatch({ type: 'REMOVE_FROM_CART', payload: data });

    }

    const GetTotal = () => {
        let total = 0;
        data.map((item) => {
            console.log(item.price)
            total = total + item.price
        })

        return total;

    }
    // '' + parseInt(GetTotal() * 100) + '',
    const PaymentGateway = () => {

        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.jpg',
            currency: 'INR',
            key: 'rzp_test_YGhZdoPoV4f4KL',
            amount: '0',
            name: 'Sajal Singh',
            order_id: 'order_DslnoIgkIDL8Zt',//Replace this with an order_id created using Orders API.
            prefill: {
                email: 'Sajal.Singh@example.com',
                contact: '98765432123',
                name: 'Gaurav Kumar'
            },
            theme: { color: '#53a20e' }
        }
        RazorpayCheckout.open(options).then((data) => {
            // handle success
            alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
            // handle failure
            alert(`Error: ${error.code} | ${error.description}`);
        });

    }

    const renderItem = ({ item }) => {

        console.log("hii", { item })


        return (

            // < View style={styles.FavouriteButton} >
            //     <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => OpenProductDetails(item.id)} >
            //         <View style={{ alignItems: 'center', height: 170, margin: 10 }}>
            //             <Image source={{ uri: item.image }} style={{ height: 50, width: 50 }}></Image>
            //         </View>
            //         <View style={{ alignItems: 'center', width: 130, margin: 10. }}>
            //             <Text style={styles.FavouriteText}>{item.title}</Text>
            //             <Text style={styles.FavouriteText}>{item.price}</Text>
            //         </View>

            //         <View style={{ alignItems: 'center', width: 130, margin: 10. }}>
            //             <TouchableOpacity style={{ width: 80, height: 30, backgroundColor: "lightblue", marginRight: 60, borderWidth: 3, borderColor: 'blue', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => RemoveFromCart(item)}>
            //                 <Text style={{ color: 'black' }}>Remove</Text></TouchableOpacity>
            //         </View>
            //     </TouchableOpacity>
            // </View >


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

                        <TouchableOpacity style={{ width: 70, height: 30, backgroundColor: "white", borderWidth: 1, borderColor: 'grey', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => RemoveFromCart(item)}>
                            <Text style={{ color: 'black' }}>Remove</Text></TouchableOpacity>

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

            <View style={{ flex: 1, borderWidth: 2, borderRadius: 20 }}>

                <View style={{ borderColor: 2, borderColor: 'red' }}>
                    <Text style={{ color: "black", fontSize: 20, margin: 10 }}>   Total           {GetTotal()}</Text>
                </View>



                <TouchableOpacity style={{ backgroundColor: 'grey', height: 100, width: 100, borderColor: "black", borderWidth: 4, width: 300, height: 50, borderRadius: 20, margin: 20, marginTop: 100, alignItems: 'center', justifyContent: "center" }}
                    onPress={() =>
                        PaymentGateway()}>
                    <Text style={{ color: 'white', alignItems: 'center', justifyContent: "center" }}> CHECKOUT</Text>
                </TouchableOpacity>

            </View>


        </View>
    )
}


const styles = StyleSheet.create({
    main: {
        margin: 9,
        flex: 1,
        padding: 5,



    },

    Text: {

        color: "black",
        fontSize: 25,
        fontWeight: "800"

    },
    FavouriteButton: {

        padding: 2,
        height: 90,
        width: 320,
        borderWidth: 1,
        borderColor: "grey",
        marginVertical: 4,

        borderRadius: 15,
        justifyContent: 'space-evenly',


    },
    FavouriteText: {
        color: "black"
    },

})


export default Cart