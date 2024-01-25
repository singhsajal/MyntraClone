import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ImgSignUpHeader from '../components/profile/ImgSignUpHeader'
import OrdersWishlist from '../components/profile/OrdersWishlist'

const Profile = () => {
    return (
        <View style={styles.main}>

            <ImgSignUpHeader />
            <OrdersWishlist />

        </View>
    )
}

const styles = StyleSheet.create({

    main: {
        backgroundColor: "#cccdcf",
        flex: 1

    }

})

export default Profile