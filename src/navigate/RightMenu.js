import React from 'react';

import { Text, Image} from 'react-native'
import { Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';

import * as s from '../style/StyleMobile';

export const RightMenu = () => (
    <Menu onSelect={value => alert('Selected number: ${value}')}>
        <MenuTrigger>
            <Image
                source={require('../images/more_btn.png')}
                style={s.styles.icon}
            />
        </MenuTrigger>
        <MenuOptions>
            <MenuOption value={1} text='Import' />
            <MenuOption value={2}>
                <Text style={{ color: 'red' }}>Two</Text>
            </MenuOption>
            <MenuOption value={3} disabled={true} text='Log Out' />
        </MenuOptions>
    </Menu>
);