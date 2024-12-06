import { Command } from "./command.js";

export class SquareRootCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
    this.previousResult = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.previousResult = this.calculator.result;

    this.calculator.squareRoot();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
    this.calculator.result = this.previousResult;
  }
}
