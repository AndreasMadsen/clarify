/**
 * Copyright (c) 2012 Andreas Madsen
 * MIT License
 */

// use a already existing formater or fallback to the default one
var format = Error.prepareStackTrace || require('./format.js');

Error.prepareStackTrace = function (error, callSite) {

  // return standart formated stack trace
  return format(error, filterCallSite(callSite));
};

function filterCallSite(callSite) {
  var ret = [];

  for (var i = 0, l = callSite.length; i < l; i++) {
    if (callSite[i].getFileName()[0] === '/') {
      ret.push(callSite[i]);
    }
  }

  return ret;
}
