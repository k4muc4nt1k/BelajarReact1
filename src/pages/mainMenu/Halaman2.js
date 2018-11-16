import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, TouchableOpacity,ScrollView } from 'react-native';
export default class Home extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column', flex: 1 }}>
            
                <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    alignItems: 'flex-start',
                    backgroundColor: '#4db8ff'
                }}>

                    <Text style={{
                        paddingRight: 30,
                        fontSize: 20, justifyContent: 'center', alignItems: 'center'
                    }}>Cari</Text>
                    <TextInput
                        style={{
                            height: 40, borderColor: 'gray', borderWidth: 1, flex: 1,
                            borderRadius: 5,
                            backgroundColor: '#ffffff'
                        }}
                    />
                    <TouchableOpacity style={{
                        backgroundColor: '#005ce6',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                        marginHorizontal: 5,
                        paddingVertical: 13,
                        width: 100
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#ffffff',
                        }}>Cari</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>

                
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    paddingVertical: 10,
                    backgroundColor: '#ffffff',
                    paddingHorizontal: 5
                }}>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 4,
                        backgroundColor: '#ffffff',
                        paddingHorizontal: 5
                    }}>
                        <Text style={{
                            paddingRight: 30,
                            fontSize: 20, justifyContent: 'center', alignItems: 'center',
                            width:140
                        }}>Nama</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1,borderRadius: 5 }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 4,
                        backgroundColor: '#ffffff',
                        paddingHorizontal: 5
                    }}>
                        <Text style={{
                            paddingRight: 30,
                            fontSize: 20, justifyContent: 'center', alignItems: 'center',
                            width:140
                        }}>Alamat</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1,borderRadius: 5}}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 4,
                        backgroundColor: '#ffffff',
                        paddingHorizontal: 5
                    }}>
                        <Text style={{
                            paddingRight: 30,
                            fontSize: 20, justifyContent: 'center', alignItems: 'center',
                            width:140
                        }}>Jenis Kelamin</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1,borderRadius: 5 }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 4,
                        backgroundColor: '#ffffff',
                        paddingHorizontal: 5
                    }}>
                        <Text style={{
                            paddingRight: 30,
                            fontSize: 20, justifyContent: 'center', alignItems: 'center',
                            width:140
                        }}>Status</Text>
                        <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1,borderRadius: 5 }}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        paddingVertical: 4,
                        backgroundColor: '#ffffff',
                        paddingHorizontal: 5,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Image
                        style={{width: 400, height: 400}}
                        source={require('../../images/logo.png')}
              ></Image>
              
                    </View>
                </View>
                </ScrollView>
                <View style={{
                    flexDirection: 'row',
                    paddingBottom: 10,
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    backgroundColor: '#e4s25f'
                }}>
                    <TouchableOpacity style={{
                        backgroundColor: '#005ce6', flexDirection: 'row',
                        justifyContent: 'center', alignItems: 'center', flex: 1,
                        borderRadius: 10,
                        marginVertical: 10,
                        marginHorizontal: 5,
                        paddingVertical: 13
                    }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '500',
                            color: '#ffffff',
                        }}>Verifikasi</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}