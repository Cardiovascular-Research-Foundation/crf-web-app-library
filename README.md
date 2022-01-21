## CRF Web Application Library for CRF React Web Applications

A set of components and utilities for use in building CRF React web apps.

## Installation
`npm install git+ssh://git@github.com:enmielado/crf-web-app-components.git --save`

## Local Development

### Method 1
1. Go to the root directory of the app into which you want to pull this module.
1. Execute: `npm link ../path/to/local/version/of/this/module`

### Method 2 
1. Go to the root directory of where this module is stored on your local machine.
1. Execute: `npm link`
1. Go to the root directory of the app into which you want to pull this module.
1. Execute: `npm run link-lib` (which is an alias for `npm link "@crf/web-app-library"`)

You should now see a symlink in the node_modules folder of your local app that points to your local version of the module.

__Note: any time you run npm install or similar package management commands in the app you're working on, you should run npm link-lib again to re-establish the symlink to your local version of this library.__

## Usage

Import components from this library into your app like so:

`import {ComponentName} from '@crf/web-app-library'`

