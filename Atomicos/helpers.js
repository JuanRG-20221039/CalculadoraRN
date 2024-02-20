// helpers.js

export const realizarOperacion = (valor1, valor2, operacion) => {
    switch (operacion) {
      case '+':
        return valor1 + valor2;
      case '-':
        return valor1 - valor2;
      case 'x':
        return valor1 * valor2;
      case '/':
        return valor1 / valor2;
      case '∧':
        return Math.pow(valor1, valor2);
      case '%':
        return (valor1 * valor2) / 100;
      default:
        return valor2;
    }
  };  