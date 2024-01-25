import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const OrdersWishlist = () => {
    return (
        <View style={{ marginTop: 10 }} >
            <TouchableOpacity style={styles.orders}>
                <View style={styles.orderIcon}>
                    <FontAwesome5 name='box-open' size={25} color={'black'} />
                </View>
                <View style={styles.title}>
                    <Text style={{ color: "black" }}>
                        Orders
                    </Text>
                    <Text style={{ color: "black", fontSize: 10 }}>
                        Check your order status
                    </Text>
                </View>
                <View style={{ marginLeft: 170, marginTop: 7 }}>
                    <MaterialIcons name='arrow-forward-ios' size={17} color={'black'} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.orders}>
                <View style={styles.orderIcon}>
                    <AntDesign name='hearto' size={25} color={'black'} />
                </View>
                <View style={styles.title}>
                    <Text style={{ color: "black" }}>
                        Wishlist
                    </Text>
                    <Text style={{ color: "black", fontSize: 10 }}>
                        Your most loved styles
                    </Text>
                </View>
                <View style={{ marginLeft: 180, marginTop: 7 }}>
                    <MaterialIcons name='arrow-forward-ios' size={17} color={'black'} />
                </View>
            </TouchableOpacity>


            <View style={{ marginTop: 10 }}>
                <TouchableOpacity style={styles.orders}>
                    <View style={styles.orderIcon}>
                        <FontAwesome5 name='box-open' size={25} color={'white'} />
                    </View>
                    <View style={styles.title}>
                        <Text style={{ color: "black" }}>
                            FAQs
                        </Text>

                    </View>
                    <View style={{ marginLeft: 230, marginTop: 7 }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'black'} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.orders}>
                    <View style={styles.orderIcon}>
                        <FontAwesome5 name='box-open' size={25} color={'white'} />
                    </View>
                    <View style={styles.title}>
                        <Text style={{ color: "black" }}>
                            ABOUT US
                        </Text>

                    </View>
                    <View style={{ marginLeft: 200, marginTop: 7 }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'black'} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.orders}>
                    <View style={styles.orderIcon}>
                        <FontAwesome5 name='box-open' size={25} color={'white'} />
                    </View>
                    <View style={styles.title}>
                        <Text style={{ color: "black" }}>
                            TERMS OF USE
                        </Text>

                    </View>
                    <View style={{ marginLeft: 170, marginTop: 7 }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'black'} />
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.orders}>
                    <View style={styles.orderIcon}>
                        <FontAwesome5 name='box-open' size={25} color={'white'} />
                    </View>
                    <View style={styles.title}>
                        <Text style={{ color: "black" }}>
                            PRIVACY POLICY
                        </Text>

                    </View>
                    <View style={{ marginLeft: 160, marginTop: 7 }}>
                        <MaterialIcons name='arrow-forward-ios' size={17} color={'black'} />
                    </View>
                </TouchableOpacity>




            </View>
        </View>
    )
}
const styles = StyleSheet.create({

    orders: {
        backgroundColor: "white",
        marginTop: 3,
        height: 50,
        flexDirection: 'row',
        padding: 10
    },
    orderIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
        marginLeft: 4
    },
    title: {
        margin: 1,
        marginLeft: 10
    }

})

export default OrdersWishlist