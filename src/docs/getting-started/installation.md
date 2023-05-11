---
title: Getting started
---

### Installation

System Requirements:
* [Node.js](https://nodejs.org/)
* macOS, Windows (includind WSL), and Linux are supported.

### Automatic Installation
```
npm i -g @fastwa/cli
fastwa new project-name
```

### Manual Installation

To manually create a new Fastwa app, install the required packages:

```bash
npm install @fastwa/core @fastwa/common @fastwa/client
```

These scripts refer to the different stages of developing an application:

* `dev`: runs next dev to start Next.js in development mode.
* `build`: runs next build to build the application for production usage.
* `start`: runs next start to start a Next.js production server.
* `lint`: runs next lint to set up Next.js' built-in ESLint configuration.