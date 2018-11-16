import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ListView, ToastAndroid } from 'react-native';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { Icon } from 'react-native-elements'

import * as services from '../mainMenu/HalamanService';

export default class Home extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      loading: false,
      data: ds.cloneWithRows([
        { 'firstName': 'Diana', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Perempuan', 'images': require('../../images/logo.png') },
        { 'firstName': 'Arum', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Laki-laki', 'images': require('../../images/logo.png') },
        { 'firstName': 'Rina', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Laki-laki', 'images': require('../../images/logo.png') },
        { 'firstName': 'Hera', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Laki-laki', 'images': require('../../images/logo.png') },
        { 'firstName': 'Mura', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Laki-laki', 'images': require('../../images/logo.png') },
        { 'firstName': 'Ida', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Laki-laki', 'images': require('../../images/logo.png') },
        { 'firstName': 'Intan', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Laki-laki', 'images': require('../../images/logo.png') },
        { 'firstName': 'Amila', 'alamat': 'Jl Falatehan NO 1A', 'jk': 'Laki-laki', 'images': require('../../images/logo.png') }
      ]),
      errors: {},
      fields: {},
    }
  }
  getListData() {
    services.getList()
      .then(
        (result) => {
          const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          // let fields = this.state.data;

          // fields = ds.cloneWithRows(result);
          // this.setState({ fields });
          this.setState({
            data: ds.cloneWithRows(result)
          });
        },
        (error) => {
          alert(error);
        }
      );
    // let fields = this.state.data;

    // fields = ds.cloneWithRows([{'firstName':'row 5'},{ 'firstName':'row 6'}]);
    // this.setState({ fields });



  }

  componentWillMount() {
    // this.getListData();
  }

  render() {

    const CustomRow = ({ item, images }) => (
      <View style={{
        flexDirection: 'row', 
        backgroundColor: '#fefff4', 
        marginBottom: 5, 
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight:20 }}>
        <Image style={{
          height: 80,
          width: 80
        }}
          source={item.images}
        />
        <View style={{ flexDirection: 'column',flex:1 }}>
          <Text style={{fontSize: 25,fontWeight: 'bold'}}>
            {item.firstName}
          </Text>
          <Text>
            {item.alamat}
          </Text>
          <Text>
            {item.jk}
          </Text>
        </View>
        <TouchableOpacity style={{
          // backgroundColor: '#005ce6',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginHorizontal: 5,
          paddingVertical: 13
        }}>
          {/* <Text style={{
            fontSize: 16,
            fontWeight: '500',
            color: '#ffffff',
          }}>Cari</Text> */}
          <Icon
            name='ios-arrow-dropright'
            type='ionicon'
            size={40}
            
            color='blue'
          />
        </TouchableOpacity>
      </View>
    );

    return (
      <View>
        <ListView
          dataSource={this.state.data}
          renderRow={(rowData) => <CustomRow
            item={rowData}
            images={rowData.images}
          />}
        />
      </View>
    )
  }
}