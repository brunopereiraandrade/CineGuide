import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React, {useState} from 'react';
import Constants from 'expo-constants'
import Header from '../Componentes/Header';



export default function TeladeRegistro({navigation}){
  class usuario{
    constructor(email, senha){
      this.email=email
      this.senha=senha
    }
  }
  const [user,setuser] = useState('');
  const [senha,setsenha] = useState('');

  function Objeto(user, senha){
    validarEmail(user)
    if (validarEmail(user)) {
      novo_objeto = new usuario(user, senha)
      enviarObjetoParaServidor(novo_objeto)
      navigation.navigate('TeladeLogin')    
  } else {
      Alert.alert("e-mail invalido");
  } 
   }


   function enviarObjetoParaServidor(objetoParaEnviar) {
    return new Promise(async (resolve, reject) => {
      try {
        const urlDoServidor = 'https://servidorx';
        const opcoesDeRequisicao = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objetoParaEnviar)
        };
  
        const resposta = await fetch(urlDoServidor, opcoesDeRequisicao);
  
        if (!resposta.ok) {
          throw new Error('Erro ao enviar os dados para o servidor.');
        }
  
        const dados = await resposta.json();
        resolve(dados); 
      } catch (erro) {
        Alert.alert('Erro', 'Ocorreu um erro ao enviar os dados para o servidor. Por favor, tente novamente mais tarde.');
        reject(erro); 
      }
    });
  }
  
  function validarEmail(email) {
    // Expressão regular para validar o formato do e-mail
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}  
 
    return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Header navigation={navigation}/>
          <View>
            <TextInput style={styles.input} placeholder='Usuário...' value={user} onChangeText={setuser}/>
            <TextInput style={styles.input2} placeholder='Senha...' value={senha} onChangeText={setsenha}/>
            <TouchableOpacity style={styles.sendbuton} onPress={() => Objeto(user, senha)}>
              <Text>Registrar</Text>
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
}
});
