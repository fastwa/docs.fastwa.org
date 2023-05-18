---
title: Getting started
---

# Installation
If you have questions about anything related to Fastwa, see [Join our Community](/#join-our-community) page.

**System Requirements:**
* [Node.js 16.8](https://nodejs.org/) or later.
* macOS, Windows (includind WSL), and Linux are supported.

## Automatic Installation
We recommend creating a new Fastwa app using `create-fastwa-app`, which sets up everything automatically for you. To create a project, run:

```bash
npx create-fastwa-app@latest
```

The project directory will be created, node modules and a few other boilerplate files will be installed, and a `src/` directory will be created and populated with several core files.

Here's a brief overview of those core files:

| Filename            | Description                                                                                                         |
|---------------------|---------------------------------------------------------------------------------------------------------------------|
| `app.controller.ts` | A basic controller with a single command.                                                                           |
| `app.module.ts`     | The root module of the application.                                                                                 |
| `app.service.ts`    | A basic service with a single method.                                                                               |
| `main.ts`           | The entry file of the application which uses the core function `WAFactory` to create a Fastwa application instance. |

## Running the application
Once the installation process is complete, you can run the following command at your command prompt to start the application:

```bash
npm run start:dev
```

This command will watch your files, automatically recompiling and reloading the app.
