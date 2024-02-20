// styles.js

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pantalla: {
    backgroundColor: 'rgb(250, 250, 250)',
    width: 370,
    height: 100,
    borderRadius: 10,
    margin: 10,
    fontSize: 40,
    textAlign: 'right',
    textAlignVertical: 'bottom',
  },
  boton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  textoBotones: {
    fontSize: 30,
  },
  filas: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  PadNumerico: {
    marginTop: 10,
  },
  pantalla2: {
    fontSize: 40,
    textAlign: 'right',
    textAlignVertical: 'bottom',
    marginTop: 50,
    backgroundColor: 'rgb(255, 238, 222)',
    width: 370,
    height: 100,
    borderRadius: 10,
    margin: 10,
    textAlign: 'right',
    textAlignVertical: 'center',
  },
});