import { Calculator } from "./calculator.js";
import { CommandInvoker } from "./invoker.js";
import {
  InputNumberCommand,
  SetOperationCommand,
  EqualsCommand,
  ToggleThemeCommand,
  InputDecimalCommand,
  InputPercentCommand,
  InputToggleSignCommand,
  MemoryClearCommand,
  MemoryAddCommand,
  MemorySubtractCommand,
  MemoryRecallCommand,
  SquareCommand,
  CubeCommand,
  PowerCommand,
  PowerOfTenCommand,
  OneOnXCommand,
  SquareRootCommand,
  CubeRootCommand,
  NthRootCommand,
  FactorialCommand,
} from "./command.js";

// калькулятор и обработчик команд
const calculator = new Calculator();
const invoker = new CommandInvoker(updateDisplay);
const display = document.querySelector(".display");

function updateDisplay(value) {
  display.value = value || "0";
}

// Обработка ввода чисел
document.querySelectorAll(".number").forEach((button) => {
  button.addEventListener("click", () => {
    const command = new InputNumberCommand(calculator, button.textContent);
    invoker.executeCommand(command);
    updateDisplay(
      calculator.isSecondValueInput
        ? calculator.secondValue
        : calculator.firstValue
    );
  });
});

// Обработка выбора операции
document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", () => {
    try {
      const command = new SetOperationCommand(calculator, button.textContent);
      invoker.executeCommand(command);

      const displayValue = calculator.firstValue;
      updateDisplay(displayValue);
    } catch (error) {
      console.error("Ошибка при выборе операции:", error.message);
      updateDisplay("Error");
    }
  });
});

// Обработка процентов
document.getElementById("percent").addEventListener("click", () => {
  const command = new InputPercentCommand(calculator);
  invoker.executeCommand(command);
  const displayValue = calculator.isSecondValueInput
    ? calculator.secondValue
    : calculator.firstValue;
  updateDisplay(displayValue);
});

// Обработка смены знака
document.getElementById("toggle-sign").addEventListener("click", () => {
  const command = new InputToggleSignCommand(calculator);
  invoker.executeCommand(command);
  const displayValue = calculator.isSecondValueInput
    ? calculator.secondValue
    : calculator.firstValue;
  updateDisplay(displayValue);
});

// Обработка возведения в квадрат

document.getElementById("square").addEventListener("click", () => {
  const command = new SquareCommand(calculator);
  try {
    invoker.executeCommand(command);
  } catch (error) {
    console.error(error.message);
    display.value = "Error";
  }
});

// Обработка возведения в куб

document.getElementById("сube").addEventListener("click", () => {
  const command = new CubeCommand(calculator);
  try {
    invoker.executeCommand(command);
  } catch (error) {
    console.error(error.message);
    display.value = "Error";
  }
});

// Обработка x в степени y

document.getElementById("power").addEventListener("click", () => {
  const command = new SetOperationCommand(calculator, "^");
  invoker.executeCommand(command);
  updateDisplay(calculator.firstValue);
});

// Обработка 10 в степени x

document.getElementById("powerOfTen").addEventListener("click", () => {
  const command = new PowerOfTenCommand(calculator);
  try {
    invoker.executeCommand(command);
    updateDisplay(calculator.firstValue);
  } catch (error) {
    console.error(error.message);
    updateDisplay("Error");
  }
});

// Обработка 1/x

document.getElementById("one-on-x").addEventListener("click", () => {
  const command = new OneOnXCommand(calculator);
  try {
    invoker.executeCommand(command);
    updateDisplay(calculator.firstValue);
  } catch (error) {
    console.error(error.message);
    updateDisplay("Error");
  }
});

// Обработка корня квадратного
document.getElementById("square-root").addEventListener("click", () => {
  const command = new SquareRootCommand(calculator);
  try {
    invoker.executeCommand(command);
    updateDisplay(calculator.firstValue);
  } catch (error) {
    console.error(error.message);
    updateDisplay("Error");
  }
});
// Обработка корня кубического
document.getElementById("cube-root").addEventListener("click", () => {
  const command = new CubeRootCommand(calculator);
  try {
    invoker.executeCommand(command);
    updateDisplay(calculator.firstValue);
  } catch (error) {
    console.error(error.message);
    updateDisplay("Error");
  }
});

// Обработка корня степени y
document.getElementById("nth-root").addEventListener("click", () => {
  const command = new SetOperationCommand(calculator, "root");
  invoker.executeCommand(command);
  updateDisplay(calculator.firstValue);
});

// Обработка факториала

document.getElementById("factorial").addEventListener("click", () => {
  const command = new FactorialCommand(calculator);
  try {
    invoker.executeCommand(command);
    updateDisplay(calculator.firstValue);
  } catch (error) {
    console.error(error.message);
    updateDisplay("Error");
  }
});

// Обработка "="
document.getElementById("result").addEventListener("click", () => {
  if (calculator.currentOperator === "root") {
    const command = new NthRootCommand(calculator);
    try {
      invoker.executeCommand(command);
      updateDisplay(calculator.result);
    } catch (error) {
      console.error(error.message);
      updateDisplay("Error");
    }
  } else if (calculator.currentOperator === "^") {
    const command = new PowerCommand(calculator);
    try {
      invoker.executeCommand(command);
      updateDisplay(calculator.result);
    } catch (error) {
      console.error(error.message);
      updateDisplay("Error");
    }
  } else {
    const command = new EqualsCommand(calculator);
    try {
      invoker.executeCommand(command);
      updateDisplay(calculator.result);
    } catch (error) {
      console.error(error.message);
      updateDisplay("Error");
    }
  }
});

// Обработка сброса
document.getElementById("clear").addEventListener("click", () => {
  calculator.reset();
  updateDisplay();
});

// Обработка переключения темы
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-theme");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  const command = new ToggleThemeCommand(body, themeToggle);
  invoker.executeCommand(command);
});

// Обработка ввода точки
commaButton.addEventListener("click", () => {
  const command = new InputDecimalCommand(calculator);
  invoker.executeCommand(command);
  updateDisplay(
    calculator.isSecondValueInput
      ? calculator.secondValue
      : calculator.firstValue
  );
});

// Обработка операций с памятью

document.getElementById("mc").addEventListener("click", () => {
  const command = new MemoryClearCommand(calculator);
  invoker.executeCommand(command);
  console.log("Memory cleared");
});

document.getElementById("m-plus").addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const command = new MemoryAddCommand(calculator, currentValue);
    invoker.executeCommand(command);
    console.log(`Added to memory: ${currentValue}`);
  }
});

document.getElementById("m-minus").addEventListener("click", () => {
  const currentValue = parseFloat(display.value);
  if (!isNaN(currentValue)) {
    const command = new MemorySubtractCommand(calculator, currentValue);
    invoker.executeCommand(command);
    console.log(`Subtracted from memory: ${currentValue}`);
  }
});

document.getElementById("mr").addEventListener("click", () => {
  const command = new MemoryRecallCommand(calculator);
  const memoryValue = invoker.executeCommand(command);
  display.value = memoryValue;
  console.log(`Recalled from memory: ${memoryValue}`);
});

document.getElementById("undo").addEventListener("click", () => {
  invoker.undo();
});
