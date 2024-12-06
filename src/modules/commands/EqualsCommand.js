import { Command } from "./command.js";

export class EqualsCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.calculate();
  }
}
