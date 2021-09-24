import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}

export const PaginaOneScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PaginaOneScreen</Text>
      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('PaginaTwoScreen')}
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
  );
};
