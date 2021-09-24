import React from 'react';
import { View, Text, Keyboard } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import PrimaryInput from '../components/PrimaryInput';
import { stylesLogin } from './LoginScreen';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { colores } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const RegistroScreen = ({ navigation }: Props) => {
  const { user, password, onChange } = useForm({
    user: '',
    password: '',
  });

  const onRegister = () => {
    console.log({ user, password });
    Keyboard.dismiss();
  };

  return (
    <View style={stylesLogin.loginContainer}>
      <Text style={stylesLogin.loginTitle}>Registro</Text>
      <PrimaryInput
        placeholder="Ingrese su nombre:"
        onChange={value => onChange(value, 'user')}
        textValue={user}
        onSubmit={onRegister}
        placeholderTextColor={colores.primary}
      />
      <PrimaryInput
        placeholder="Ingrese su apellido:"
        onChange={value => onChange(value, 'password')}
        textValue={password}
        onSubmit={onRegister}
        secureTextEntry={true}
        placeholderTextColor={colores.primary}
      />
      <PrimaryButton
        text="Regresar al LogIn"
        onPress={() => navigation.replace('LoginScreen')}
        theme="primary"
      />
    </View>
  );
};
