import { View, Text, ScrollView, FlatList } from 'react-native'
import React from 'react'
import HomeHeader from '../components/homepage/HomeHeader';
import SearchBar from '../components/homepage/SearchBar';
import CategoriesBar from '../components/homepage/CategoriesBar';
import FashionBar from '../components/homepage/FashionBar';
import WomenFashionBar from '../components/homepage/WomenFashionBar';
import YourFavourites from '../components/homepage/YourFavourites';


const HomeScreen = () => {

    const sections = [
        { key: 'homeHeader', component: <HomeHeader /> },
        { key: 'searchBar', component: <SearchBar /> },
        { key: 'categoriesBar', component: <CategoriesBar /> },
        { key: 'fashionBar', component: <FashionBar /> },
        { key: 'womenFashionBar', component: <WomenFashionBar /> },
        { key: 'yourFavourites', component: <YourFavourites /> },
    ];

    const renderItem = ({ item }) => (
        <View key={item.key}>
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