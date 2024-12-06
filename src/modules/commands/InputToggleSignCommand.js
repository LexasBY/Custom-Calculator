import { Command } from "./command.js";

export class InputToggleSignCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.toggleSign();
  }
}
