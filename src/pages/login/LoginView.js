import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

import * as s from '../../style/StyleMobile';

import { Actions } from 'react-native-router-flux';

export default class LoginView extends Component {
    
    render() {
        const d = this.props.data;
        return (
            <View style={styles.container}>
                <Image style={{ width: 100, height: 70 }}
                    source={require('../../images/logo.png')} />

                <Text style={s.styles.logoText}>Welcome to App Belajar React</Text>

                <TextInput style={s.styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Username"
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    onSubmitEditing={() => this.password.focus()}
                    onChangeText={(text) => d.handleChange("username",text)}
                />

                <TextInput style={s.styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder="Password"
                    secureTextEntry={true}
                    placeholderTextColor="#ffffff"
                    ref={(input) => this.password = input}
                    onChangeText={(text) => d.handleChange("password",text)}
                />

                <TouchableOpacity onPress={() => d.goToMainMenu()} style={s.styles.button}>
                    <Text style={s.styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});