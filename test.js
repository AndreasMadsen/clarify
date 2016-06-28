'use strict';

const test = require("tap").test;

require('./clarify.js');

test("node internal call sites should be ignored", function (t) {

  process.nextTick(function () {
    var lines = (new Error('trace')).stack.split('\n');

    t.equal(lines.length, 2);
    t.end();
  });
});

test("no filename dosn't break", function (t) {
  process.nextTick(function () {
    var err = null;
    eval("err = new Error('trace');");
    var lines = err.stack.split('\n');

    t.equal(lines.length, 2);
    t.end();
  });
});
