import { Command } from "./command.js";

export class CubeCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.calculator.cube();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
  }
}
