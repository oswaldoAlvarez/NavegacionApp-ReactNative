import React from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import PrimaryInput from '../components/PrimaryInput';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import PrimaryButton from '../components/PrimaryButton';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colores } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props): JSX.Element => {
  const { authState, signIn, removeError } = useContext(AuthContext);
  const { errMessage } = authState!;

  const { user, password, onChange } = useForm({
    user: '',
    password: '',
  });

  const onLogin = () => {
    signIn({ usuario: user, contrasena: password });
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (errMessage === null) return;
    Alert.alert(
      'Error al iniciar sesión:',
      'Usuario o contraseña Incorrectos',
      [{ text: 'Ok', onPress: removeError }],
    );
  }, [errMessage]);

  return (
    <>
      <View style={stylesLogin.loginContainer}>
        <Text style={stylesLogin.loginTitle}>Bienvenido a NavegacionApp</Text>
        <PrimaryInput
          placeholder="Ingrese su usuario:"
          onChange={value => onChange(value, 'user')}
          textValue={user}
          onSubmit={onLogin}
          placeholderTextColor={colores.primary}
        />
        <PrimaryInput
          placeholder="Ingrese su contraseña:"
          onChange={value => onChange(value, 'password')}
          textValue={password}
          onSubmit={onLogin}
          secureTextEntry={true}
          placeholderTextColor={colores.primary}
        />
        <>
          <PrimaryButton
            theme={user && password ? 'primary' : ''}
            text="Log In"
            onPress={onLogin}
            disable={user && password ? false : true}
          />
          <View style={stylesLogin.registerButtonContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.replace('RegistroScreen')}
            >
              <Text style={stylesLogin.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </>
      </View>
    </>
  );
};

export const stylesLogin = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  loginTitle: {
    fontSize: 40,
    color: '#512DA8',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerButtonContainer: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 15,
    color: '#512DA8',
  },
});
