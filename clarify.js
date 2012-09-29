/**
 * Copyright (c) 2012 Andreas Madsen
 * MIT License
 */

var chain = require('stack-chain');

chain.filter.attach(function (error, frames) {
  return frames.filter(function (callSite) {
    return (callSite.getFileName()[0] === '/');
  });
});
