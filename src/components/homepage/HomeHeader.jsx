import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import 'react-native-gesture-handler'


const HomeHeader = () => {

    const data = useSelector(state => { return state?.wishlist?.wishlist });
    const data2 = useSelector(state => { return state?.cart?.cart });

    const navigation = useNavigation()

    const GoToCart = () => {

        navigation.navigate('Cart')

    }
    const GoToWishList = () => {

        navigation.navigate('WishList')

    }

    return (
        <View style={styles.main}>
            <View style={styles.imgview}>
                <Image source={require('./../../../assets/icons/header-logo-myntra.png')} style={styles.Image} />
                {/* <TouchableOpacity style={styles.bells}>
                <AntDesign name='bells'  />
            </TouchableOpacity> */}
            </View>
            <View style={styles.bells}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <AntDesign name='bells' size={25} color={'black'} />
                </TouchableOpacity>
            </View>

            <View style={styles.bells} >
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }} onPress={() => GoToWishList()}>
                    <AntDesign name='hearto' size={25} color={'black'} />
                    <View style={{ borderWidth: 1, borderColor: 'red', borderRadius: 10, height: 20, width: 20, bottom: 7, right: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', position: 'absolute', }}>
                        <Text style={{ color: 'white' }}>{data.length}</Text>
                    </View>

                </TouchableOpacity>
            </View>

            <View style={styles.bells}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }} onPress={() => GoToCart()}>
                    <AntDesign name='shoppingcart' size={25} color={'black'} />
                    <View style={{ borderWidth: 1, borderColor: 'red', borderRadius: 10, height: 20, width: 20, bottom: 7, right: 17, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', position: 'absolute', }}>
                        <Text style={{ color: 'white' }}>{data2.length}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    main: {


        flexDirection: 'row',
        backgroundColor: 'white'
    },

    imgview: {
        flex: 10
    },

    Image: {
        height: 28,
        width: 120,
        margin: 10

    },
    bells: {

        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',


    }

})

export default HomeHeader;