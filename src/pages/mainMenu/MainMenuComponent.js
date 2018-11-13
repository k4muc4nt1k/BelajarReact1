import React, { Component } from 'react';

import {
    Text,
    View
} from 'react-native';

// import LoginView from '../login/LoginView'
import * as s from '../../style/StyleMobile';

export default class MainMenuComponent extends Component {
render() {
        return (
            <View style={s.styles.container}>
                <View style={s.styles.signupTextCont}>
                    <Text style={s.styles.signupText}>Copyright © 2018 Tab Solution</Text>
                </View>
            </View>
        )
    }
}