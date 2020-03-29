# @spartan-ui/spartan-ui

[![MIT Licensed][icon-license]][link-license]
[![NPM Version][icon-npm]][link-npm]
[![Build Status][icon-ci]][link-ci]
[![Test Coverage][icon-coverage]][link-coverage]

[![Code Issues][icon-issues]][link-issues]
[![Codebase Maintainability][icon-maintainability]][link-maintainability]
[![Dependabot][icon-dependabot]][link-dependabot]

[![Commitizen][icon-commitizen]][link-commitizen]
[![Prettier][icon-prettier]][link-prettier]
[![Jest][icon-jest]][link-jest]

A collection of brutally simple components for building administrative
dashboards with [React Bootstrap][link-react-bootstrap].

## Background

We love Bootstrap and React Bootstrap, but they only get you so far when
building administrative dashboards. Spartan was built to enable our team to
rapidly build applications that were consistent and reliable from a UI
perspective. Most of our admin panels tended to converge on the same sort of
design; header, footer, sidebar and content. We've spent enough time creating
(and re-creating) those patterns, so we thought we'd finally extract the
components into their own repository and open-source it.

## Getting started

In an existing React project, run the following:

```bash
yarn add bootstrap react-bootstrap @spartan-ui/layout
```

## Features

- Typescript-first
- Uses SASS and CSS modules
- Use CSS Flexbox
- Themeable (coming soon!)

## Examples

An example project can be found in the `examples/` folder. It was bootstrapped
with [Create React App][link-create-react-app], with just the basic setup for a
Spartan project.

[link-create-react-app]: https://reactjs.org/docs/create-a-new-react-app.html

## Components

Spartan is split up across several modules. This is because some of the
dependencies required for those modules can add significant increases
to your bundle size.

### Layout

### Charts

### Data Grid

### Date Picker

### Drag and Drop

### Select

### Table

[icon-license]: https://img.shields.io/github/license/spartan-ui/spartan-ui.svg?longCache=true&style=flat
[link-license]: LICENSE
[icon-npm]: https://img.shields.io/github/lerna-json/v/spartan-ui/spartan-ui?label=npm&logo=npm&longCache=true&style=flat
[link-npm]: https://www.npmjs.com/package/@spartan-ui/spartan-ui
[icon-ci]: https://img.shields.io/github/workflow/status/spartan-ui/spartan-ui/CI/master.svg?logo=github-actions&longCache=true&style=flat
[link-ci]: https://github.com/spartan-ui/spartan-ui/actions
[icon-coverage]: https://img.shields.io/codecov/c/github/spartan-ui/spartan-ui/master.svg?logo=codecov&longCache=true&style=flat
[link-coverage]: https://codecov.io/gh/spartan-ui/spartan-ui

[icon-issues]: https://img.shields.io/codeclimate/issues/spartan-ui/spartan-ui.svg?logo=code-climate&longCache=true&style=flat
[link-issues]: https://codeclimate.com/github/spartan-ui/spartan-ui/issues
[icon-maintainability]: https://img.shields.io/codeclimate/maintainability/spartan-ui/spartan-ui.svg?logo=code-climate&longCache=true&style=flat
[link-maintainability]: https://codeclimate.com/github/spartan-ui/spartan-ui
[icon-dependabot]: https://img.shields.io/badge/dependabot-enabled-blue.svg?logo=dependabot&longCache=true&style=flat
[link-dependabot]: https://greenkeeper.io/

[icon-commitizen]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?longCache=true&style=flat
[link-commitizen]: http://commitizen.github.io/cz-cli/
[icon-prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?logo=prettier&longCache=true&style=flat
[link-prettier]: https://prettier.io/
[icon-jest]: https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest&longCache=true&style=flat
[link-jest]: https://jestjs.io/

[link-react-bootstrap]: https://react-bootstrap.github.io/
