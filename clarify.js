'use strict';

const chain = require('stack-chain');
const sep = require('path').sep;

chain.filter.attach(function (error, frames) {
  return frames.filter(function (callSite) {
    const name = callSite && callSite.getFileName();
    return (name && name.includes(sep) && !name.startsWith('internal'));
  });
});
