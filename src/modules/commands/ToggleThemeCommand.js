import { Command } from "./command.js";

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
