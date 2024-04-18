import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState} from 'react';
import Constants from 'expo-constants'
import Header2 from '../Componentes/Header2';


export default function TelaDetalhamento({navigation}){
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Header2 navigation={navigation}/>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      backgroundColor: '#4F4F4F4',
    },
});