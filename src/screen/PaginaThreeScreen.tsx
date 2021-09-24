import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
import PrimaryButton from '../components/PrimaryButton';

interface Props extends StackScreenProps<any, any> {}

export const PaginaThreeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PaginaThreeScreen</Text>
      <PrimaryButton
        theme="primary"
        text="Regresar"
        onPress={() => navigation.pop()}
      />
      <PrimaryButton
        theme="primary"
        text="Ir página 1"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};
