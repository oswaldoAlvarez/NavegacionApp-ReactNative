import { useNavigation, CommonActions } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

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
      <Button
        title="Ir página 3"
        onPress={() =>
          navigator.dispatch(
            CommonActions.navigate({ name: 'PaginaThreeScreen' }),
          )
        }
      />
    </View>
  );
};
