import { Command } from "./command.js";

export class InputDecimalCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    if (this.calculator.isSecondValueInput) {
      if (!this.calculator.secondValue.includes(".")) {
        this.calculator.secondValue += ".";
      }
    } else {
      if (!this.calculator.firstValue.includes(".")) {
        this.calculator.firstValue += ".";
      }
    }
  }
}
