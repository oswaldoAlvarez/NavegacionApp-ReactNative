import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreeen } from '../screen/SettingsScreeen';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="StackNavigator"
        options={{ title: 'Home' }}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettingsScreen"
        options={{ title: 'Settings' }}
        component={SettingsScreeen}
      />
    </Drawer.Navigator>
  );
};
