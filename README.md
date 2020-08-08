<div align="center">
  <img src=".config/assets/logo.png?raw=true" width="25%">
</div>

<h1 align="center">@micra/theme-generator-example</h1>

<p align="center">
  <img alt="issues" src="https://img.shields.io/github/issues/micrajs/library-template.svg">
  <img alt="prs" src="https://img.shields.io/github/issues-pr/micrajs/library-template.svg">
</p>

<hr />

## About

This is an example repo of how you can structure and use Micra CLI's theme generator.

## Install dependencies

```sh
yarn
```

## Build theme

```sh
yarn build
```

## Consuming the theme

### TypeScript types

```ts
// Generic TS theme types
import { Theme, ThemeColor } from './variants/types';

// Theme's TS theme type
import { LightTheme } from './variants/light/types';
```

### TypeScript/JavaScript objects

```ts
// Theme object
import { lightTheme } from './variants/light';
```

```js
// Theme object
const { lightTheme } = require('./variants/light');
```

### From your SCSS

```scss
@import './variants/light/LightTheme.css';
```

## Author

- [Olavo Amorim Santos](https://github.com/olavoasantos)
