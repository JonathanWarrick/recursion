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

  var checkForClass = function(element) {
    var childNodes = element.children;
    
    for (var i = 0; i < childNodes.length; i++) {
      if (childNodes[i].classList.contains(className)) {
        results.push(childNodes[i]);
      }

      if (childNodes[i].children.length > 0) {
        checkForClass(childNodes[i]);
      }
    }
  }
  
  checkForClass(document);
  return results;
};