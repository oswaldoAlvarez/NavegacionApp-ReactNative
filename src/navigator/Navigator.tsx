import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistroScreen } from '../screen/RegistroScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Loader } from '../components/Loader';
import { StackNavigator } from './StackNavigator';

const Stack = createStackNavigator();

export const Navigator = () => {
  const { authState } = useContext(AuthContext);
  const { statusToken } = authState!;

  if (statusToken === 'checking') return <Loader />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      {statusToken !== 'authenticated' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegistroScreen" component={RegistroScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="stackNavigator" component={StackNavigator} />
        </>
      )}
    </Stack.Navigator>
  );
};
