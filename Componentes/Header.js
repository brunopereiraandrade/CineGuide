
import { StyleSheet, View, Image } from 'react-native';
import React from 'react';


export default function Header(){

    return(
        
        <View style={styles.header}>
            <Image style={styles.Imageheader} source={require('../assets/CineGuide.png')}/>
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
}
});
