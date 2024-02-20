// App.js

import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './Atomicos/styles';
import { Pantalla2, Pantalla, PadNumerico, Boton } from './Atomicos/components';
import { realizarOperacion } from './Atomicos/helpers';

const App = () => {
  const [pantallaValor, setPantallaValor] = useState('0');
  const [pantallaOperacion, setPantallaOperacion] = useState('');
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);

  const actualizarPantalla = (valor) => {
    if (valor === 'C') {
      if (pantallaValor.length > 1) {
        setPantallaValor(pantallaValor.slice(0, -1));
      } else {
        setPantallaValor('0');
      }
    } else if (valor === 'AC') {
      setPantallaValor('0');
      setPantallaOperacion('');
      setValorAnterior(null);
      setOperacion(null);
    } else if (valor === '.' && pantallaValor.includes('.')) {
      return;
    } else if (/[+/\-x∧%]/.test(valor)) {
      setValorAnterior(pantallaValor);
      setOperacion(valor);
      setPantallaOperacion(pantallaOperacion + pantallaValor + valor);
      setPantallaValor('0');
    } else if (valor === '=') {
      if (valorAnterior && operacion && pantallaValor !== '0') {
        const resultado = realizarOperacion(
          parseFloat(valorAnterior),
          parseFloat(pantallaValor),
          operacion
        );
        setValorAnterior(null);
        setOperacion(null);
        setPantallaOperacion(pantallaOperacion + pantallaValor + valor);
        setPantallaValor(resultado.toString());
      }
    } else {
      setPantallaValor(pantallaValor === '0' ? valor : pantallaValor + valor);
    }
  };

  return (
    <View style={styles.container}>
      <Pantalla2 valor={pantallaOperacion} />
      <Pantalla valor={pantallaValor} />
      <PadNumerico actualizarPantalla={actualizarPantalla} />
    </View>
  );
};

export default App;