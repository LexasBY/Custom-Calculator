# Custom-Calculator

## 1. Task

[Google Docs Task Description](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

## 2. How to Run the App

### For Development:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run start
   ```

   The application will be available at [http://localhost:8080](http://localhost:8080).

### For Production Build:

1. Build the project:

   ```bash
   npm run build
   ```

   All build files will be located in the `dist` folder.

### 3. Project Structure

```
custom-calculator/
│
├── src/                   # Main folder with source files
│   ├── index.js           # Main entry point of the application
│   ├── index.html         # HTML template
│   ├── style.css          # Main stylesheet
│   ├── __tests__          # Folder with tests
│   ├── modules/           # Folder with application modules
│   │   ├── app.js         # Manages application events
│   │   ├── calculator.js  # Core calculator logic
│   │   ├── command.js     # Implementation of the Command pattern
│   │   └── invoker.js     # Logic for handling commands
│
├── dist/                  # Folder for production build
│   ├── index.html         # Optimized HTML for production
│   └── main.[hash].js     # Optimized JavaScript file
│
├── .husky/                # Pre-commit hook configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc            # Prettier configuration
├── webpack.config.js      # Webpack configuration
├── package.json           # Project configuration
├── jest.config.js         # Jest configuration
├── README.md              # Documentation
├── node_modules/          # Project dependencies

```

### 4. Code Quality

The application is set up to use **ESLint** and **Prettier** for code linting and formatting.

#### How to Run Code Checks:

- Linting with ESLint:

  ```bash
  npm run lint
  ```

- Formatting code with Prettier:

  ```bash
  npm run format
  ```

#### Pre-commit Hook:

The project is configured with a pre-commit hook using **Husky** and **lint-staged**, which automatically checks the code with ESLint. If there are errors, the commit will not be completed.

### 5. Deployment

The application has been successfully deployed using GitHub Pages and is available at the following address: https://lexasby.github.io/Custom-Calculator/.

---

## 1. Задача

[Описание задачи в Google Docs](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view)

## 2. Как запустить приложение

### Для разработки:

1. Установите зависимости:

   ```bash
   npm install
   ```

2. Запустите dev-сервер для разработки:

   ```bash
   npm run start
   ```

   Приложение будет доступно по адресу [http://localhost:8080](http://localhost:8080).

### Для production сборки:

1. Соберите проект:

   ```bash
   npm run build
   ```

   Все файлы сборки будут находиться в папке `dist`.

### 3. Структура проекта

```
custom-calculator/
│
├── src/                   # Основная папка с исходными файлами
│   ├── index.js           # Главная точка входа приложения
│   ├── index.html         # HTML-шаблон
│   ├── style.css          # Основной файл стилей
│   ├── __tests__          # Папка с файлами тестов
│   ├── modules/           # Папка с модулями приложения
│   │   ├── app.js         # Управление событиями приложения
│   │   ├── calculator.js  # Основная логика работы калькулятора
│   │   ├── command.js     # Реализация паттерна Command
│   │   └── invoker.js     # Логика обработки команд
│
├── dist/                  # Папка для production сборки
│   ├── index.html         # Оптимизированный HTML-файл
│   └── main.[hash].js     # Оптимизированный JavaScript-файл
│
├── .husky/                # Конфигурация pre-commit hook
├── .eslintrc.json         # Конфигурация ESLint
├── .prettierrc            # Конфигурация Prettier
├── webpack.config.js      # Конфигурация Webpack
├── package.json           # Конфигурация проекта
├── jest.config.js         # Конфигурация Jest
├── README.md              # Документация
├── node_modules/          # Зависимости проекта

```

### 4. Качество кода

Приложение настроено на использование **ESLint** и **Prettier** для линтинга и форматирования кода.

#### Как запустить проверку кода:

- Линтинг с помощью ESLint:

  ```bash
  npm run lint
  ```

- Форматирование кода с помощью Prettier:

  ```bash
  npm run format
  ```

#### Pre-commit hook:

В проект настроен pre-commit hook с помощью **Husky** и **lint-staged**, который автоматически проверяет код с помощью ESLint. Если есть ошибки, коммит не будет выполнен.

### 5. Деплой

Приложение было задеплоено с использованием GitHub Pages и доступно по следующему адресу: https://lexasby.github.io/Custom-Calculator/.
