# Testudo

![Testudo](http://gb.fotolibra.com/images/previews/50037-roman-soldiers-in-testudo-formation-illustration.jpeg)

> Testudo is a Grunt based boilerplate for the building of modern, modular, testable web applications. Testudo has first class support for all of the modern tools you know and love such as RequireJS, CoffeeScript, Karma, Grunt, Bower, SASS, Bootstrap and many more.

## Quick Start

### Prerequisites

- [Node](http://nodejs.org/download/)
- [Grunt](http://gruntjs.com/getting-started)
- [Ruby](https://www.ruby-lang.org/en/)
- [Bundler](http://bundler.io/)

### Install Testudo

_Install the **latest** version of **grunt-init**. You **MUST** download from git as it is newer than what is on **NPM** currently._

```shell
$ npm install -g git://github.com/gruntjs/grunt-init.git
```

_Clone the repo into your **grunt-init** templates_

```shell
$ git clone git@github.com:eclifford/testudo.git ~/.grunt-init/testudo
```

### Create Project with Testudo

Next create your project folder and initialize Testudo inside of it to scaffold out your project. Pay attention to all the prompts as they dictate how best to configure your Testudo project.

```shell
$ mkdir my_project
$ cd my_project
$ grunt-init testudo
```

Once your project is setup you'll need to next install all the dependencies.

_Install node dependencies_

```shell
$ npm install
```

_Install bower dependencies_

```shell
$ bower install
```

_Install ruby dependencies_

```shell
$ bundle install
```

_Start watcher/server_

```shell
$ grunt
```

## Key Features

### Modular Focus

Testudo is heavily influenced from my experience in building modular web applications. The key to building any large scale web application in JavaScript is to **not**, instead our focus should be on creating modular widgets that operate independently of the larger application.

In Testudo the creation, testing, management and optimization of these widgets is made possible by Testudo's tooling. Testudo is a series of tools and practices around modular app development.

**Key Features**

- Full AMD compatibility with [RequireJS](http://requirejs.org)
- (Optional) [BronsonJS](http://www.bronsonjs.com) management layer for modules
- Dynamic management of **R.JS** build layer for modules
- Dynamic management of **SASS** imports for modules

### Test First

Testudo understands how important testing is and how frustrating it can be to setup a consistent reliable testing framework. Testudo has full support for the writing of unit tests anywhere in the `app/modules/`. In addition, unit testing dependency injection is made easy by full RequireJS support in all your test specs. Finally, Testudo has full support for **Sinon**, **Chai**, **Jquery-Chai** and **Sinon-Chai**. Testing has never been this easy.

**Key Features**

- Write tests where you want them.. next to your app code
- Write your unit tests in full AMD
- Karma Test Runner
- Chai Assertions with Chai-Jquery and Chai-Sinon
- Sinon for mocks and stubs

### Modern Tooling

Testudo comes loaded with an opinionated set of tools and libraries that I believe reflect some of the best of the modern tool sets made available to front end developers. Tools like RequireJS and CoffeeScript and core to Testudo and treated as first class citizens instead of afterthoughts.

| Technology | Overview
--- | ---
[CoffeeScript](http://coffeescript.org/) | 100% written in CoffeeScript
[CoffeeLint](http://www.coffeelint.org/) | Enforced configurable linting on all App and Test code
[RequireJS](http://requirejs.org/) | RequireJS done right
[Grunt](http://gruntjs.com/) | Grunt done right
[SASS](http://sass-lang.com/) | Full SASS support
[SASS-Bootstrap](https://github.com/jlong/sass-bootstrap) | Twitter Bootstrap ported to SASS
[SASS-Globbing](https://github.com/chriseppstein/sass-globbing) | Ability to wildcard import multiple sass files
[Bower](http://bower.io/) | Uses Bower for package management
[Karma](http://karma-runner.github.io/0.10/index.html) | Integrated with Karma
[Sinon](http://sinonjs.org/) | Karma + Sinon + Karma Sinon
[Chai](http://chaijs.com/) | Karma + Chai + Chai JQuery
[BronsonJS](http://bronsonjs.com/) | RequireJS adapter for modular app development

**Key Features**

- Full application code support for CoffeeScript
- Grunt files and tasks all written in CoffeeScript
- Unit test CoffeeScript and RequireJS support
- Optional Compile time linting with [CoffeeLint](http://www.coffeelint.org/)

### Battle Tested

Testudo is an attempt at offering a solid opinionated boilerplate based on my personal experience developing tools and processes for enterprise web sites.

Testudo is designed to be used by a team in a real work environment. Testudo comes customizable to better fit your company, business, client or even team member through extensible setup and run time configuration.

**Key Features**

- Installable template through `grunt-init` with options for inclusion of libraries
- Configure everything from folder, ports, live-reload settings all from a single user configuration file
- universal accepted naming standards and conventions for structure
- organized and maintainable grunt tasks and options

## Documentation

### Workspace Overview

```
testudo/
  |- .tmp/                    // staging directory for compiled artifacts
  |- dist/                    // production directory for prod quality artifacts
  |- app/
  |  |- assets/               // static assets such as images and fonts
  |  |- common/               // third party or internal libraries (not managed by bower)
  |  |- modules/              // location of all module widgets in your application
  |  |  |- EXAMPLE_MODULE/    // example widget
  |  |  |  |- collections/
  |  |  |  |- models/
  |  |  |  |- templates/
  |  |  |  |- test/
  |  |  |  |- views/
  |  |  |- main.sass          // widget entry point (bootstrapper)
  |  |  |- main.coffee        // widget stylesheet
  |  |- pages/                // application pages
  |  |  |- partials/          // partial templates for runtime import
  |  |  |  |- header.html
  |  |  |- page2.html
  |  |- vendor                // 3rd party libraries managed by bower
  |  |  |- bower_components/
  |  |- .htaccess
  |  |- common.coffee         // RequireJS configuration
  |  |- index.html            // Application start page
  |  |- main.coffee           // Application global script bootstrap
  |  |- main.sass             // Application global stylesheet
  |- tasks/                   // Grunt configuration files
  |- .bowerrc
  |- bower.json
  |- Gruntfile.coffee
  |- package.json
```

### Commands

| Command | Overview |
--- | ---
grunt | file watcher, compilation of Coffee & SASS, automated unit testing w/ Karma
grunt build | builds all CoffeeScript, SASS, Compass, RequireJS & moves all files to .dist folder
grunt server | starts connect server
grunt test:unit | runs projects unit tests one time
grunt test:coverage | opens up unit test coverage report for project

### Modules

Testudo enables the easy construction of a framework agnostic module application framework. The focus of Testudo is the module and how those modules become the building blocks of your large scale web application.

#### What is a Module

A Module is a standalone self sustaining component with limited knowledge of the greater system in which is operates. Modules by design are loosely coupled and therefore a system comprised of modules is less brittle than one that is not.

Modules in Testudo reside in the `app/modules/` directory and are automatically added to **r.js** and imported into the main **SASS** stylesheet. A Module in Testudo can be anything from a single script file to an entire MVC application written in Backbone or something similar.

Here is an example of what the modules directory could look like.

```
app/
  |- modules/
  |  |- moduleA/
  |  |  |- models/                   // Backbone (or similar) models
  |  |  |- templates/                // external templates (underscore, handlebars etc)
  |  |  |- test
  |  |  |  |- moduleASpec.coffee     // module test spec
  |  |  |- views/
  |  |  |  |- mainView.coffee        // Backbone (or similar) view
  |  |  |- main.coffee               // module entry point (optionally BronsonJS)
  |  |  |- main.scss                 // module specific stylesheet
```

##### Resources
* [Writing Modular JS](http://addyosmani.com/writing-modular-js/)
* [Large Scale JavaScript](http://addyosmani.com/largescalejavascript/)
* [Modular HTML Components with RequireJS](http://simonsmith.io/modular-html-components-with-requirejs/)
* [Nicholas Zakas Scalable Javascript Architecture](http://www.youtube.com/watch?v=vXjVFPosQHw)

#### BronsonJS

To better support the isolation and loose coupling of modules in your system Bronson acts as an intermediate layer managing the relationships between your other modules and offering granular control over the life cycle of all the modules in your application.

This all starts with the Bronson.Module object which is the entry point into your module and itself acts as a mediator to the inner workings of your module.

Below is an example of what a Bronson module looks like.

```coffee
#
# Instagram Module
#
# Sample Bronson Instagram module
#
define [
  'jquery'
  'underscore'
  'backbone'
  'marionette'
  'modules/instagram/collections/photosCollection'
  'modules/instagram/views/photosView'
], ($, _, Backbone, Marionette, PhotosCollection, PhotosView) ->
  class InstagramModule extends Bronson.Module
    # Inner module controller
    events:
      'instagram:stop': 'stop'
      'instagram:start': 'start'
      'map:geoupdate': 'update'

    #
    # load the application
    #
    onLoad: (data) ->
      @data = data
      App = new Marionette.Application()

    #
    # listen for notifications and prepare view
    #
    onStart: ->
      @photos = new PhotosCollection()

      @photosGridView = new PhotosView
        el: @data.el
        collection: @photos

    #
    # stop subscribed notifications
    #
    onStop: ->
      Bronson.unsubscribe 'instagram:map:geoupdate'

    #
    # stop all notifications and unrender the module
    #
    onUnload: ->

    #
    # on position change fetch new photos
    #
    update: (data) ->
      @photos.fetch
        data:
          client_id: "b3481714257943a4974e4e7ba99eb357"
          lat: data.lat
          lng: data.lng
          count: 12
        reset: true
        success: =>
          @photosGridView.render()

```

##### Resources
* [BronsonJS](http://bronsonjs.com)

#### R.JS

Testudo works with the **R.JS** (RequireJS build tool) to automatically build modules as separate packages reducing the footprint of your application on initial load. By following the convention of putting each module in `app/modules/` Testudo will find each `main.coffee` and add it to the modules list in R.JS excluding all application code in `app/main.coffee`. This is done automatically and no customization of the R.JS build configuration is necessary.

The benefit of this is you download just the base application code up front and using RequireJS asynchronously fetch your modules as needed through Bronson.

#### SASS

Testudo works with **Sass-Globbing** to automatically include all module specific SASS into your main SASS stylesheet.

#### Testing Modules

Testudo has a customized RequireJS Karma runner to find all test specs following the convention of `**/*Spec.coffee` in your `app/modules/` folder and running them with Karma in the `grunt test:unit` task.

Because Testudo uses Require to load test specs your specs themselves should be wrapped in a define block and should use RequireJS to load the objects to test. This allows granular unit specific testing and allows for much greater flexibility in substituting mocks through dependency injection.

My convention is to put all my tests in a `test/` folder inside of `app/modules/moduleA/` but you may put yours anywhere so long as they are in the `app/modules` folder.

### Configuration

#### User Settings

Included in the project is a `user-settings.json` file for making custom changes to your workspace. It is important that after changing this file to suit your needs that you do **not** check it in. Run the following snippet to mark a file as untracked.

```shell
$ git update-index --assume-unchanged user-settings.json
```

#### Grunt Tasks

In an effort to make the Grunt files more maintainable and readable I've implemented many of the great ideas by Thomas Boyt in his article on [maintainable grunt](http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html) files.

## Updating Testudo

You can at any time update your Testudo project generator by doing the following.

```
$ cd ~/.grunt-init/testudo
$ git pull
```

## Roadmap

* [0.2.0] - further optimization of runners
* [0.3.0] - addition of acceptance testing

## Contributing

I welcome any contributions. Please feel free to offer suggestions and submit pull requests.

## License

The MIT License

Copyright (c) 2014 Eric Clifford

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
