import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PaginaOneScreen } from '../screen/PaginaOneScreen';
import { PaginaTwoScreen } from '../screen/PaginaTwoScreen';
import { PaginaThreeScreen } from '../screen/PaginaThreeScreen';
import { PersonaScreen } from '../screen/PersonaScreen';

export type RootStackParams = {
  PaginaOneScreen: undefined;
  PaginaTwoScreen: undefined;
  PaginaThreeScreen: undefined;
  PersonaScreen: { id: number; nombre: string };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen
        name="PaginaOneScreen"
        options={{ title: 'Página 1' }}
        component={PaginaOneScreen}
      />
      <Stack.Screen
        name="PaginaTwoScreen"
        options={{ title: 'Página 2' }}
        component={PaginaTwoScreen}
      />
      <Stack.Screen
        name="PaginaThreeScreen"
        options={{ title: 'Página 3' }}
        component={PaginaThreeScreen}
      />
      <Stack.Screen name="PersonaScreen" component={PersonaScreen} />
    </Stack.Navigator>
  );
};
