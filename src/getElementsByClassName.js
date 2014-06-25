// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// Want to return an array-like object of child elements which have the given class name.
// Can be used starting with document, to return ALL elements with class name, or on a specific element, to get direct descendants.

var getElementsByClassName = function(className){
  // create empty array to store elements with className
  var results = [];

  // create inner recursive function
  var checkForClass = function(element) {
    var childNodes = element.children;

    // loop through each element and its nodes to check for className, pushing to results if there is a match
    _.each(childNodes, function(value) {
      if (value.classList.contains(className)) {
        results.push(value);
      }

      // if element has children, recurse.
      if (value.children.length > 0) {
        checkForClass(value);
      }
    });
  }
  
  // kick off initial run
  checkForClass(document);

  // return elements with className
  return results;
};