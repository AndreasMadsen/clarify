
var test = require("tap").test;

require('./clarify.js');

test("modifier execution order", function (t) {

  process.nextTick(function () {
    var lines = (new Error('trace')).stack.split('\n');

    t.equal(lines.length, 2);
    t.end();
  });
});
