# Testudo

![Testudo](http://gb.fotolibra.com/images/previews/50037-roman-soldiers-in-testudo-formation-illustration.jpeg)

Testudo is a modern web application boilerplate with first class support applications that are modular and testable. 

## Key Features

| Tool | Overview |
--- | ---
[CoffeeScript](http://coffeescript.org/) | 100% written in CoffeeScript
[CoffeeLint](http://www.coffeelint.org/) | Enforced configurable linting on all App and Test code
[RequireJS](http://requirejs.org/) | RequireJS done right
[Grunt](http://gruntjs.com/) | Grunt done right
[SASS](http://sass-lang.com/) | Full SASS support
[SASS-Bootstrap](https://github.com/jlong/sass-bootstrap) | Bundled with SASS-Bootstrap
[Bower](http://bower.io/) | Uses Bower for package management
[Karma](http://karma-runner.github.io/0.10/index.html) | Integrated with Karma
[Sinon](http://sinonjs.org/) | Karma + Sinon + Karma Sinon
[Chai](http://chaijs.com/) | Karma + Chai + Chai JQuery
[BronsonJS](http://bronsonjs.com/) | RequireJS adapter for modular app development

## Insipration 
* [Large Scale JavaScript](http://addyosmani.com/largescalejavascript/)
* [Nicholas Zakas Scalable Javascript Architecture](http://www.youtube.com/watch?v=vXjVFPosQHw)
* [Yeoman](http://yeoman.io/)

## Project Setup

_First clone the repo_

```shell
$ git clone git@github.com:eclifford/testudo.git
```

_Install dependencies_

```shell
$ npm install && bower install
```

_Start watcher/server_

```shell
$ grunt
```

### Overview

```
testudo/                         
  |- .tmp/
  |- dist/
  |- app/
  |  |- assets/
  |  |- common/
  |  |- modules/
  |  |  |- EXAMPLE_MODULE/
  |  |  |  |- collections/
  |  |  |  |- models/
  |  |  |  |- templates/
  |  |  |  |- test/
  |  |  |  |- views/
  |  |  |- main.sass
  |  |  |- main.coffee
  |  |- vendor
  |  |  |- bower_components/
  |  |- .htaccess
  |  |- common.coffee
  |  |- index.html
  |  |- main.coffee
  |  |- main.sass
  |- tasks/
  |- .bowerrc
  |- bower.json
  |- Gruntfile.coffee
  |- package.json
```

* `.tmp/`: staging directory
* `dist/`: production artifacts
* `assets/`: images, fonts etc
* `common/`: reusable libraries, not managed by bower
* `modules/`: container for your application modules (loaded by Bronson/Require)
* `vendor/`: 3rd party libraries, managed by bower
* `common.coffee`: RequireJS config shared by App, R.JS and Karma
* `main.coffee`: entry point into the application from which you would load all other modules
* `main.scss`: main stylesheet into which modules and bootstrap are to be imported
* `tasks/`: organized grunt tasks and configuration options 

### Writing your first module with BronsonJS

The entry point of your application is `app/main.coffee`. From here it is certain that RequireJS and its configuration are both loaded and available. 

Loading a module is simple. BronsonJS has several formats for loading modules. Let's take a look at the easiest.

```coffee
  Bronson.load ['modules/moduleA/main']
```

The code above will simply pass through the defined path `modules/moduleA/main` to RequireJS load the module, register it with Bronson and finally call both `load` and `start` on the module.

#### Example Bronson Module

```coffee
  define [
    'jquery'
    'bronson'
  ], ($, Bronson, MainView) ->
    class ModuleA extends Bronson.Module
      constructor: (data) ->
        @data = data // store any passed in data

      onLoad: ->
        console.log 'loaded!'

      onStart: ->
        console.log 'started!'

      onStop: ->
        console.log 'stopped!'

      onUnload: ->
        console.log 'unloaded!'
```

As you can see Bronson has callbacks for `load`, `start`, `stop`, `unload`. This can be extremely helpful in the management of the life cycle of your modules in the wider scope of a large application.

#### Passing data to Bronson Modules

In addition to giving life cycle events Bronson also offers the ability to accept a `data` object during its instantiation. This `data` object is passed into the constructor of your module.

```coffee
  Bronson.load [
    'modules/moduleA/main': 
      data:
        el: '#content'
  ]
```

#### Toggling Autoload

```coffee
  Bronson.load [
    'modules/moduleA/main': 
      autoload: false
  ]
```

#### Loading Multiple modules at once

```coffee
  Bronson.load [
    'modules/moduleA/main': 
      autoload: false
  ,
    'modules/moduleB/main': 
      autoload: false
  ]
```

### Global Pub/Sub with BronsonJS

## Contributing changes

_soon_

## License

The MIT License

Copyright (c) 2013 Eric Clifford

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
