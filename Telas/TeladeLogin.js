import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'
import Header from '../Componentes/Header';

export default function Tela2({navigation}) {
  const [user,setuser] = useState('');
    const [senha,setsenha] = useState('');

   async function logar(){
    const headeroptions = {
        method: 'post',
        header: {
            'Content type': 'applicatio/json',
        },
        body: JSON.stringify({user, senha}),
    };
    const response = await fetch('https://servidorx', headeroptions);
    if (response.status === 200){
        const token = await response.text();
        await AsyncStorage.setItem('token', token);
        navigation.navigate('TeladeFilmes');
       
    }
    else{
        Alert.alert('Erro', 'Usuário ou senha invalidos')
    };
    }

  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header navigation={navigation}/> 
      <View>
        <TextInput style={styles.input} placeholder='Usuário...' value={user} onChangeText={setuser}/>
        <TextInput style={styles.input2} placeholder='Senha...' value={senha} onChangeText={setsenha}/>
        <TouchableOpacity style={styles.sendbuton}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerbutton} onPress={() => logar()}>
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
