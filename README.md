<p align="center">
  <a href="https://ng-alain.com">
    <img width="100" src="https://ng-alain.com/assets/img/logo-color.svg">
  </a>
</p>

<h1 align="center">NG-ALAIN</h1>

<div align="center">
  Out-of-box UI solution for enterprise applications, Let developers focus on business.

  [![Build Status](https://img.shields.io/travis/ng-alain/ng-alain/master.svg?style=flat-square)](https://travis-ci.org/ng-alain/ng-alain)
  [![Dependency Status](https://david-dm.org/ng-alain/ng-alain/status.svg?style=flat-square)](https://david-dm.org/ng-alain/ng-alain)
  [![GitHub Release Date](https://img.shields.io/github/release-date/ng-alain/ng-alain.svg?style=flat-square)](https://github.com/ng-alain/ng-alain/releases)
  [![NPM version](https://img.shields.io/npm/v/ng-alain.svg?style=flat-square)](https://www.npmjs.com/package/ng-alain)
  [![prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
  [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://github.com/ng-alain/ng-alain/blob/master/LICENSE)
  [![Gitter](https://img.shields.io/gitter/room/ng-alain/ng-alain.svg?style=flat-square)](https://gitter.im/ng-alain/ng-alain)
  [![ng-zorro-vscode](https://img.shields.io/badge/ng--zorro-VSCODE-brightgreen.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode)
  [![ng-alain-vscode](https://img.shields.io/badge/ng--alain-VSCODE-brightgreen.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode)

</div>

English | [简体中文](README-zh_CN.md)

## Quick start

```bash
# Make sure you are using 7.x version in global Angular Cli
ng new demo --style less
cd demo
ng add ng-alain
ng s -o
# or HMR mode
npm run hmr
```

> Please refer to [Cli](https://ng-alain.com/cli) for more details.
>
> [vscode] recommended install [ng-zorro-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-zorro-vscode) & [ng-alain-vscode](https://marketplace.visualstudio.com/items?itemName=cipchk.ng-alain-vscode) plugins.

## Links

+ [Document](https://ng-alain.com)
+ [DEMO](https://ng-alain.github.io/ng-alain/)

## Features

+ `ng-zorro-antd` based
+ Responsive Layout
+ I18n
+ [@delon](https://github.com/ng-alain/delon)
+ Lazy load Assets
+ UI Router States
+ Customize Theme
+ Less preprocessor
+ Well organized & commented code
+ Simple upgrade
+ Support Docker deploy

## Architecture

![Architecture](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/architecture.png)

> [delon](https://github.com/ng-alain/delon) is a production-ready solution for admin business components packages, Built on the design principles developed by Ant Design.

## App Shots

![desktop](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/desktop.png)
![ipad](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/ipad.png)
![iphone](https://raw.githubusercontent.com/ng-alain/delon/master/_screenshot/iphone.png)

## Donation

ng-alain is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more backers. You can support us in any of the following ways:

- [patreon](https://www.patreon.com/cipchk)
- [opencollective](https://opencollective.com/ng-alain)
- [paypal](https://www.paypal.me/cipchk)
- [支付宝或微信](https://ng-alain.com/assets/donate.png)

Or purchasing our [business theme](https://e.ng-alain.com/).

## Backers

Thank you to all our backers! 🙏

<a href="https://opencollective.com/ng-alain#backers" target="_blank"><img src="https://opencollective.com/ng-alain/backers.svg?width=890"></a>

### License

The MIT License (see the [LICENSE](https://github.com/ng-alain/ng-alain/blob/master/LICENSE) file for the full text)
# NEPSUIKIT

This project is used as a base to structure our app. 


## Directory Structure

Schematic diagram of directory structure：

```
├── _mock                                       # Mock Data rule
├── src
│   ├── app
│   │   ├── core                                # Core module
│   │   │   ├── i18n
│   │   │   ├── net
│   │   │   │   └── default.interceptor.ts      # Default HTTP interceptor
│   │   │   ├── services
│   │   │   │   └── startup.service.ts          # Initialize project configuration
│   │   │   └── core.module.ts                  # Core module file
│   │   ├── layout                              # Core layout
│   │   ├── routes
│   │   │   ├── **                              # Business directory
│   │   │   ├── routes.module.ts                # Service routing module
│   │   │   └── routes-routing.module.ts        # Service routes registration
│   │   ├── shared                              # Shared module
│   │   │   └── shared.module.ts                # Shared module file
│   │   ├── app.component.ts                    # Root component
│   │   └── app.module.ts                       # Root module
│   │   └── delon.module.ts                     # @delon module import
│   ├── assets                                  # Local static resource
│   ├── environments                            # Environment variable configuration
│   ├── styles                                  # Style directory
└── └── style.less                              # Style guide entry
```

The following is a description and use of each directory and file.

**_mock**

The Mock data rules directory, if you create a project via [Command Line Tools](/cli), you can specify the `--mock` parameter to determine if the Mock function is required.

**src/app/core/core.module.ts**

The core module will only be imported once. Therefore, core service classes (eg, messages, data access, etc.) that are required for the entire ** business module should exist here.

**
**src/app/core/net**

The default interceptor, where you can handle request parameters, request exceptions, business exceptions, and so on.

**src/app/core/services/startup.service.ts**

Useful when you need to execute some remote data (eg application information, user information, etc.) before Angular launches.

> It is a simple method and returns a `Promise` object, unless Angular will abort the launch unless `resolve(null)` is explicitly executed.

**src/app/layout**

Layout file code, refer to the page structure section.

**src/app/routes**

Business module, all your business code will be here.

**src/app/shared/shared.module.ts**

The shared module means that some third-party modules, custom components, and custom instructions that you need to use for the entire business module should exist here.

**src/app/delon.module.ts**

For the @delon series of module import collections, all modules are imported by default, and you can use the [Optimization](/docs/performance) section to further optimize on demand.

**src/styles/_alain-custom-variables.less**

**[[Do not delete]]** You can adjust the default parameters of alain according to your needs.

**src/environments**

The application environment variable contains the following values:

- `SERVER_URL` All HTTP request prefixes
- `production` Whether the production environment
- `useHash` Whether the route is useHash mode

## Page structure

TODO

### Basic layout

In the upper-left-right layout mode, it is applied to the development of the **business page**. Its specification details:

+ Top area height `64px`（parameter：`@header-hg`）
+ Side area width `200px`（parameter：`@aside-wd`）
+ Hide side navigation when the screen is below `1140px` wide
+ Turn the side navigation to the `fixed` state when the screen is below `1140px` wide
+ Mainly includes a [sidebar-nav (click to view API)](/components/sidebar-nav) component

> Parameters are adjustable as needed by the `src/styles/_alain-custom-variables.less` file.

**Top area**

location：*src/app/layout/default/header*

Scaffolding provides some regular top-level components by default, which are stored in the *components* directory. At the same time `@delon/abc` also provides several top components (eg：[notice-icon](/components/notice-icon) Notification menu component. You can build it yourself or develop it yourself based on the components provided.

> Scaffolding supports responsive layout. For the top area, you may need to hide some components under the small screen, so you can add `hidden-xs` to the corresponding DOM node to automatically hide when the screen is smaller than `768px`.

**Side area**

location：*src/app/layout/default/sidebar*



**Internal area**

The content area is the business page area, the specification details：

+ Content distance page standard, side, right scroll bar, bottom, this margin is based on a standard Dashboard Gutter width `24px`.

### Full screen layout

Used for any top and side areas, typically for highly customizable pages such as large screen data.



### Custom layout

If the provided layout does not meet your requirements, you will need to create a new Layout template yourself. Just define it in layout.module.ts.


# Developement process

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
