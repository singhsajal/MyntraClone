import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import 'react-native-gesture-handler'


const HomeHeader = () => {
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

            <View style={styles.bells}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }} >
                    <AntDesign name='hearto' size={25} color={'black'} />
                </TouchableOpacity>
            </View>

            <View style={styles.bells}>
                <TouchableOpacity style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <AntDesign name='shoppingcart' size={25} color={'black'} />
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