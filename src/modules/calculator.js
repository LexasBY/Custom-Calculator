export class Calculator {
  constructor() {
    this.firstValue = "";
    this.secondValue = "";
    this.currentOperator = "";
    this.result = null;
    this.isSecondValueInput = false;
  }

  appendNumber(number) {
    if (!this.isSecondValueInput) {
      this.firstValue += number;
    } else {
      this.secondValue += number;
    }
  }

  setOperation(operator) {
    this.currentOperator = operator;
    this.isSecondValueInput = true;
  }

  calculate() {
    const num1 = parseFloat(this.firstValue);
    const num2 = parseFloat(this.secondValue);

    switch (this.currentOperator) {
      case "+":
        this.result = num1 + num2;
        break;
      // Другие операции можно добавить позже
      default:
        throw new Error(`Операция ${this.currentOperator} не поддерживается`);
    }

    this.firstValue = this.result.toString();
    this.secondValue = "";
    this.currentOperator = "";
    this.isSecondValueInput = false;

    return this.result;
  }

  reset() {
    this.firstValue = "";
    this.secondValue = "";
    this.currentOperator = "";
    this.result = null;
    this.isSecondValueInput = false;
  }
}
