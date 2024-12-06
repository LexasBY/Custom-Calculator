import { Command } from "./command.js";

export class PowerCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousState = {
      firstValue: null,
      secondValue: null,
      result: null,
      operator: null,
    };
  }

  execute() {
    this.previousState = {
      firstValue: this.calculator.firstValue,
      secondValue: this.calculator.secondValue,
      result: this.calculator.result,
      operator: this.calculator.currentOperator,
    };
    if (this.calculator.currentOperator === "^") {
      this.calculator.power();
    } else {
      throw new Error("Operator not set to ^");
    }
  }

  undo() {
    this.calculator.firstValue = this.previousState.firstValue;
    this.calculator.secondValue = this.previousState.secondValue;
    this.calculator.result = this.previousState.result;
    this.calculator.currentOperator = this.previousState.operator;
  }
}
