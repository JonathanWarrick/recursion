// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// NOTES ABOUT JSON.stringify():
// All keys in objects are returned in quotations.
// All values in objects are returned as fed-in (strings don't have double quotes, numbers, etc. don't have single quotes).
// Returns a string!

var stringifyJSON = function(obj) {
  // case for arrays
  if (Array.isArray(obj)) {
    var results = [];

    for (var i = 0; i < obj.length; i++) {
      results.push(stringifyJSON(obj[i]));
    }

    return '[' + results + ']';
  } else if(obj && typeof obj === "object") {
    var results = [];

    for (var key in obj) {
      if (typeof obj[key] === "function" || obj[key] === undefined) {
        continue;
      }
      results.push(stringifyJSON(key) + ":" + stringifyJSON(obj[key]));
    }
    
    return '{' + results + '}';
  } else if (typeof obj === "string") {
    return '"' + obj + '"';
  } else {
    // case for "base" objects
    return '' + obj;
  }
};