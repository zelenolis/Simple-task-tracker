# Simple task tracker
Simple task tracker written in Angular

Deploy: [link](https://simpletracker.netlify.app/)

Screenshots:

![screenshot1](https://github.com/zelenolis/Simple-task-tracker/blob/dev/simple_task/src/assets/screenshots.jpg?raw=true)

### Task:
Creating a simple task tracker.
Stack: Angular 17, RxJs, NgRx, Typescript, Angular Material, SCSS.

### Features:
- creating task (with title, name, priority, status, executor(s) and deadline fields),
- updating task (status and executos(s) can be changed),
- task's detailed info (on a separate page),
- iplemented an imitation of receiving data from the server (local storage is used as a server),
- login page and guards are implemented (for simplicity, fields are not checked and an inputed data is not saved anywhere),
- logout also clears all local storage's data.

### Development server
- clone the repository,
- select target folder with: `cd simple_task`,
- install dependencies running: `npm i --legacy-peer-deps`,
- run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Build
- clone the repository
- select target with: `cd simple_task`,
- install dependencies running: `npm i --legacy-peer-deps`,
- run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
