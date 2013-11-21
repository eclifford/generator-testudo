# Testudo

Testudo is a modern web application boilerplate with first class support applications that are modular and testable. 

## Key Features

| Tool | Overview |
--- | ---
[CoffeeScript](http://coffeescript.org/) | 100% written in CoffeeScript
[RequireJS](http://requirejs.org/) | RequireJS done right
[Grunt](http://gruntjs.com/) | Grunt done right
[SASS](http://sass-lang.com/) | Full SASS support
[SASS-Bootstrap](https://github.com/jlong/sass-bootstrap) | Bundled with SASS-Bootstrap
[Bower](http://bower.io/) | Uses Bower for package management
[Karma](http://karma-runner.github.io/0.10/index.html) | Integrated with Karma
[Sinon](http://sinonjs.org/) | Karma + Sinon + Karma Sinon
[Chai](http://chaijs.com/) | Karma + Chai + Chai JQuery
[BronsonJS](http://bronsonjs.com/) | RequireJS adapter for modular app development

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