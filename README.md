# Type-safe Forms for Angular 📝

> Because `FormControl<T>` is more awesome than `FormControl`!

[![NPM version](http://img.shields.io/npm/v/ngx-typesafe-forms.svg?style=flat-square)](https://www.npmjs.com/package/ngx-typesafe-forms)
[![NPM downloads](http://img.shields.io/npm/dm/ngx-typesafe-forms.svg?style=flat-square)](https://www.npmjs.com/package/ngx-typesafe-forms)
[![Build status](https://img.shields.io/travis/dirkluijk/ngx-typesafe-forms.svg?style=flat-square)](https://travis-ci.org/dirkluijk/ngx-typesafe-forms)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

## Overview

### What? 🤔

This is a small library to make Angular Forms more type-safe!

* Type-safe versions of `FormControl`, `FormGroup`, `FormArray` and `ControlValueAccessor`
* 100% compatible with `@angular/forms` and existing Angular libraries!
* Easy to use!
* Additional read-only properties `value$`, `valid$`, `pristine$`, `error$`, `enabled$` and more.
* A default implementation for `ControlValueAccessor`
* Type-safe validators

### Why? 🤷‍♂️

Angular Forms are not very type-safe. They accept any type of value.
This library makes your code more type-safe. More type-safety means smaller risk for bugs!

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

```typescript
import { FormControl, FormGroup } from 'ngx-typesafe-forms';

@Component({ /* ... */ })
class YourComponent {
  myControl = new FormControl<string>();
  
  myFormGroup = new FormGroup<Person>({
    name: new FormControl(),
    birthDate: new FormControl(new Date())
  });
  
  changeDate(): void {
    this.myControl.setValue(123); // error: this will not compile!
    this.myFormGroup.controls.birthDate.setValue('foo'); // error: this will not compile!
    
    this.myControl.setValue('Foo'); // yes, this will!
    this.myFormGroup.controls.birthDate.setValue(new Date()); // yes, this will!
  }
}
```

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
* `error$`
* `enabled$`
* `pristine$`
* `valid$`
* `status$`

Additionally, we also provide their counterparts:

* `disabled$`
* `dirty$`
* `invalid$`

NOTE: all of these streams also include the current (initial) values.

## FAQ

### How to deal with validation and null values?

If you want to assume that form values are always valid, just use `FormControl<Foo>`.

However, form values can also be null (if invalid). If you want to use this more strictly, you can use `FormControl<Foo | null>`
or even `FormGroup<Invalidated<Foo>>` (which marks all properties as nullable).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/dirkluijk"><img src="https://avatars2.githubusercontent.com/u/2102973?v=4" width="100px;" alt="Dirk Luijk"/><br /><sub><b>Dirk Luijk</b></sub></a><br /><a href="https://github.com/dirkluijk/ngx-typesafe-forms/commits?author=dirkluijk" title="Code">💻</a> <a href="https://github.com/dirkluijk/ngx-typesafe-forms/commits?author=dirkluijk" title="Documentation">📖</a></td>
    <td align="center"><a href="https://craftsmen.nl/"><img src="https://avatars0.githubusercontent.com/u/16564855?v=4" width="100px;" alt="Daan Scheerens"/><br /><sub><b>Daan Scheerens</b></sub></a><br /><a href="#ideas-dscheerens" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
