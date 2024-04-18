import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Constants from 'expo-constants'
import Header from '../Componentes/Header';

export default function Tela2({navigation}) {

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header navigation={navigation}/> 
      <View>
        <TextInput style={styles.input} placeholder='Usuário...'/>
        <TextInput style={styles.input2} placeholder='Senha...'/>
        <TouchableOpacity style={styles.sendbuton}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerbutton} onPress={() => navigation.navigate('TeladeRegistro')}>
          <Text style={{ color: 'green' }}>Registrar-se</Text>
        </TouchableOpacity>
      </View>         
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#4F4F4F4',
  },
  registercontainer:{
    flex: 1,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 10,
    },
    input:{
    height: 50,
    marginHorizontal: 20,
    marginTop: 150,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 10,        
    },
    input2:{
    height: 50,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    backgroundColor: 'gray',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingLeft: 10,
    },
    sendbuton:{
    padding: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    marginTop: 20,
    alignSelf:'center',
    },
    registerbutton:{
    padding: 10,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: 5,
    alignSelf:'center',
    }
});
