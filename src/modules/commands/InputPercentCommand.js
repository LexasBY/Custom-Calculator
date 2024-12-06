import { Command } from "./command.js";

export class InputPercentCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.processPercentage();
  }
}
