const { encode, decode } = require('./encodeDecode.js');

describe('Teste para as funções encode e decode', () => {
  test('1. Verifique se encode e decode são funções', () => {
    expect(typeof encode).toEqual('function');
    expect(typeof decode).toEqual('function');
  });
  test('2. Função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  });
  test('Função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });
  test('4. Teste se as demais letras/números não são convertidos para cada caso;', () => {
    expect(encode('iara')).toEqual('31r1');
    expect(encode('diego')).toEqual('d32g4');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('cu')).toEqual('c5');

    expect(decode('31r1')).toEqual('iara');
    expect(decode('d32g4')).toEqual('diego');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('c5')).toEqual('cu');
  });
  test('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('diego').length).toEqual(5);
    expect(decode('d32g4').length).toEqual(5);
  });
});
