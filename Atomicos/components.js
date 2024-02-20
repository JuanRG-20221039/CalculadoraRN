// components.js

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';

export const Pantalla2 = ({ valor }) => {
  return (
    <View>
      <Text style={styles.pantalla2}>{valor}</Text>
    </View>
  );
};

export const Pantalla = ({ valor }) => {
  return (
    <View>
      <Text style={styles.pantalla}>{valor}</Text>
    </View>
  );
};

export const Boton = ({ texto, colorTexto, onPress }) => {
  return (
    <View>
      <Pressable style={styles.boton} onPress={() => onPress(texto)}>
        <Text style={[styles.textoBotones, { color: colorTexto }]}>{texto}</Text>
      </Pressable>
    </View>
  );
};

export const PadNumerico = ({ actualizarPantalla }) => {
  return (
    <View style={styles.PadNumerico}>
      <View style={styles.filas}>
        <Boton texto={'AC'} colorTexto={'orange'} onPress={actualizarPantalla} />
        <Boton texto={'C'} colorTexto={'orange'} onPress={actualizarPantalla} />
        <Boton texto={'%'} colorTexto={'orange'} onPress={actualizarPantalla} />
        <Boton texto={'∧'} colorTexto={'orange'} onPress={actualizarPantalla} />
      </View>
      <View style={styles.filas}>
        <Boton texto={'7'} onPress={actualizarPantalla} />
        <Boton texto={'8'} onPress={actualizarPantalla} />
        <Boton texto={'9'} onPress={actualizarPantalla} />
        <Boton texto={'/'} colorTexto={'orange'} onPress={actualizarPantalla} />
      </View>
      <View style={styles.filas}>
        <Boton texto={'4'} onPress={actualizarPantalla} />
        <Boton texto={'5'} onPress={actualizarPantalla} />
        <Boton texto={'6'} onPress={actualizarPantalla} />
        <Boton texto={'x'} colorTexto={'orange'} onPress={actualizarPantalla} />
      </View>
      <View style={styles.filas}>
        <Boton texto={'1'} onPress={actualizarPantalla} />
        <Boton texto={'2'} onPress={actualizarPantalla} />
        <Boton texto={'3'} onPress={actualizarPantalla} />
        <Boton texto={'-'} colorTexto={'orange'} onPress={actualizarPantalla} />
      </View>
      <View style={styles.filas}>
        <Boton texto={'='} colorTexto={'orange'} onPress={actualizarPantalla} />
        <Boton texto={'0'} onPress={actualizarPantalla} />
        <Boton texto={'.'} onPress={actualizarPantalla} />
        <Boton texto={'+'} colorTexto={'orange'} onPress={actualizarPantalla} />
      </View>
    </View>
  );
};