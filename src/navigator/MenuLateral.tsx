import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreeen } from '../screen/SettingsScreeen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  return (
    <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreeen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones del menú */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('StackNavigator')}
          style={styles.menuBoton}
        >
          <Text style={styles.menuTexto}>Navegación Stack</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SettingsScreen')}
          style={styles.menuBoton}
        >
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
