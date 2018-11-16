import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
export default class Home extends Component{
render(){
return(
<View style={{flexDirection: 'column'}}>
<View style={{flexDirection: 'column', marginHorizontal:10,borderRadius: 5,backgroundColor:'#4ef54f',marginVertical:10}}>
    <View style={{flexDirection: 'row',paddingBottom:30}}>
        <Text style={{flex:1, backgroundColor:'#4ef54f',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5}}>Data Pembacaan Pelanggan</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{flex:1, backgroundColor:'blue',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5}}>Jenis</Text>
        <Text style={{flex:1, backgroundColor:'blue',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5}}>Prabayar</Text>
        <Text style={{flex:1, backgroundColor:'blue',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5}}>Pasca bayar</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{flex:1, backgroundColor:'blue',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'left',borderRadius: 5}}>Belum Baca</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,borderRadius: 4,
    borderWidth: 0.5,
    borderColor: 'blue',}}>10</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'blue',}}>20</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{flex:1, backgroundColor:'blue',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'left',borderRadius: 5}}>Sudah Baca</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'blue',}}>20</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'blue',}}>30</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{flex:1, backgroundColor:'red',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'left',borderRadius: 5}}>Belum Kirim</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'red',}}>4</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'red',}}>5</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
        <Text style={{flex:1, backgroundColor:'red',color:'#ffffff',justifyContent:'center',fontSize:24,textAlign: 'left',borderRadius: 5}}>Terkirim</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'red',}}>10</Text>
        <Text style={{flex:1, backgroundColor:'#ffffff',color:'#4ef54f',justifyContent:'center',fontSize:24,textAlign: 'center',borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'red',}}>20</Text>
    </View>
    </View>
</View>
)}}