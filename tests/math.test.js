const { soma, subtracao, multiplicacao, divisao } = require('../src/math');

describe('Funções matemáticas básicas', () => {
  test('soma: 2 + 3 = 5', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('subtracao: 5 - 2 = 3', () => {
    expect(subtracao(5, 2)).toBe(3);
  });

  test('multiplicacao: 4 * 3 = 12', () => {
    expect(multiplicacao(4, 3)).toBe(12);
  });

  test('divisao: 10 / 2 = 5', () => {
    expect(divisao(10, 2)).toBe(5);
  });

  test('divisao por zero lança erro', () => {
    expect(() => divisao(10, 0)).toThrow('Divisão por zero não é permitida');
  });
});
