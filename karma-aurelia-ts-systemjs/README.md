# karma-aurelia-ts-systemjs
A simple Aurelia project using Typescript and SystemJS, with Karma, Mocha and Chai for unit testing.

Source code from my blog post [Setting up Karma with Aurelia, Typescript & SystemJS](https://amcn41r.github.io/blog/2017/04/29/karma-aurelia-ts-systemjs/).

## Prerequesites
Ensure you have [node](https://nodejs.org/en/download/) installed.

And the following installed globally with npm...
```
npm install -g typescript
npm install -g jspm
npm install -g gulp-cli
npm install -g lite-server
npm install -g karma-cli

```

## Restore Dependencies
```
npm install
jspm install
```

## Build Output
```
gulp build
```

## Run the Tests
```
karma start
```

## Serve locally and watch for changes
```
lite-server
```