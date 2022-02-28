## CRF Web Application Library for CRF React Web Applications

A set of components and utilities for use in building CRF React web apps.

## Installation
`npm install git+ssh://git@github.com:Cardiovascular-Research-Foundation/crf-web-app-library.git --save`

## Local Development
To work on this library locally you must create a symlink to it from within the node_modules folder of an app you're working on locally. Use one of the following 2 methods to establish the link.

### Method 1 (preferred) 
1. Go to the root directory of where this module is stored on your local machine.
1. Execute: `npm link` (this stores a global symlink to the module in the node_modules folder of your local machine)
1. Go to the root directory of the app into which you want to pull this module.
1. Execute: `npm run link-lib` (which is an alias for `npm link "@crf/web-app-library"`)

### Method 2
1. Go to the root directory of the app into which you want to pull this module.
1. Execute: `npm link ../path/to/local/version/of/this/module`

You should now see a symlink in the node_modules folder of your local app that points to your local version of the module.

### Re-link
Any time you run npm install or similar package management commands in the app you're working on, you will need to re-establish the symlink to the library.

1. Execute Step 4 of Method 1

or

2. Execute Step 2 of Method 2

## Usage

Import components from this library into your app like so:

`import {ComponentName} from '@crf/web-app-library'`

