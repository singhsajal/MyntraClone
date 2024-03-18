import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const BannerSlider = () => {
    return (
        <View style={styles.area}>
            <Image source={require('../../../assets/banner/213.jpg')} style={styles.Image} />
        </View>
    )
}

const styles = StyleSheet.create({

    Image: {
        height: "100%",
        width: "100%",

        resizeMode: 'cover',

    },
    area: {
        borderColor: 'red',
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        height: 230



    }

})

export default BannerSlider