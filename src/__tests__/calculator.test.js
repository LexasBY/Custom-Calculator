import { Calculator } from '../modules/calculator';

describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test('should add two numbers correctly', () => {
    calculator.appendNumber('5');
    calculator.setOperation('+');
    calculator.appendNumber('3');
    const result = calculator.calculate();
    expect(result).toBe(8);
  });

  test('should subtract two numbers correctly', () => {
    calculator.appendNumber('9');
    calculator.setOperation('-');
    calculator.appendNumber('4');
    const result = calculator.calculate();
    expect(result).toBe(5);
  });

  test('should multiply two numbers correctly', () => {
    calculator.appendNumber('7');
    calculator.setOperation('×');
    calculator.appendNumber('6');
    const result = calculator.calculate();
    expect(result).toBe(42);
  });

  test('should divide two numbers correctly', () => {
    calculator.appendNumber('8');
    calculator.setOperation('÷');
    calculator.appendNumber('2');
    const result = calculator.calculate();
    expect(result).toBe(4);
  });

  test('should handle division by zero', () => {
    calculator.appendNumber('10');
    calculator.setOperation('÷');
    calculator.appendNumber('0');
    expect(() => calculator.calculate()).toThrow('Incorrect data for calculation');
  });

  test('should retain the result as the first value for further operations', () => {
    calculator.appendNumber('10');
    calculator.setOperation('+');
    calculator.appendNumber('20');
    const firstResult = calculator.calculate();
    expect(firstResult).toBe(30);

    calculator.setOperation('×');
    calculator.appendNumber('2');
    const secondResult = calculator.calculate();
    expect(secondResult).toBe(60);
  });

  test('should calculate a complex sequence of operations', () => {
    calculator.appendNumber('50');
    calculator.setOperation('÷');
    calculator.appendNumber('2');
    calculator.calculate(); 

    calculator.setOperation('+');
    calculator.appendNumber('5');
    const result = calculator.calculate();
    expect(result).toBe(30);
  });

  test('should handle addition of floating point numbers correctly', () => {
    calculator.appendNumber('0.1');
    calculator.setOperation('+');
    calculator.appendNumber('0.2');
    const result = calculator.calculate();
    expect(result).toBe(0.3);
  });
  
  test('should handle subtraction of floating point numbers correctly', () => {
    calculator.appendNumber('0.3');
    calculator.setOperation('-');
    calculator.appendNumber('0.1');
    const result = calculator.calculate();
    expect(result).toBe(0.2);
  });
  
});
