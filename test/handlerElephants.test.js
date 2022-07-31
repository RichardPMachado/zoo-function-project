const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Test 1', () => {
    const actual = handlerElephants('count');
    expect(actual).toBe(4);
  });
  it('Test 2', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('Test 3', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });
  it('Test 4', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
  });
  it('Test 5', () => {
    const actual = handlerElephants('popularity');
    const expected = 5;
    expect(actual).toEqual(expected);
  });
  it('Test 6', () => {
    const actual = handlerElephants('availability');
    const expected = ['Friday', 'Saturday', 'Sunday', 'Tuesday'];
    expect(actual).toEqual(expected);
  });
  it('Test 7', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it('Test 8', () => {
    const actual = handlerElephants('id');
    const expected = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    expect(actual).toEqual(expected);
  });

  it('Test 9', () => {
    const actual = handlerElephants('');
    const expected = null;
    expect(actual).toEqual(expected);
  });
  it('Test 9', () => {
    const actual = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
  });
});
