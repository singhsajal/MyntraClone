/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
//import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  //Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//import Entypo from 'react-native-vector-icons/Entypo';

//import { SearchBar } from 'react-native-elements';
import { Searchbar, TextInput } from 'react-native-paper';
import { Provider } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './src/screens/Profile';
import HomeScreen from './src/screens/HomeScreen';
import Signup from './src/screens/Signup';
import Login from './src/screens/Login';
import ProductListing from './src/screens/ProductListing';
import ProductDetails from './src/screens/ProductDetails';
import store from './src/components/redux/store';
import Cart from './src/screens/Cart';
import WishList from './src/screens/WishList';
import SearchedProducts from './src/screens/SearchedProducts';






// type IconsProps = PropsWithChildren<{
//   names: string;
// }>;
//const store = createStore(rootReducer);


// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const App = () => {

//   const [searchQuery, setSearchQuery] = React.useState('');

//   return (

//     //====================header============================
//     // <Provider store={store}>
//     <NavigationContainer>
//       {/* <Stack.Navigator initialRouteName="Home" />

//       <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
//       <Tab.Navigator>
//         <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ size }) => (
//             <Image
//               source={require('./assets/icons/logo-myntra.png')} // Replace with the actual path to your home icon
//               style={{ width: size, height: size }}
//             />
//           ),
//           headerShown: false
//         }}



//         />
//         <Tab.Screen name="Profile" component={Profile} options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: () => (
//             <SimpleLineIcons name="user" size={20} color={'black'} />
//           ),
//           //headerShown: false
//         }} />
//       </Tab.Navigator>

//       {/* </Stack.Navigator> */}
//     </NavigationContainer>
//     // </Provider>

//   )


// }


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ size }) => (
          <Image
            source={require('./assets/icons/logo-myntra.png')} // Replace with the actual path to your home icon
            style={{ width: size, height: size }}
          />
        ),
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <SimpleLineIcons name="user" size={20} color={'black'} />
        ),
        //headerShown: false
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainTabs">
          <Stack.Screen
            name="MainTabs"
            component={MainTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductListing"
            component={ProductListing}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WishList"
            component={WishList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SearchedProducts"
            component={SearchedProducts}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


{/*======================= styles ========================*/ }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  main: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#e6e3e3",

  },
  heading: {
    color: "black",
    fontSize: 40,
    fontWeight: '700',
    marginRight: 220,
    borderColor: "red",
    //borderWidth: 3
  },
  Searchbar: {
    //borderColor: "#e8e6e6",

    backgroundColor: "#d6d4d4",
    width: 320,
    height: 45,
    borderRadius: 15,

  },

  folder: {

    borderColor: "#fafafa",
    borderWidth: 3,
    width: 320,
    height: 40,
    marginBottom: 10,

    flexDirection: "row",
    backgroundColor: "#fafafa",
    borderRadius: 10
  },
  folderTitle: {
    color: 'black'
  },
  footer: {
    width: 350,
    height: 50,
    backgroundColor: "#fafafa"
  }


});



export default App;

