import { Command } from "./command.js";

export class SetOperationCommand extends Command {
  constructor(calculator, operator) {
    super();
    this.calculator = calculator;
    this.operator = operator;
  }

  execute() {
    this.previousOperator = this.calculator.currentOperator;
    this.calculator.setOperation(this.operator);
  }
  undo() {
    this.calculator.currentOperator = this.previousOperator;
  }
}
