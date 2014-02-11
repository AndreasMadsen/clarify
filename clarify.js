/**
 * Copyright (c) 2012 Andreas Madsen
 * MIT License
 */

var chain = require('stack-chain');

chain.filter.attach(function (error, frames) {
  return frames.filter(function (callSite) {
    var name = callSite && callSite.getFileName();
    return (name && name[0] === '/');
  });
});
