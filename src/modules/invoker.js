export class CommandInvoker {
  constructor() {
    this.history = [];
  }

  executeCommand(command) {
    const result = command.execute();
    this.history.push(command);
    return result;
  }
}
