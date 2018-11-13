/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, StatusBar } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import {SignedOut} from './src/Router';

export default class App extends Component {
  render() {
    return (
      <MenuProvider>
      <SignedOut/>
      </MenuProvider>
      // <View style={styles.container}>
      //   <StatusBar
      //     backgroundColor="#1c313a"
      //     barStyle="light-content"
      //   />
      //   <SignedOut />
      // </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }
// });
