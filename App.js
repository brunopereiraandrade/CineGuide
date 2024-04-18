import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

import TeladeRegistro from './Telas/TeladeRegistro';
import TeladeLogin from './Telas/TeladeLogin';
import TelaDetalhamento from './Telas/TelaDetalhamento';
import TeladeFilmes from './Telas/TeladeFIlmes';


export default function App() {



  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='TeladeRegistro' component={TeladeRegistro} options={{headerShown: false}}/>
        <Stack.Screen name='TeladeLogin' component={TeladeLogin} options={{headerShown: false}}/>
        
        <Stack.Screen name='TelaDetalhamento' component={TelaDetalhamento} options={{headerShown: false}}/>
        <Stack.Screen name='TeladeFilmes' component={TeladeFilmes} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

