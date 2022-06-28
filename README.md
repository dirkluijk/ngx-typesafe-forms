# Type-safe Forms for Angular 📝

> Because `FormControl<T>` is more awesome than `FormControl`!

[![NPM version](http://img.shields.io/npm/v/ngx-typesafe-forms.svg?style=flat-square)](https://www.npmjs.com/package/ngx-typesafe-forms)
[![NPM downloads](http://img.shields.io/npm/dm/ngx-typesafe-forms.svg?style=flat-square)](https://www.npmjs.com/package/ngx-typesafe-forms)
![Build status](https://github.com/dirkluijk/ngx-typesafe-forms/actions/workflows/main.yml/badge.svg?branch=master)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

## Using Angular 14?

If you are using Angular 14 or higher, there is no need for using this library. 
Instead, we recommend you to use the [default Angular type-safe forms](https://angular.io/guide/typed-forms) in that case.

If you still want to use some of the additional features mentioned below, we recommend version `2.0` of this library, which is compatible with Angular 14.

| Angular version  | Version |
|------------------|--------:|
| Angular 14       | [`2.x.x`](https://github.com/dirkluijk/ngx-typesafe-forms/tree/v2.0.0) |
| Angular 13       | [`1.6.x`](https://github.com/dirkluijk/ngx-typesafe-forms/tree/v1.6.1) |
| Angular 12       | [`1.5.x`](https://github.com/dirkluijk/ngx-typesafe-forms/tree/v1.5.2) |
| Angular 11       | [`1.4.x`](https://github.com/dirkluijk/ngx-typesafe-forms/tree/v1.4.3) |
| Angular 10 or lower | [`1.3.x`](https://github.com/dirkluijk/ngx-typesafe-forms/tree/v1.3.1) |

## Overview

### What? 🤔

A small library to make Angular Forms more type-safe!

* Type-safe versions of `FormControl`, `FormGroup`, `FormArray` and `ControlValueAccessor`
* 100% compatible with `@angular/forms` and existing Angular libraries!
* Easy to use!
* Additional read-only properties `value$`, `valid$`, `pristine$`, `errors$`, `enabled$` and more.
* A default implementation for `ControlValueAccessor`
* Type-safe validators

### Why? 🤷‍♂️

Angular Forms are not very type-safe (at least, up until Angular 13). 
This library makes your form code more type-safe. More type-safety means smaller risks for bugs!

## Installation 🌩

##### npm

```
npm install ngx-typesafe-forms
```

##### yarn

```
yarn add ngx-typesafe-forms
```

## Usage 🕹

### Basic example

Just import your `FormControl`, `FormGroup`, `FormArray` and `ControlValueAccessor`
from `ngx-typesafe-forms` instead of `@angular/forms` and you are done!

### Additional reactive properties

Besides the type-safety, we also provide additional reactive properties.

```typescript
const myControl = new FormControl<string>('bar');

// subscribe to all values, including the existing value!
myControl.value$.subscribe((value) => {
  /* ... */
});

// subscribe to validity changes, including the existing valid state!
myControl.valid$.subscribe((valid) => {
  /* ... */
});
```

The recommended properties are:

* `value$`
* `errors$`
* `enabled$`
* `pristine$`
* `valid$`
* `status$`
* `validValue$`
* `rawValue$`

Additionally, we also provide some of their counterparts:

* `disabled$`
* `dirty$`
* `invalid$`

NOTE: all of these streams also include the current (initial) values.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/dirkluijk"><img src="https://avatars2.githubusercontent.com/u/2102973?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dirk Luijk</b></sub></a><br /><a href="https://github.com/dirkluijk/ngx-typesafe-forms/commits?author=dirkluijk" title="Code">💻</a> <a href="https://github.com/dirkluijk/ngx-typesafe-forms/commits?author=dirkluijk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://craftsmen.nl/"><img src="https://avatars0.githubusercontent.com/u/16564855?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daan Scheerens</b></sub></a><br /><a href="#ideas-dscheerens" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/JurJean"><img src="https://avatars1.githubusercontent.com/u/409761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jur Balledux</b></sub></a><br /><a href="https://github.com/dirkluijk/ngx-typesafe-forms/issues?q=author%3AJurJean" title="Bug reports">🐛</a> <a href="https://github.com/dirkluijk/ngx-typesafe-forms/commits?author=JurJean" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
