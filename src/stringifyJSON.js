// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// NOTES ABOUT JSON.stringify():
// All keys in objects are returned in quotations.
// All values in objects are returned as fed-in (strings don't have double quotes, numbers, etc. don't have single quotes).
// Returns a string!

var stringifyJSON = function(obj) {
  // Create starting point for string
  var stringifiedObj = '';

  if (typeof obj === "number" || typeof obj === "boolean") {
    stringifiedObj = stringifiedObj + obj;
    return stringifiedObj;
  }

  else if (typeof obj === "string") {
    stringifiedObj = stringifiedObj + '"' + obj + '"';
    return stringifiedObj;
  }

  else if (obj === null) {
    stringifiedObj = stringifiedObj + "null";
    return stringifiedObj;
  }
  
  else if (Array.isArray(obj)) {
    if (obj.length === 0) {
      stringifiedObj = '[]';
      return stringifiedObj;
    }
    stringifiedObj = '[';
  }
 
  else if (typeof obj === "object" && obj !== null) {
    if (Object.keys(obj).length === 0) {
      stringifiedObj = '{}';
      return stringifiedObj;
    }
    stringifiedObj = '{';
  }

  else {
    return stringifiedObj;
  }
  
  // Iterate through each property in the object
  _.each(obj, function(value, key, collection) {
    if (typeof value !== "undefined" && typeof value !== "function" && !Array.isArray(collection)) {
      stringifiedObj = stringifiedObj + '"' + key + '":';
    }

    // create switch statement to handle various types of data
    var typeOfVal = typeof value;

    switch(typeOfVal) {
      case "string":
        stringifiedObj = stringifiedObj + '"' + value + '"';
        break;

      case "object":
        if (value === null) {
          stringifiedObj = stringifiedObj;
        }
        stringifiedObj = stringifiedObj + stringifyJSON(value);
        break;

      case "undefined":
        break;

      case "function":
        break;

      // case for numbers, booleans 
      default:
        stringifiedObj = stringifiedObj + value;
    }

    if (key === Object.keys(collection)[Object.keys(collection).length - 1]) {
      stringifiedObj = stringifiedObj + '}';
    }

    else if (typeOfVal === "undefined" || typeOfVal === "function") {
      stringifiedObj = stringifiedObj;
    }

    else if (Array.isArray(collection) && ((key === collection.length - 1) || collection.length === 0)) {
      stringifiedObj = stringifiedObj + ']';
    }

    else {  
      stringifiedObj = stringifiedObj + ',';
    }
  });

  return stringifiedObj;
};
