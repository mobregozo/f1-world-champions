# README #

This is a SPA application, responsive web site developed using a mobile-first approach, based on an MVC architecture, developed with AngularJs as a main Framework.

Regarding to the content, it shows the Seasons between 2005 and 2015 of the F1 World Championship, among with related info of every Season and Races.

## Dependencies and Dev-dependencies

First thing to have installed is NodeJs because, we are going to use the NPM package manager.

Once we have NPM installed, we could start adding the remaining dependencies, such as gulp which will cover the automation process of the App
All related task are described in the gulpfile.js

`npm install -g gulp` or `npm install gulp `

To run the test we will need karma-cli installed

`npm install -g karma-cli`

Then run the following command in order to install all the dependencies:

`npm install`

## Run The App in a Development Mode

By running the default gulp task, we are going to create a local http server to code and watch the updates in live in the default browser.

`gulp`

## Build the App for production

Build the App, create a dist folder

`gulp prod`

Zip the App for deployment purpose - depends on the Server

`gulp zip`

## How to Run the Test

Unit Testing with Karma:
`npm test`

e2e Testing with protractor , make sure the App is running locally
`npm run protractor`

## Directories and Files Description

package.json : Server-side dependencies.

bower.json : Client-side dependencies.

gulpfile.js : Gulp tasks are specified and described in there

/app : Source Code

/app/comonents: Each component /module of the App.
/app/assets : External Files : images, css and vendor libs.
/app/shared : Shaded content between the up suchs components 

/app/index.html : The single page app HTML. 

/app/shared/templates.js :All templates attached under angular cache elements.

/app/app.js : Main angular module.
/app/config.js : Main angular configuration.

/e2eTests: Protractor configuration and test implementation
/e2eTests/protractor.conf Protractor configuration file

karma.config.js: Karma configuration file
All test are under each components with the following name convention : *.spec.js

/dist:  Distruibuition src code for production releases

##Notes

- The intention was to create a well sctrured App, easy to mantain and escalate. 
- Added Bootstrap for a better look and feel.
- Added angular-breadcrumb lib, in order to keep all views organized.
- Added SASS preprocessor in order to type css code fast and clean.
- Added angular-ui-router for a better experiencie when working with nested views.
- Added callable methods inside controllers and services at the top, using a technique derived from Module Pattern.

##Other Gulp task

- Added ngAnnotate to fixed literally dependencies, useful when making minifications.
- Added minification and concat js and cs files to improve the performance.
- Added task to convert view to angular-template-cache in order reduce the number of http calls ro tetrieve the views.
- Created a task to move config.json object to a config value inside the angular app.
- Added jsHint Linter in order to keep an standar in terms of the quality of the Code.
