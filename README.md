good-ia-source-image-probable-def
==================

A probablility table definition (for [probable](https://github.com/jimkang/probable)) that yields Internet Archive search params that get decently interesting images for use in art image apps.

Installation
------------

    npm install good-ia-source-image-probable-def

Usage
-----

    var tableDef = require('good-ia-source-image-probable-def');
    var probable = require('probable');

    var table = probable.createTableFromSizes(tableDef);
    table.roll();

Will yield params for use in [random-internet-archive](https://github.com/jimkang/random-internet-archive).

License
-------

The MIT License (MIT)

Copyright (c) 2019 Jim Kang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
