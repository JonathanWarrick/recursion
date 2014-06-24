// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// NOTES ABOUT JSON.stringify():
// All keys in objects are returned in quotations.
// All values in objects are returned as fed-in (strings don't have double quotes, numbers, etc. don't have single quotes).
// Returns a string!

var stringifyJSON = function(obj) {
  // your code goes here
  var stringifiedObj = '{';

  _.each(obj, function(value, key, collection) { 	
  	stringifiedObj = stringifiedObj + '"' + key + '":"' + value + '"';
 
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

// returns {"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}
