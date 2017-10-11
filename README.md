# example-codeceptjs
This is an example for acceptance testing using CodeceptJS, NightmareJS and Electron!

## What is CodeceptJS?

CodeceptJS is a framework for writing end-to-end tests for web applications. It abstracts common interaction with pages to simple methods and can use basically anything that implements WebDriver specification as it’s backend. So you’re not tied to Selenium here. It’s very well documented so make sure to check out its website!
I like it especially for its simple API and the fact that it’s written in pure ES6 supported by node without transpiler, so there’s no need for additional dependency in form of Babel or whatever equivalent.
Thank you Michael Bodnarchuk for that!

## What is NightmareJS?

NightmareJS is a library for automating interactions with web pages. Under the covers it uses Electron as a web browser so it’s probably the fastest tool in the world of headless browsers (right now). However it’s also much younger than good ol’ Selenium so I’d expect to encounter some strange issues and edge cases here, but where would be fun without such problems?

## What is Electron?

Electron previously known as Atom Shell was originally created by Github for the Atom editor. Then it evolved into platform to build desktop applications with use of web technologies like HTML and JavaScript. You can think of it as minimal Chromium browser with JavaScript API to control it.

## Getting started
### Clone the repo
``` shell
$ git clone git@github.com:rifkyalikiki/example-codeceptjs.git
```

### Install dependencies
``` shell
$ yarn
```

### Run tests
Use from main directory:
``` shell
$ yarn test
```

## Dependencies
- [Node](https://nodejs.org/en/)
- [Yarn Package Manager](https://yarnpkg.com/)