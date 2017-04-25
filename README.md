<div align="center">
<a href="https://codeclimate.com/github/pjpenast/egeo-react/coverage"><img src="https://codeclimate.com/github/pjpenast/egeo-react/badges/coverage.svg" alt="Istanbul Code Coverage"/></a>
<a href="https://travis-ci.org/pjpenast/egeo-react"><img src="https://img.shields.io/travis/pjpenast/egeo-react.svg" alt="Build Status"/></a>
</div>


# Egeo React

EGEO React is the open-source component library used to build Stratio's UI. The goals are to reduce the time and complexity of interface building being more productive, improving the experience based in apply the same patterns and visuals across the whole Stratio applications being more consistent, and create a common and unified visual language that helps us to understand each other better laying the foundation for scalable growth.

This is a free adaptation in React of the original library in Angular:

* [egeo](https://github.com/Stratio/egeo): The original library in Angular
* [egeo-ui-base](https://github.com/Stratio/egeo-ui-base): A Sass library that helps us to build our styles, including a rewritten Sass version of [flexboxgrid](http://flexboxgrid.com/).
* [egeo-theme](https://github.com/Stratio/egeo-theme): The egeo components are thematizable. This is the official theme used in the Stratio's applications.

## Table of contents

* [About this repo](#about-this-repo)
* [Getting Started](#getting-started)
   * [Dependencies](#dependencies)
   * [Installing](#installing)
   * [Examples](#examples)
   * [Work with the code](#work-with-the-code)
   * [How to run](#how-to-run)
   * [How to test](#how-to-test)
* [License](#license)

## About this Repo

This repo includes the components, services, and utilities built in React.

[Documentation website](https://pjpenast.github.io/egeo-react/)

## Getting Started

### Dependencies

What you need to run this app:
* [`node`](https://nodejs.org/es/) and `npm`
* Ensure you're running the latest versions Node `v6.x.x` and NPM `3.x.x`+

What your app will need to work with Egeo React:
* react ~ 15.5.x",
* prop-types ~ 15.5.x",
* react-dom ~ 15.5.x"

### Installing

You can install Egeo from npm:

```
npm i egeo-react
```

### Examples

On the next page you can see examples of the components in operation as well as instructions for their integration:

[Demos](https://pjpenast.github.io/egeo-react/)

### Work with the code

You can use Npm or Yarn to work with Egeo. If you want to use Yarn, it has to be installed first as a global dependency in your local machine.

```
sudo npm i -g yarn
```

Once Yarn is installed or Npm is ready, you can install Egeo using:

```
yarn
```

or

```
npm install
```

### How to Run

To run egeo locally you must use this commands.

```
yarn start
```

or

```
npm run start
```


### How to Test

There is a command to start the karma server and launch the whole tests written for the librery.

```
yarn test
```

or

```
npm run test
```

## License

Egeo-React is distributed under the Apache 2 license. You may obtain a copy of the license here at:

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)