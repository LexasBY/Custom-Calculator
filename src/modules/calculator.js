export class Calculator {
  constructor() {
    this.firstValue = "";
    this.secondValue = "";
    this.currentOperator = "";
    this.result = null;
    this.isSecondValueInput = false;
    this.finish = false;
    this.memory = 0;
  }

  appendNumber(number) {
    number = number.toString();
    if (this.finish) {
      this.firstValue = number;
      this.secondValue = "";
      this.currentOperator = "";
      this.result = null;
      this.isSecondValueInput = false;
      this.finish = false;
    } else if (!this.isSecondValueInput) {
      this.firstValue += number;
    } else {
      this.secondValue += number;
    }
  }

  setOperation(operator) {
    if (this.currentOperator && this.secondValue) {
      this.calculate();
    }

    this.currentOperator = operator;
    this.isSecondValueInput = true;
    this.finish = false;
  }

  calculate() {
    if (!this.currentOperator) {
      if (this.firstValue) {
        return parseFloat(this.firstValue);
      } else {
        throw new Error("Operation not supported");
      }
    }

    const num1 = parseFloat(this.firstValue);
    const num2 = parseFloat(this.secondValue || "0");

    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Incorrect data for calculation");
    }

    switch (this.currentOperator) {
      case "+":
        this.result = (num1 * 10 + num2 * 10) / 10;
        break;
      case "-":
        this.result = (num1 * 10 - num2 * 10) / 10;
        break;
      case "×":
        this.result = num1 * num2;
        break;
      case "÷":
        if (num2 === 0) {
          this.result = "Error";
          throw new Error("Incorrect data for calculation");
        } else {
          this.result = num1 / num2;
        }
        break;
      default:
        throw new Error(`Operation ${this.currentOperator} not supported`);
    }

    this.firstValue = this.result.toString();
    this.secondValue = "";
    this.currentOperator = "";
    this.isSecondValueInput = false;
    this.finish = true;

    return this.result;
  }

  processPercentage() {
    if (!this.secondValue) {
      if (this.firstValue) {
        this.firstValue = (parseFloat(this.firstValue) / 100).toString();
      }
    } else {
      const num1 = parseFloat(this.firstValue || "0");
      const num2 = parseFloat(this.secondValue || "0");

      if (["+", "-"].includes(this.currentOperator)) {
        this.secondValue = ((num1 * num2) / 100).toString();
      } else if (["×", "÷"].includes(this.currentOperator)) {
        this.secondValue = (num2 / 100).toString();
      }
    }
  }

  toggleSign() {
    if (this.isSecondValueInput) {
      if (!this.secondValue) {
        this.secondValue = "-0";
      } else {
        this.secondValue = (-parseFloat(this.secondValue)).toString();
      }
    } else {
      if (!this.firstValue) {
        this.firstValue = "-0";
      } else {
        this.firstValue = (-parseFloat(this.firstValue)).toString();
      }
    }
  }

  clearMemory() {
    this.memory = 0;
  }

  addToMemory(value) {
    const number = parseFloat(value || this.firstValue || 0);
    this.memory += number;
  }

  subtractFromMemory(value) {
    const number = parseFloat(value || this.firstValue || 0);
    this.memory -= number;
  }

  recallMemory() {
    if (!isNaN(this.memory)) {
      if (this.isSecondValueInput) {
        this.secondValue = this.memory.toString();
      } else {
        this.firstValue = this.memory.toString();
      }
      this.finish = false;
    }
    return this.memory;
  }

  reset() {
    this.firstValue = "";
    this.secondValue = "";
    this.currentOperator = "";
    this.result = null;
    this.isSecondValueInput = false;
  }

  square() {
    const value = parseFloat(this.firstValue);
    this.result = value ** 2;
    this.firstValue = this.result.toString();
  }

  cube() {
    const value = parseFloat(this.firstValue);
    this.result = value ** 3;
    this.firstValue = this.result.toString();
  }

  power() {
    const base = parseFloat(this.firstValue);
    const exponent = parseFloat(this.secondValue);
    this.result = base ** exponent;
    this.firstValue = this.result.toString();
    this.secondValue = "";
    this.currentOperator = "";
    this.isSecondValueInput = false;
    this.finish = true;

    return this.result;
  }

  powerOfTen() {
    const exponent = parseFloat(this.firstValue);
    this.result = 10 ** exponent;
    this.firstValue = this.result.toString();
    this.finish = true;

    return this.result;
  }

  oneOnX() {
    const value = parseFloat(this.firstValue);
    if (isNaN(value)) {
      throw new Error("Invalid input for reciprocal");
    }
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result = 1 / value;
    this.firstValue = this.result.toString();
    this.finish = true;
    return this.result;
  }

  calculatePowerRoot(number, power) {
    let powValue = number / power;
    let temp = 0;
    while (powValue !== temp) {
      temp = powValue;
      powValue = (number / temp ** (power - 1) + temp * (power - 1)) / power;
    }
    return powValue;
  }

  squareRoot() {
    const value = parseFloat(this.firstValue);
    if (isNaN(value) || value < 0) {
      throw new Error("Invalid input for square root");
    }
    this.result = this.calculatePowerRoot(value, 2);
    this.firstValue = this.result.toString();
    this.finish = true;

    return this.result;
  }

  cubeRoot() {
    const value = parseFloat(this.firstValue);
    this.result = this.calculatePowerRoot(value, 3);
    this.firstValue = this.result.toString();
    this.finish = true;

    return this.result;
  }

  nthRoot() {
    const base = parseFloat(this.firstValue);
    const degree = parseFloat(this.secondValue);

    if (isNaN(base) || isNaN(degree) || degree <= 0) {
      throw new Error("Invalid input for root");
    }

    this.result = this.calculatePowerRoot(base, degree);
    this.firstValue = this.result.toString();
    this.secondValue = "";
    this.finish = true;

    return this.result;
  }

  factorial() {
    const value = parseInt(this.firstValue, 10);

    if (isNaN(value) || value < 0) {
      throw new Error("Invalid input for factorial");
    }

    let result = 1;
    for (let i = 1; i <= value; i++) {
      result *= i;
    }

    this.result = result;
    this.firstValue = this.result.toString();
    this.finish = true;

    return this.result;
  }
}
