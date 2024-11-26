export class Calculator {
  constructor() {
    this.firstValue = "";
    this.secondValue = "";
    this.currentOperator = "";
    this.result = null;
    this.isSecondValueInput = false;
    this.finish = false;
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
        this.result = num1 + num2;
        break;
      case "-":
        this.result = num1 - num2;
        break;
      case "×":
        this.result = num1 * num2;
        break;
      case "÷":
        if (num2 === 0) {
          this.result = "Error"; 
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
  
      if (['+', '-'].includes(this.currentOperator)) {
        this.secondValue = (num1 * num2 / 100).toString();
      } else if (['×', '÷'].includes(this.currentOperator)) {
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
  


  reset() {
    this.firstValue = "";
    this.secondValue = "";
    this.currentOperator = "";
    this.result = null;
    this.isSecondValueInput = false;
  }
}
