# arrow next
![tests](https://github.com/substrate-system/arrow-next/actions/workflows/nodejs.yml/badge.svg)
[![types](https://img.shields.io/npm/types/@substrate-system/arrow-next?style=flat-square)](README.md)
[![module](https://img.shields.io/badge/module-ESM%2FCJS-blue?style=flat-square)](README.md)
[![install size](https://packagephobia.com/badge?p=@substrate-system/arrow-next)](https://packagephobia.com/result?p=@substrate-system/arrow-next)
[![dependencies](https://img.shields.io/badge/dependencies-zero-brightgreen.svg?style=flat-square)](package.json)
[![semantic versioning](https://img.shields.io/badge/semver-2.0.0-blue?logo=semver&style=flat-square)](https://semver.org/)
[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

A next button icon.

[See a live demo](https://substrate-system.github.io/arrow-next/)

<!-- toc -->

- [install](#install)
- [API](#api)
  * [ESM](#esm)
  * [Common JS](#common-js)
- [CSS](#css)
  * [Import CSS](#import-css)
- [use](#use)
  * [JS](#js)
  * [HTML](#html)
  * [pre-built](#pre-built)

<!-- tocstop -->

## install

```sh
npm i -S @substrate-system/arrow-next
```

## API

> [!IMPORTANT]  
> This depends on a CSS class `visually-hidden`.
> See [Accessible Icon Buttons](https://www.sarasoueidan.com/blog/accessible-icon-buttons/).
> Install `@substrate-system/css-util` for help with this. 

This exposes ESM and common JS via [package.json `exports` field](https://nodejs.org/api/packages.html#exports).

### ESM
```js
import '@substrate-system/arrow-next'
```

### Common JS
```js
require('@substrate-system/arrow-next')
```

## CSS

### `@substrate-system/css-util/arrow`

> [!TIP]
> Use `@substrate-system/css-util/arrow` to deduplicate
> the CSS with the `@substrate-system/arrow-prev` component.

This will deduplicate CSS that is shared with [@substrate-system/arrow-next](https://github.com/substrate-system/arrow-next).

```js
import '@substrate-system/css-util/arrow'
```

### `.visually-hidden` class
This depends on a CSS definition for `.visually-hidden`. Install `@substrate-system/css-util`:

```sh
npm i -S @substrate-system/css-util
```

### Import CSS

```js
import '@substrate-system/css-util/visually-hidden'
import '@substrate-system/arrow-next/css'
```

Or minified:
```js
import '@substrate-system/css-util/min/visually-hidden'
import '@substrate-system/arrow-next/css/min'
```

## use
This calls the global function `customElements.define`. Just import, then use
the tag in your HTML.

### JS
```js
import '@substrate-system/arrow-next'
```

### HTML
```html
<div>
    <arrow-next></arrow-next>
</div>
```

### pre-built
This package exposes minified JS and CSS files too. Copy them to a location that is
accessible to your web server, then link to them in HTML.

#### copy
```sh
cp ./node_modules/@substrate-system/arrow-next/dist/index.min.js ./public/arrow-next.min.js
cp ./node_modules/@substrate-system/arrow-next/dist/style.min.css ./public/arrow-next.css
```

#### HTML
```html
<head>
    <link rel="stylesheet" href="./arrow-next.css">
</head>
<body>
    <!-- ... -->
    <script type="module" src="./arrow-next.min.js"></script>
</body>
```
