import { Command } from "./command.js";

export class MemorySubtractCommand extends Command {
  constructor(calculator, value) {
    super();
    this.calculator = calculator;
    this.value = value;
  }

  execute() {
    this.calculator.subtractFromMemory(this.value);
  }

  undo() {
    this.calculator.addToMemory(this.value);
  }
}
