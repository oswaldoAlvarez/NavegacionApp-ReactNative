import { useNavigation, CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import PrimaryButton from '../components/PrimaryButton';

export const PaginaTwoScreen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Página Two',
      headerBackTitle: '',
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>PaginaTwoScreen</Text>
      <PrimaryButton
        text="Ir página 3"
        theme="primary"
        onPress={() =>
          navigator.dispatch(
            CommonActions.navigate({ name: 'PaginaThreeScreen' }),
          )
        }
      />
    </View>
  );
};
