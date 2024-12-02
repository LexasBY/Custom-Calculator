import { Calculator } from "../modules/calculator";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers correctly", () => {
    calculator.appendNumber("5");
    calculator.setOperation("+");
    calculator.appendNumber("3");
    const result = calculator.calculate();
    expect(result).toBe(8);
  });

  test("should subtract two numbers correctly", () => {
    calculator.appendNumber("9");
    calculator.setOperation("-");
    calculator.appendNumber("4");
    const result = calculator.calculate();
    expect(result).toBe(5);
  });

  test("should multiply two numbers correctly", () => {
    calculator.appendNumber("7");
    calculator.setOperation("×");
    calculator.appendNumber("6");
    const result = calculator.calculate();
    expect(result).toBe(42);
  });

  test("should divide two numbers correctly", () => {
    calculator.appendNumber("8");
    calculator.setOperation("÷");
    calculator.appendNumber("2");
    const result = calculator.calculate();
    expect(result).toBe(4);
  });

  test("should handle division by zero", () => {
    calculator.appendNumber("10");
    calculator.setOperation("÷");
    calculator.appendNumber("0");
    expect(() => calculator.calculate()).toThrow(
      "Incorrect data for calculation",
    );
  });

  test("should retain the result as the first value for further operations", () => {
    calculator.appendNumber("10");
    calculator.setOperation("+");
    calculator.appendNumber("20");
    const firstResult = calculator.calculate();
    expect(firstResult).toBe(30);

    calculator.setOperation("×");
    calculator.appendNumber("2");
    const secondResult = calculator.calculate();
    expect(secondResult).toBe(60);
  });

  test("should calculate a complex sequence of operations", () => {
    calculator.appendNumber("50");
    calculator.setOperation("÷");
    calculator.appendNumber("2");
    calculator.calculate();

    calculator.setOperation("+");
    calculator.appendNumber("5");
    const result = calculator.calculate();
    expect(result).toBe(30);
  });

  test("should handle addition of floating point numbers correctly", () => {
    calculator.appendNumber("0.1");
    calculator.setOperation("+");
    calculator.appendNumber("0.2");
    const result = calculator.calculate();
    expect(result).toBe(0.3);
  });

  test("should handle subtraction of floating point numbers correctly", () => {
    calculator.appendNumber("0.3");
    calculator.setOperation("-");
    calculator.appendNumber("0.1");
    const result = calculator.calculate();
    expect(result).toBe(0.2);
  });

  test("Square: should return square of a number", () => {
    calculator.firstValue = "4";
    calculator.square();
    expect(parseFloat(calculator.result)).toBe(16);
  });

  test("Cube: should return cube of a number", () => {
    calculator.firstValue = "3";
    calculator.cube();
    expect(parseFloat(calculator.result)).toBe(27);
  });

  test("Power: should return x raised to the power y", () => {
    calculator.firstValue = "2";
    calculator.secondValue = "3";
    calculator.power();
    expect(parseFloat(calculator.result)).toBe(8);
  });

  test("1/x: should return reciprocal of a number", () => {
    calculator.firstValue = "4";
    calculator.oneOnX();
    expect(parseFloat(calculator.result)).toBe(0.25);
  });

  test("Square Root: should return square root of a number", () => {
    calculator.firstValue = "16";
    calculator.squareRoot();
    expect(parseFloat(calculator.result)).toBe(4);
  });

  test("Cube Root: should return cube root of a number", () => {
    calculator.firstValue = "27";
    calculator.cubeRoot();
    expect(parseFloat(calculator.result)).toBe(3);
  });

  test("Nth Root: should return nth root of a number", () => {
    calculator.firstValue = "27";
    calculator.secondValue = "3";
    calculator.nthRoot();
    expect(parseFloat(calculator.result)).toBe(3);
  });

  test("Factorial: should return factorial of a number", () => {
    calculator.firstValue = "5";
    calculator.factorial();
    expect(parseFloat(calculator.result)).toBe(120);
  });

  test("Square Root: should throw error for negative numbers", () => {
    calculator.firstValue = "-4";
    expect(() => calculator.squareRoot()).toThrow(
      "Invalid input for square root",
    );
  });

  test("Reciprocal: should throw error for 0", () => {
    calculator.firstValue = "0";
    expect(() => calculator.oneOnX()).toThrow(
      "Division by zero is not allowed",
    );
  });
});
