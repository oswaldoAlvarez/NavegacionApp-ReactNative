import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';
import PrimaryButton from '../components/PrimaryButton';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props extends DrawerScreenProps<any, any> {}

export const PaginaOneScreen = ({ navigation }: Props) => {
  const { logOut, usuario } = useContext(AuthContext);
  return (
    <>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>PaginaOneScreen</Text>
        <Text style={{ fontSize: 20, textAlign: 'center' }}>
          Bienvenido {usuario}!
        </Text>
        <PrimaryButton
          text="Ir página 2"
          onPress={() => navigation.navigate('PaginaTwoScreen')}
          theme="primary"
        />
        <Text style={{ marginVertical: 20, fontSize: 20 }}>
          Navegar con Argumentos
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 1,
                nombre: 'Pedro',
              })
            }
          >
            <Text style={styles.botonGrandeTexto}>Pedro</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }}
            onPress={() =>
              navigation.navigate('PersonaScreen', {
                id: 2,
                nombre: 'María',
              })
            }
          >
            <Text style={styles.botonGrandeTexto}>María</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={stylesPageOne.container}>
        <PrimaryButton theme="primary" text="Logout" onPress={logOut!} />
      </View>
    </>
  );
};

const stylesPageOne = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    bottom: 20,
  },
});
