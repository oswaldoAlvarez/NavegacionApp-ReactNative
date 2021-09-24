import React, { useReducer } from 'react';
import { createContext, useState, useEffect } from 'react';
import { authReducer } from './authReducer';
import { LoginData } from '../interfaces/appInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthState } from '../interfaces/authInterfaces';

// Estado Inicial //
export const authInitialState: AuthState = {
  statusToken: 'checking',
  contrasena: null,
  usuario: null,
  errMessage: null,
};

// Información sobre como luce y que muestra el Context //
export interface AuthContextProps {
  statusToken?: 'checking' | 'authenticated' | 'notAuthenticated';
  usuario?: string | null;
  contrasena?: string | null;
  errMessage?: string | null;
  authState?: AuthState;
  signIn: (loginData: LoginData) => void;
  logOut?: () => void;
  removeError?: () => void;
}

// Creando Contexto //
export const AuthContext = createContext({} as AuthContextProps);

// Componente proveedor del estado //
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const [user, setUser] = useState('');

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    let usuarioLogin: string | null;
    if (!user) usuarioLogin = await AsyncStorage.getItem('usuario');
    const contrasenaLogin = await AsyncStorage.getItem('contrasena');

    // Si no hay usuario ni contraseña se evita la autenticación //
    if (!usuarioLogin! && !contrasenaLogin)
      return dispatch({ type: 'notAuthenticated' });

    if (usuarioLogin! && contrasenaLogin)
      dispatch({
        type: 'signIn',
        payload: { usuario: usuarioLogin, contrasena: contrasenaLogin },
      });
  };

  const signIn = async ({ usuario, contrasena }: LoginData) => {
    if (usuario === 'oswaldo' && contrasena === 'alvarez') {
      setUser(usuario)
      dispatch({
        type: 'signIn',
        payload: { contrasena, usuario },
      });

      await AsyncStorage.setItem('usuario', usuario);
      await AsyncStorage.setItem('contrasena', contrasena);

      console.log('Inicio de sesión Exitoso!');
    } else {
      dispatch({
        type: 'error400',
        payload: 'Información incorrecta',
      });
    }
  };

  const logOut = async () => {
    await AsyncStorage.removeItem('usuario');
    await AsyncStorage.removeItem('contrasena');
    dispatch({ type: 'logOut' });
  };

  const removeError = () => {
    dispatch({ type: 'removeError' });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        removeError,
        logOut,
        usuario: user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
