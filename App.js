import React from 'react';
import{ NavigationContainer } from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './Componentes/TelaInicial';
import Restaurantes from './Componentes/Restaurantes';
import Passeios from './Componentes/Passeios';
import Hospedagem from './Componentes/Hospedagem';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Tela inicial' component={TelaInicial} />
        <Stack.Screen name='Hospedagem' component={Hospedagem} />
        <Stack.Screen name='Passeios' component={Passeios} />
        <Stack.Screen name='Restaurantes' component={Restaurantes} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}


