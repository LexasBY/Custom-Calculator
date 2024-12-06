import { Command } from "./command.js";

export class MemoryClearCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousMemory = null;
  }

  execute() {
    this.previousMemory = this.calculator.memory;
    this.calculator.clearMemory();
  }
  undo() {
    this.calculator.memory = this.previousMemory;
  }
}
