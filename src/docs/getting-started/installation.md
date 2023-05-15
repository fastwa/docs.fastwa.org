---
title: Getting started
---

# Installation

System Requirements:
* [Node.js 16.8](https://nodejs.org/) or later.
* macOS, Windows (includind WSL), and Linux are supported.

## Automatic Installation
We recommend creating a new Fastwa app using `create-fastwa-app`, which sets up everything automatically for you. To create a project, run:

```bash
npx create-fastwa-app@latest
```

## Manual Installation

To manually create a new Fastwa app, install the required packages:

```bash
npm install @fastwa/core @fastwa/common @fastwa/client
```

These scripts refer to the different stages of developing an application:

* `dev`: start fastwa in development mode.
* `build`: build the application for production usage.
* `start`: start a fastwa production server.
* `lint`: set up fastwa built-in ESLint configuration.