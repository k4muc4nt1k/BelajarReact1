import React, { Component } from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';
import { TabNavigator, StackNavigator, DrawerNavigator, DrawerView, DrawerItems } from 'react-navigation';
import { SafeAreaView, AppRegistry, Text, View, TouchableOpacity, ToastAndroid, Dimensions, Image, Button, ScrollView, } from 'react-native'
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import LoginComponent from './pages/login/LoginComponent';
import MainMenuComponent from './pages/mainMenu/MainMenuComponent';
import Hal1 from './pages/mainMenu/Halaman1';
import Hal2 from './pages/mainMenu/Halaman2';
import Hal3 from './pages/mainMenu/Halaman3';
import FooterTab from './navigate/FooterTab';
import { DrawerStack, DrawerButton } from './navigate/SlideBar';
import { RightMenu } from './navigate/RightMenu';
import * as s from '../src/style/StyleMobile';
import * as css from '../src/style/style';

// export const TabNavigate = TabNavigator({
//     Halaman1: { screen: Hal1 },
//     Halaman2: { screen: Hal2 },
//     Halaman3: { screen: Hal3 }
// },
//     {
//         tabBarPosition: 'bottom',
//         animationEnabled: true,
//         swipeEnabled: false,
//         tabBarComponent: props => {
//             return (
//                 <FooterTab navigation={props.navigation} />
//                 //   =======Tampilan Tab navigator akan muncul disini==========
//             )
//         }
//     });


const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
        headerMode: 'float',
        navigationOptions: ({ navigation }) => ({
            headerStyle: { backgroundColor: '#1a90ff' },
            title: 'Welcome',
            headerLeft: <DrawerButton navigation={navigation} />,
            headerRight: (
                <RightMenu />
            ),
        })
    })

// export const StackOverTabs = StackNavigator({
//     Root: { screen: TabNavigate }
//     // ,
//     // GotoAbout:{screen:About}
// });
export const SignedOut = StackNavigator({
    LoginComponent: { screen: LoginComponent, navigationOptions: { header: null } },
    MenuUtama: { screen: DrawerNavigation }
}, {
        // Default config for all screens
        headerMode: 'none'
    }
)

// AppRegistry.registerComponent('WeatherApp', () => DrawerStack);