# Cloverpad - Web Configurator

This repository contains a web configurator application for the [Cloverpad](https://github.com/Cloverpad), a 3-key keypad for osu! themed after [MORE MORE JUMP!](https://www.sekaipedia.org/wiki/MORE_MORE_JUMP!) from Project Sekai.

## Usage

**WIP**

## Setting Up Development Environment

The web configurator is a NodeJS project. Make sure you have the following things installed:

- NodeJS LTS (tested on v20.11.0)
- [A browser that supports Web Serial](https://caniuse.com/web-serial)
  - e.g. Google Chrome

Clone this repository including submodules:

```bash
git clone --recurse-submodules https://github.com/Cloverpad/cloverpad-configurator-web.git
```

Install Node dependencies:

```bash
npm install
```

Then use one of the following scripts to manage the app:

```bash
# Run development version of the app
# This will host the app at https://localhost:5173
npm run dev

# Build the production version of the app
npm run build

# Preview the production version of the app (requires building first)
# This will host the app at https://localhost:4173
npm run preview
```

There are also a few additional scripts to aid with development:

```bash
# Generate code from Protobuf Definitions
npm run generate-protobuf

# Generate icons for PWA assets
npm run generate-pwa-assets
```
