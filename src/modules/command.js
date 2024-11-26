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
    this.calculator.appendNumber(this.number);
  }
}

export class SetOperationCommand extends Command {
  constructor(calculator, operator) {
    super();
    this.calculator = calculator;
    this.operator = operator;
  }

  execute() {
    this.calculator.setOperation(this.operator);
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
}
