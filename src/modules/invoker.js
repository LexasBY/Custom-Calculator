export class CommandInvoker {
  constructor(updateDisplay) {
    this.history = [];
    this.updateDisplay = updateDisplay;
  }

  executeCommand(command) {
    const result = command.execute();
    if (command.undo) {
      this.history.push(command);
    }

    console.log(this.history);
    if (command.calculator && this.updateDisplay) {
      this.updateDisplay(
        command.calculator.firstValue || command.calculator.result || 0,
      );
    }

    return result;
  }

  undo() {
    if (this.history.length > 0) {
      const command = this.history.pop();
      command.undo();
      if (command.calculator && this.updateDisplay) {
        this.updateDisplay(
          command.calculator.firstValue || command.calculator.result || 0,
        );
      }
      console.log("Undo executed");
    } else {
      console.log("Nothing to undo");
    }
  }
}
