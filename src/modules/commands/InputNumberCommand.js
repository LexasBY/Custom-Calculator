import { Command } from "./command.js";

export class InputNumberCommand extends Command {
  constructor(calculator, number) {
    super();
    this.calculator = calculator;
    this.number = number;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.calculator.appendNumber(this.number);
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
  }
}
