import { Command } from "./command.js";

export class CubeRootCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
    this.previousResult = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.previousResult = this.calculator.result;

    this.calculator.cubeRoot();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
    this.calculator.result = this.previousResult;
  }
}
