const chai = require('chai');
const sum = require('./sum');

const { expect } = chai;

// Una agrupación
describe('Sum', function () {

  // Una unidad de testeo
  it('Sumar dos números positivos', function () {
    const actual = sum(5, 4);
    const expected = 9;
    expect(actual).to.equal(expected);
  });

  // Una unidad de testeo
  it('Sino recibe parametros retornar 0', function () {
    const actual = sum();
    const expected = 0;
    expect(actual).to.equal(expected);
  });

});
