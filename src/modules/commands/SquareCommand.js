import { Command } from "./command.js";

export class SquareCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.calculator.square();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
  }
}
