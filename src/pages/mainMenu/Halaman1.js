import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity,ListView, ToastAndroid} from 'react-native';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

  import * as services from '../mainMenu/HalamanService';

export default class Home extends Component{
  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
        loading:false,
        data: ds.cloneWithRows([{'firstName':'row 1'},{ 'firstName':'row 2'}]),
        errors: {},
        fields: {},
    }
}
  getListData() {
    services.getList()
    .then(
      (result) => {
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
  this.getListData();
}

render(){
return(
<View>
<ListView
        dataSource={this.state.data}
        renderRow={(rowData) => <Text>{rowData.firstName}</Text>}
      />
{/* <MenuProvider> */}
{/* <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert('Save')} text='Save' />
        <MenuOption onSelect={() => alert('Delete')} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert('Not called')} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu> */}
    {/* </MenuProvider> */}
</View>
)}}