// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// NOTES ABOUT JSON.stringify():
// All keys in objects are returned in quotations.
// All values in objects are returned as fed-in (strings don't have double quotes, numbers, etc. don't have single quotes).
// Returns a string!

var stringifyJSON = function(obj) {
  // Create starting point for string
  var stringifiedObj = '{';
  
  // Iterate through each property in the object
  _.each(obj, function(value, key, collection) {
    // add key in quotations
    if (typeof value !== "undefined") {
      stringifiedObj = stringifiedObj + '"' + key + '":';
    }
    
    // create switch statement to handle various types of data
    var typeOfVal = typeof value;

    switch(typeOfVal) {
      case "string":
        stringifiedObj = stringifiedObj + '"' + value + '"';
        break;

      case "object":
          stringifiedObj = stringifiedObj + stringifyJSON(value);
        break;

      case "undefined":
        break;

      // case for numbers, booleans 
      default:
        stringifiedObj = stringifiedObj + value;
    }

    if (key === Object.keys(collection)[Object.keys(collection).length - 1]) {
      stringifiedObj = stringifiedObj + '}';
    }

    else {
      stringifiedObj = stringifiedObj + ',';
    }
  });
 
  return stringifiedObj;
};






var contact = new Object();
contact.firstname = "Jesper";
contact.surname = "Aaberg";
contact.phone = ["555-0100", "555-0120"];

var testObj = { 
  test1: "Jonathan", 
  test2: 234, 
  test3: "Test", 
  test4: { newtest1: "JJ", newtest2: "JJJ" }, 
  test5: [1,2,3,"Jonathan"] 
};

var person = {
    name: "Jim Cowart",
    location: {
        city: {
            name: "Chattanooga",
            population: 167674
        },
        state: {
            name: "Tennessee",
            abbreviation: "TN",
            population: 6403000
        }
    },
    company: "appendTo",
};

// returns {"name":"Jim Cowart","location":{"city":{"name":"Chattanooga","population":167674},"state":{"name":"Tennessee","abbreviation":"TN","population":6403000}},"company":"appendTo"}


// returns {"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}
