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
      super(); // Вызываем конструктор родителя
      this.body = bodyElement; // Элемент <body>, где будет применяться тема
      this.themeToggle = themeToggleElement; // Сам переключатель
    }
  
    execute() {
        console.log('Текущий статус переключателя:', this.themeToggle.checked);
      if (this.themeToggle.checked) {
        // Устанавливаем тёмную тему
        this.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        // Устанавливаем светлую тему
        this.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
      }
    }
  }
