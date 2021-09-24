import { StyleSheet } from 'react-native';

export const colores = {
  primary: '#512DA8',
  textPrimary: 'white',
  disableBG: '#DDE1E6',
  disableText: '#999999'
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  menuBoton: {
    marginVertical: 5,
  },
  menuTexto: {
    fontSize: 19,
  },
  genericBtn: {
    borderRadius: 8,
  },
  buttonBase: {
    backgroundColor: colores.primary,
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  textButtonBase: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
    color: colores.primary,
  },
});
