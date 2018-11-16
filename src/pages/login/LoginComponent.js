import React, { Component } from 'react';
import { ToastAndroid, Image, Keyboard, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, AsyncStorage,ActivityIndicator, TouchableOpacity } from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

import LoginView from '../login/LoginView'
import * as s from '../../style/StyleMobile';
import * as services from '../login/login.service';
import {setToken, setUser} from '../../storage/login_storage';


import { Actions } from 'react-native-router-flux';

export default class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            email:'',
            password:'',
            errors: {},
            fields: {},
        }
    }
    goToMainMenu() {
        // services.LoginService(this.state.fields["username"], this.state.fields["password"])
        // .then(
        //   (result) => {
        //     setToken(result.token);
        //     setUser(result.profile);
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'MenuUtama' })],
              });
              this.props.navigation.dispatch(resetAction);    
        //   },
        //   (error) => {
        //     alert(error);
        //   }
        // );

    }
    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e;
        this.setState({ fields });
      }
render() {
        return (
            <View style={s.styles.container}>
            <LoginView type="Login" data={this}/>
                <View style={s.styles.signupTextCont}>
                    <Text style={s.styles.signupText}>Copyright © 2018 Tab Solution</Text>
                </View>
            </View>
        )
    }
}