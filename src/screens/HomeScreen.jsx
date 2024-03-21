import { View, Text, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import HomeHeader from '../components/homepage/HomeHeader';
import SearchBar from '../components/homepage/SearchBar';
import CategoriesBar from '../components/homepage/CategoriesBar';
import FashionBar from '../components/homepage/FashionBar';
import WomenFashionBar from '../components/homepage/WomenFashionBar';
import YourFavourites from '../components/homepage/YourFavourites';
import BannerSlider from '../components/homepage/BannerSlider';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

    const navigation = useNavigation()
    const isLoggedIn = useSelector(state => state?.login?.isLoggedIn);



    useEffect(() => {
        console.log(isLoggedIn)
        //isLoggedIn && navigation.navigate('Login')
        if (!isLoggedIn) {
            navigation.navigate('Login');
        }
    })

    const sections = [
        { key: 'homeHeader', component: <HomeHeader /> },
        { key: 'searchBar', component: <SearchBar /> },
        { key: 'categoriesBar', component: <CategoriesBar /> },
        { key: 'fashionBar', component: <FashionBar /> },
        { key: 'womenFashionBar', component: <WomenFashionBar /> },
        { Key: 'BannerSlider', component: <BannerSlider /> },
        { key: 'yourFavourites', component: <YourFavourites /> },
    ];

    const renderItem = ({ item }) => (
        <View key={item.key} >
            {item.component}
        </View>
    );

    const keyExtractor = (item) => item.key;

    return (
        // <View>
        //     <ScrollView>
        //         <Text>HomeScreen</Text>
        //          <HomeHeader />
        //         <SearchBar /> 

        //          <CategoriesBar />
        //     <FashionBar />
        //     <WomenFashionBar />
        //     <YourFavourites /> 
        <View style={{ backgroundColor: "white" }}>

            <FlatList
                data={sections}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                stickyHeaderIndices={[0]}></FlatList>



        </View>

        //  </View >
        // <FlatList data={[1, 2, 3, 4, 5, 6, 7, 8, 9]} stickyHeaderIndices={[0]} ListHeaderComponent={<><Text>HomeScreen</Text>
        //     <HomeHeader />
        //     <SearchBar /></>}
        //     renderItem={({ item }) => <FashionBar />}
        //     ListFooterComponent={{}}
        // />
    )
}

export default HomeScreen;