import { AuthState } from '../interfaces/authInterfaces';

// Definición de Actions //
type AuthAction =
  | { type: 'signIn'; payload: any }
  | { type: 'error400'; payload: any }
  | { type: 'removeError' }
  | { type: 'notAuthenticated' }
  | { type: 'logOut' };

// Generar nuevo estado //
export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    
    case 'signIn':
      return {
        ...state,
        statusToken: 'authenticated',
        usuario: action.payload.usuario,
        contrasena: action.payload.contrasena,
      };

    case 'error400':
      return {
        ...state,
        errMessage: action.payload.errMessage,
      };

    case 'removeError':
      return {
        ...state,
        errMessage: null,
      };

    case 'logOut':
    case 'notAuthenticated':
      return {
        ...state,
        statusToken: 'notAuthenticated',
        usuario: null,
        contrasena: null,
      };

    default:
      return state;
  }
};
