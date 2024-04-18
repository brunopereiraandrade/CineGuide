import { StyleSheet, View, Image, Button } from 'react-native';
import React from 'react';


export default function Header2({navigation}){

    return(
        
        <View style={styles.header}>
            <Image style={styles.Imageheader} source={require('../assets/CineGuide.png')}/>
            <View style={styles.buttoncontainer}>
              <Button title='Sair' onPress={() => navigation.navigate('TeladeLogin')}></Button>
            </View>
        </View>   
    );
}



const styles = StyleSheet.create({
header:{
height: 100,
backgroundColor: '#B22222',
alignItems: 'center',
justifyContent: 'center'
},
Imageheader:{
    height: 80,
    width: 100,
},
buttoncontainer:{
  position: 'absolute',
  bottom: 35, 
  right: 20,
}
});
