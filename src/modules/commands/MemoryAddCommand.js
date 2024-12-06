import { Command } from "./command.js";

export class MemoryAddCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.addToMemory(this.value);
  }
  undo() {
    this.calculator.subtractFromMemory(this.value);
  }
}
