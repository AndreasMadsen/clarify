/**
 * Copyright (c) 2012 Andreas Madsen
 * MIT License
 */

var chain = require('stack-chain');
var sep = require('path').sep;

chain.filter.attach(function (error, frames) {
  return frames.filter(function (callSite) {
    var name = callSite && callSite.getFileName();
    return (name && name.indexOf(sep) !== -1);
  });
});
