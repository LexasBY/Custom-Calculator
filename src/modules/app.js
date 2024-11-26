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
} from "./command.js";

// Создаем калькулятор и обработчик команд
const calculator = new Calculator();
const invoker = new CommandInvoker();
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

// Обработка "="
document.getElementById("result").addEventListener("click", () => {
  try {
    const command = new EqualsCommand(calculator);
    const result = invoker.executeCommand(command);

    updateDisplay(result);
  } catch (error) {
    console.error("Ошибка при вычислении:", error.message);
    updateDisplay("Error");
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
