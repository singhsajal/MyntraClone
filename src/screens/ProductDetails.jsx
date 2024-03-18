import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RemoveFromCart } from '../components/redux/Actions'

const ProductDetails = ({ route }) => {

    const cart = useSelector(state => { console.log({ state }); return state?.Reducer });
    const wishlist = useSelector(state => { console.log({ state }); return state?.Reducer2 });
    console.log("cart ", cart)
    console.log("Wishlist", wishlist)



    const [AddCartText, SetAddCartText] = useState(true)
    const [AddWishText, SetWishText] = useState(true)

    const Dispatch = useDispatch()



    const { id } = route.params

    const [Product, SetProduct] = useState([])



    // useEffect(() => {

    //     GetProductDetails(id)
    //     console.log(id)
    //     console.log(Product)


    // }, [])

    // useEffect(() => {
    //     // Check if cart is defined before using some method
    //     if (cart) {
    //         const isInCart = cart.some(item => item.id === Product.id);
    //         SetAddCartText(!isInCart);
    //     }
    // }, [cart, Product]);

    const GetProductDetails = async (id) => {
        console.log('{ cart }', cart)
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await response.json();
            SetProduct(json);

            // Check if the product is in the cart
            const isInCart = cart?.map(item => item.id).includes(id);
            const isInWish = wishlist?.map(item => item.id).includes(id);
            console.log(isInCart)
            console.log(isInWish)
            SetAddCartText(!isInCart);
            SetWishText(!isInWish)

        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {

        GetProductDetails(id);
    }, [cart, id]);


    const AddItem = () => {
        Dispatch({ type: 'ADD_TO_CART', payload: Product });
        SetAddCartText(false)

    }



    const RemoveItem = (Product) => {

        Dispatch({ type: 'REMOVE_FROM_CART', payload: Product });
        SetAddCartText(true)
    };
    const AddWishlist = () => {
        Dispatch({ type: 'ADD_TO_WISHLIST', payload: Product })
        SetWishText(false)
    }
    const RemoveFromWishlist = (Product) => {
        Dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: Product })
        SetWishText(true)
    }




    return (
        <View style={styles.main}>




            < View style={styles.ProductDetails} >

                <View style={{ alignItems: 'center', height: 173, flex: 18, borderColor: 'grey', borderWidth: 2, borderRadius: 10, elevation: 10 }}>
                    <Image source={{ uri: Product.image }} style={{ height: "100%", width: "100%", resizeMode: 'cover', borderRadius: 10 }}></Image>
                </View>


                <View style={{ margin: 6, alignItems: 'center', flex: 2, borderColor: 'grey', borderWidth: 2, alignItems: 'flex-start', padding: 5 }}>
                    <Text style={styles.FavouriteText}>{Product.title}</Text>
                </View>

            </View >


            <View style={styles.Button}>
                {/* 
                {
                    AddCartText ? (
                        <TouchableOpacity style={{ borderColor: 'red', borderWidth: 2, flex: 1, margin: 2, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>REMOVE FROM WISHLIST</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity style={{ borderColor: 'red', borderWidth: 2, flex: 1, margin: 2, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: "white" }}>ADD TO CART</Text>
                        </TouchableOpacity>
                    )
                } */}

                <TouchableOpacity style={{ borderColor: 'red', borderWidth: 2, flex: 1, margin: 2, backgroundColor: 'grey', alignItems: 'center', justifyContent: 'center', }} onPress={() => (AddWishText ? AddWishlist() : RemoveFromWishlist(Product))}>
                    <Text style={{ color: "white", alignItems: 'center', justifyContent: 'center', width: 'auto' }}>{AddWishText ? 'Add To Wishlist' : 'Remove from Wishlist'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ borderColor: 'red', borderWidth: 2, flex: 1, margin: 2, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }} onPress={() => (AddCartText ? AddItem() : RemoveItem(Product))}>
                    <Text style={{ color: 'white' }}>{AddCartText ? 'Add to Cart' : 'Remove From Cart'}</Text>
                </TouchableOpacity>

            </View>


        </View >
    )
}


const styles = StyleSheet.create({
    main: {
        alignItems: "center",
        justifyContent: "center",

        margin: 2,


        flex: 1,

        flexDirection: 'column'

    },

    Text: {

        color: "black",
        fontSize: 25,
        fontWeight: "800"

    },
    ProductDetails: {

        margin: 1,

        // height: 580,
        width: "95%",

        borderColor: "grey",
        flexDirection: 'column',
        flex: 11,
        borderRadius: 10,




    },
    Button: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'red',
        width: "95%",
        //height: 13,
        padding: 10,
        margin: 10,
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: 'transparent',



    },
    FavouriteText: {
        color: "black",
        marginTop: 10
    },








})

export default ProductDetails