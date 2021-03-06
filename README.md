# Contentful App Vue Starter Template

Build a Contentful App using Vue3 + Vite2. ๐

![top-language](https://img.shields.io/github/languages/top/bcakmakoglu/contentful-vitesse-starter)
[![dependencies Status](https://status.david-dm.org/gh/bcakmakoglu/contentful-vitesse-starter.svg)](https://david-dm.org/bcakmakoglu/contentful-vitesse-starter)
[![devDependencies Status](https://status.david-dm.org/gh/bcakmakoglu/contentful-vitesse-starter.svg?type=dev)](https://david-dm.org/bcakmakoglu/contentful-vitesse-starter?type=dev)
![vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/bcakmakoglu/contentful-vitesse-starter)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/bcakmakoglu/contentful-vitesse-starter)
![GitHub last commit](https://img.shields.io/github/last-commit/bcakmakoglu/contentful-vitesse-starter)

## Table of Contents

* [๐ฅฆ Features](#-features)

* [๐ฆ Pre-packed](#-pre-packed)

* [โ๏ธ Checklist](#-checklist)

* [๐  Setup](#-setup)

* [๐งช Development](#-development)

* [๐ฎ Getting Started](#-getting-started)

## ๐ฅฆ Features

- โก๏ธ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- ๐งฒ [Components auto importing](./src/components)

- ๐ [State Management via Pinia](https://pinia.esm.dev/)

- ๐จ [Windi CSS](https://github.com/windicss/windicss) - next generation utility-first CSS framework

- ๐ [Use icons from any icon sets, with no compromise](https://github.com/antfu/unplugin-icons)

- ๐ฅ Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)

- ๐ฅ [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- ๐จ Server-side generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- ๐ฆ Critical CSS via [critters](https://github.com/GoogleChromeLabs/critters)

- ๐ฆพ TypeScript, of course

## ๐ฆ Pre-packed

### UI Frameworks

- [Windi CSS](https://github.com/windicss/windicss) (On-demand [TailwindCSS](https://tailwindcss.com/)) - lighter and faster, with a bunch of additional features!
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [๐Icรดnes](https://icones.netlify.app/)
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as Vue components

### Plugins

- [Pinia](https://pinia.esm.dev) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - Windi CSS Integration
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - Server-side generation
  - [critters](https://github.com/GoogleChromeLabs/critters) - Critical CSS
- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE support
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - Icon inline display and autocomplete
  - [Windi CSS Intellisense](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - IDE support for Windi CSS
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## โ๏ธ Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] [Setup Contentful App](https://www.contentful.com/developers/docs/extensibility/app-framework/tutorial/#embed-your-app-in-the-contentful-web-app)
- [ ] Rename `name` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Clean up the READMEs

## ๐  Setup

```bash
# create a new project
$ npx degit bcakmakoglu/contentful-vitesse-starter my-app
# or just clone the repo
$ git clone https://github.com/bcakmakoglu/contentful-vitesse-starter.git my-app

# you're free to use the package manager of your choosing
$ pnpm install
```

## ๐งช Development

After setting up your Contentful App config on the Contentful Web Application,
you can start development. 
For instructions on setting up the App check the [documentation](https://www.contentful.com/developers/docs/extensibility/app-framework/tutorial/#embed-your-app-in-the-contentful-web-app).
```bash
# start (dev)
$ pnpm dev

# build app
$ pnpm build

# serve app from dist dir
$ pnpm serve

# upload dist dir to contentful
$ pnpm upload
```

## ๐ฎ Getting Started

[In the components directory](./src/components), 
you can find an example component for each location a Contentful App can have.
They serve as a starting point to build your app.

Each of these components will be "routed" to depending on the current
location of the app, i.e. you do not have to implement any more logic for
an app to be served at its proper location.
To see how it works check the [App component](./src/App.vue).
