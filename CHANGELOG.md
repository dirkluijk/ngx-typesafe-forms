# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [2.0.1](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v2.0.0...v2.0.1) (2022-06-28)


### Bug Fixes

* fixed broken rawValue$ stream ([d40e836](https://github.com/dirkluijk/ngx-typesafe-forms/commit/d40e836991ddaecfe991bdaea26aace9a788f1ee))

## [2.0.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.6.1...v2.0.0) (2022-06-28)


### ⚠ BREAKING CHANGES

* Generic types for `FormGroup` and `FormArray` now correspond to the `TControl`
object structure, to align with Angular 14
* Made `ControlValueAccessor` and `DefaultValueAccessor` more strict in terms of null-safety to align with the Angular 14 `nonNullable` option.
* Removed `AbstractValue` in favour of the default Angular abstract class

### Features

* support for Angular 14 ([#55](https://github.com/dirkluijk/ngx-typesafe-forms/issues/55)) ([09619c9](https://github.com/dirkluijk/ngx-typesafe-forms/commit/09619c95089904533dbe1c3ba8af18418303fa47))

### [1.6.1](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.6.0...v1.6.1) (2022-06-21)


### Bug Fixes

* use correct peer dependency for Angular 13 ([eed4ec5](https://github.com/dirkluijk/ngx-typesafe-forms/commit/eed4ec5d5229670f0266f14d02c64762f5f164b1))

## [1.6.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.5.2...v1.6.0) (2022-06-21)


### Features

* support for Angular 13 ([86b6e2f](https://github.com/dirkluijk/ngx-typesafe-forms/commit/86b6e2fdf22328767be272621ec637ae22cf4e87))

### [1.5.2](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.5.1...v1.5.2) (2021-10-11)


### Bug Fixes

* **formArray:** fixed incorrect data type of some FormArray streams ([#39](https://github.com/dirkluijk/ngx-typesafe-forms/issues/39)) ([cdd64cd](https://github.com/dirkluijk/ngx-typesafe-forms/commit/cdd64cd3b17f8aba8428717547316101166b29ac))

### [1.5.1](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.5.0...v1.5.1) (2021-07-02)


### Bug Fixes

* start with actual pristine value ([c43196e](https://github.com/dirkluijk/ngx-typesafe-forms/commit/c43196e1fefb1208e17f41c892309591c790732a))

## [1.5.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.4.3...v1.5.0) (2021-07-02)


### Features

* support for Angular 12 ([15e78a0](https://github.com/dirkluijk/ngx-typesafe-forms/commit/15e78a0e7c77a57ec22590d45aa3fce653d184b2))

### [1.4.3](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.4.2...v1.4.3) (2021-04-07)


### Bug Fixes

* fix peer dependency ([41e68aa](https://github.com/dirkluijk/ngx-typesafe-forms/commit/41e68aab3a895faec07a6e113aed37a1f2355529))

### [1.4.2](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.4.1...v1.4.2) (2021-04-07)


### Bug Fixes

* make FormGroup assignable to the Angular FormGroup ([697e872](https://github.com/dirkluijk/ngx-typesafe-forms/commit/697e872257164d74f53d6dd3129c07ce386358c3))

### [1.4.1](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.4.0...v1.4.1) (2021-02-17)


### Bug Fixes

* dont create new observables each time ([02001e3](https://github.com/dirkluijk/ngx-typesafe-forms/commit/02001e3edd41704b2c69345f788a42f8543f2c4d))
* fixed pristine$ stream  ([f67b7b8](https://github.com/dirkluijk/ngx-typesafe-forms/commit/f67b7b8969c266c66f893886db1112f3ebd7bd55))

## [1.4.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.3.1...v1.4.0) (2021-01-07)


### Features

* support for Angular 11 ([9369e44](https://github.com/dirkluijk/ngx-typesafe-forms/commit/9369e44b53e64b72b65ab8d7883a1bae0f358f7b))

### [1.3.1](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.3.0...v1.3.1) (2020-09-30)


### Bug Fixes

* fixed broken FormGroup.getControl method ([3894d47](https://github.com/dirkluijk/ngx-typesafe-forms/commit/3894d47350579599359c0a35a6e07972d5edc33f))

## [1.3.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.2.4...v1.3.0) (2020-09-30)


### Features

* allow retrieving nested controls more type-safe ([59a764e](https://github.com/dirkluijk/ngx-typesafe-forms/commit/59a764e16f5b50f8a16dadc751600010939be234))

### [1.2.4](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.2.3...v1.2.4) (2020-09-30)


### Bug Fixes

* made FormGroup.controls more specific for template-use ([73427b6](https://github.com/dirkluijk/ngx-typesafe-forms/commit/73427b6d8be0660516f438c797bf364f3551c622))

### [1.2.3](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.2.2...v1.2.3) (2020-09-28)


### Bug Fixes

* fixed broken validators in 1.2.2 ([00b9425](https://github.com/dirkluijk/ngx-typesafe-forms/commit/00b9425d3dd276ddede07fe1486ea5b4947c8c66))

### [1.2.2](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.2.1...v1.2.2) (2020-09-23)


### Bug Fixes

* 'not assignable to the same property in base type' typescript 4 ([#14](https://github.com/dirkluijk/ngx-typesafe-forms/issues/14)) ([2fcce63](https://github.com/dirkluijk/ngx-typesafe-forms/commit/2fcce63094adf7594073bb72a927c2865f2d3fb6))

### [1.2.1](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.2.0...v1.2.1) (2020-09-17)


### Bug Fixes

* make validator functions more relaxed ([6be9318](https://github.com/dirkluijk/ngx-typesafe-forms/commit/6be93188292d24abe30b3af0c1f2a00cbfb6db2b))

## [1.2.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.1.1...v1.2.0) (2020-09-16)


### Features

* add validValue$ stream ([0cdb44a](https://github.com/dirkluijk/ngx-typesafe-forms/commit/0cdb44a2252fa89c350616b7f882ba17463cbd4d))

### [1.1.1](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.1.0...v1.1.1) (2020-08-24)

## [1.1.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v1.0.0...v1.1.0) (2020-08-24)

## [1.0.0](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.8...v1.0.0) (2020-01-21)


### Bug Fixes

* fix wrong export in barrel file ([6bc2c17](https://github.com/dirkluijk/ngx-typesafe-forms/commit/6bc2c17b015cd669684b6450d8727c319e30b0b1))

### [0.0.8](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.7...v0.0.8) (2020-01-08)


### Bug Fixes

* rename error$ to errors$ ([17d5ef5](https://github.com/dirkluijk/ngx-typesafe-forms/commit/17d5ef537c5a202f990165dff20cdbcf8a18e86e))

### [0.0.7](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.6...v0.0.7) (2019-11-05)


### Bug Fixes

* prevent emitting events when setting disabled state ([51667a9](https://github.com/dirkluijk/ngx-typesafe-forms/commit/51667a9))

### [0.0.6](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.5...v0.0.6) (2019-11-04)


### Bug Fixes

* prevent emitting events when writing value ([218bd97](https://github.com/dirkluijk/ngx-typesafe-forms/commit/218bd97))

### [0.0.5](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.4...v0.0.5) (2019-10-28)


### Bug Fixes

* typings fix for FormControl.value$ ([feb996d](https://github.com/dirkluijk/ngx-typesafe-forms/commit/feb996d))

### [0.0.4](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.3...v0.0.4) (2019-10-25)


### Bug Fixes

* fix for incorrect disabled setter ([b8a4018](https://github.com/dirkluijk/ngx-typesafe-forms/commit/b8a4018))

### [0.0.3](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.2...v0.0.3) (2019-10-25)


### Bug Fixes

* fix for incorrect typing of value$ in FormArray ([3cfbb47](https://github.com/dirkluijk/ngx-typesafe-forms/commit/3cfbb47))

### [0.0.2](https://github.com/dirkluijk/ngx-typesafe-forms/compare/v0.0.1...v0.0.2) (2019-10-22)


### Bug Fixes

* fix for incorrect typings ([a36d1ce](https://github.com/dirkluijk/ngx-typesafe-forms/commit/a36d1ce))

### 0.0.1 (2019-10-22)


### Features

* initial implementation ([4bee891](https://github.com/dirkluijk/ngx-typesafe-forms/commit/4bee891))
