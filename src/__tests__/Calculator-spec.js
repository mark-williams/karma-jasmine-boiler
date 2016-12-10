import * as calculator from '../Calculator';

describe('Calculator', () => {
  it('should add two numbers', () => {
    const sum = calculator.add(5, 2);
    expect(sum).toBe(7);
  });

  it('should subtract two numbers', () => {
    const sub = calculator.subtract(5, 2);
    expect(sub).toBe(3);
  });

  it('should multiply two numbers', () => {
    const sub = calculator.multiply(5, 2);
    expect(sub).toBe(10);
  });

  it('should divide two numbers', () => {
    const sub = calculator.divide(100, 50);
    expect(sub).toBe(2);
  });

  it('should square a number', () => {
    const result = calculator.square(5);
    expect(result).toBe(25);

  it('should return root of a number', () => {
    const result = calculator.root(9);
    expect(result).toBe(3);
  });
});
