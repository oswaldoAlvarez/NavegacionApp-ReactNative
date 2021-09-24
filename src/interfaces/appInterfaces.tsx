// Se puede facilitar el tipado de una interface con https://app.quicktype.io/ //

export interface LoginData {
  usuario: string;
  contrasena: string;
  setToken?: any;
}

export interface LoginResponse {
  access_token: string | null;
  refresh_token: string | null;
  '.expires': string | null;
}
