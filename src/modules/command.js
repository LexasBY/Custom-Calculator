export class Command {
  execute() {
    throw new Error("Метод execute() должен быть реализован!");
  }
}

export class InputNumberCommand extends Command {
  constructor(calculator, number) {
    super();
    this.calculator = calculator;
    this.number = number;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.calculator.appendNumber(this.number);
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
  }
}

export class SetOperationCommand extends Command {
  constructor(calculator, operator) {
    super();
    this.calculator = calculator;
    this.operator = operator;
  }

  execute() {
    this.previousOperator = this.calculator.currentOperator;
    this.calculator.setOperation(this.operator);
  }
  undo() {
    this.calculator.currentOperator = this.previousOperator;
  }
}

export class InputDecimalCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    if (this.calculator.isSecondValueInput) {
      if (!this.calculator.secondValue.includes(".")) {
        this.calculator.secondValue += ".";
      }
    } else {
      if (!this.calculator.firstValue.includes(".")) {
        this.calculator.firstValue += ".";
      }
    }
  }
}

export class InputPercentCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.processPercentage();
  }
}

export class InputToggleSignCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.toggleSign();
  }
}
export class EqualsCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.calculate();
  }
}

export class ToggleThemeCommand extends Command {
  constructor(bodyElement, themeToggleElement) {
    super();
    this.body = bodyElement;
    this.themeToggle = themeToggleElement;
  }

  execute() {
    if (this.themeToggle.checked) {
      this.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      this.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }

  undo() {
    console.log("Undo for theme toggle is not supported.");
  }
}
export class MemoryClearCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    this.calculator.clearMemory();
  }
}
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

export class MemoryRecallCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
  }

  execute() {
    return this.calculator.recallMemory();
  }
}

export class SquareCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.calculator.square();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
  }
}
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

export class PowerCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousState = {
      firstValue: null,
      secondValue: null,
      result: null,
      operator: null,
    };
  }

  execute() {
    this.previousState = {
      firstValue: this.calculator.firstValue,
      secondValue: this.calculator.secondValue,
      result: this.calculator.result,
      operator: this.calculator.currentOperator,
    };
    if (this.calculator.currentOperator === "^") {
      this.calculator.power();
    } else {
      throw new Error("Operator not set to ^");
    }
  }

  undo() {
    this.calculator.firstValue = this.previousState.firstValue;
    this.calculator.secondValue = this.previousState.secondValue;
    this.calculator.result = this.previousState.result;
    this.calculator.currentOperator = this.previousState.operator;
  }
}

export class PowerOfTenCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
    this.previousResult = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.previousResult = this.calculator.result;

    this.calculator.powerOfTen();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
    this.calculator.result = this.previousResult;
  }
}

export class OneOnXCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
    this.previousResult = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.previousResult = this.calculator.result;

    this.calculator.oneOnX();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
    this.calculator.result = this.previousResult;
  }
}

export class SquareRootCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousValue = null;
    this.previousResult = null;
  }

  execute() {
    this.previousValue = this.calculator.firstValue;
    this.previousResult = this.calculator.result;

    this.calculator.squareRoot();
  }

  undo() {
    this.calculator.firstValue = this.previousValue;
    this.calculator.result = this.previousResult;
  }
}

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

export class NthRootCommand extends Command {
  constructor(calculator) {
    super();
    this.calculator = calculator;
    this.previousState = {
      firstValue: null,
      secondValue: null,
      result: null,
    };
  }

  execute() {
    this.previousState = {
      firstValue: this.calculator.firstValue,
      secondValue: this.calculator.secondValue,
      result: this.calculator.result,
    };

    this.calculator.nthRoot();
  }

  undo() {
    this.calculator.firstValue = this.previousState.firstValue;
    this.calculator.secondValue = this.previousState.secondValue;
    this.calculator.result = this.previousState.result;
  }
}

export class FactorialCommand extends Command {
    constructor(calculator) {
      super();
      this.calculator = calculator;
      this.previousValue = null;
      this.previousResult = null;
    }
  
    execute() {
      this.previousValue = this.calculator.firstValue;
      this.previousResult = this.calculator.result;
  
      this.calculator.factorial(); 
    }
  
    undo() {
      this.calculator.firstValue = this.previousValue;
      this.calculator.result = this.previousResult;
    }
  }
  
