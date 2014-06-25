// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Want to return an array-like object of child elements which have the given class name.
// Can be used starting with document, to return ALL elements with class name, or on a specific element, to get direct descendants.

var getElementsByClassName = function(className){
  // your code here
  var results = [];
  function checkForClass(element) {
  	var childNodes = element.childNodes;
  	_.each(childNodes, function(value, key, collection) {
  		if (_.contains(collection[key].classList, className)) {
  			results.push(collection);
  		};

  		if (collection.childNodes.length > 0) {
  			checkForClass(collection);
  		}
  	});
  }

  checkForClass(document);
  return results;
};
