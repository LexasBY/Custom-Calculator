import { Command } from "./command.js";

export class MemoryRecallCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.calculator.firstValue = this.calculator.recallMemory();
    return this.calculator.firstValue;
  }
  undo() {
    this.calculator.firstValue = this.previousValue;
  }
}
