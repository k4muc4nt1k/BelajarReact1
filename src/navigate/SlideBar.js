import React from 'react';

import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import Hal1 from '../pages/mainMenu/Halaman1';
import Hal2 from '../pages/mainMenu/Halaman2';
import Hal3 from '../pages/mainMenu/Halaman3';
import * as s from '../style/StyleMobile';
import * as css from '../style/style';


export const DrawerButton = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={() => { props.navigation.openDrawer() }}>
                <Image
                    source={require('../images/icon_bar.png')}
                    style={s.styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
};

const customComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
        <View style={{ height: 120, alignItems: 'center' }}>
            <Image
                source={require('../images/logo.png')}
                style={{ width: 90, height: 90 }}
            />
            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Welcome... </Text>
        </View>
        <DrawerItems {...props} />
    </SafeAreaView>
);

export const DrawerStack = DrawerNavigator(
    {
        Halaman1: {
            screen: Hal1, navigationOptions: {
                drawerLabel: 'Halaman 1'
            }
        },
        Halaman2: {
            screen: Hal2, navigationOptions: {
                drawerLabel: 'Halaman 2'
            }
        },
        Halaman3: {
            screen: Hal3, navigationOptions: {
                drawerLabel: 'Halaman 3'
            }
        },
    }, {
        contentComponent: customComponent,
        drawerPosition: 'left',
        contentOptions: css.drawer
    })