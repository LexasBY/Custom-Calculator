import { Command } from "./command.js";

export class NthRootCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousState = {
      firstValue: null,
      secondValue: null,
      result: null,
    };
  }

  execute() {
    this.previousState = {
      firstValue: this.calculator.firstValue,
      secondValue: this.calculator.secondValue,
      result: this.calculator.result,
    };

    this.calculator.nthRoot();
  }

  undo() {
    this.calculator.firstValue = this.previousState.firstValue;
    this.calculator.secondValue = this.previousState.secondValue;
    this.calculator.result = this.previousState.result;
  }
}
