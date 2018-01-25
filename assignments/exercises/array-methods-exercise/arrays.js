// the array.from() method creates a new array instance from an array-like or iterable object.

console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]



// th array.isArray() fucntion determines whether the passed value is an array.

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false



// the array.of method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]



// the concat() method is used to merge two or more arrays. This method does not change the existing arrays, but insetead returs a new array.

var array5 = ['a', 'b', 'c'];
var array6 = ['d', 'e', 'f'];

console.log(array5.concat(array6));
// expected output: Array ["a", "b", "c", "d", "e", "f"]




//the copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.

var vegetables2 = ["whoresauce", "beer", "punta", "dogppasta", "catpoop"]

// place at position 0 the elements after position 2
console.log(vegetables2.copyWithin(0, 2));

//place at postion 0 the element between postion 3 and 4
console.log(vegetables2.copyWithin(0, 3, 4));



// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

var dogs = ["nuno", "jack", "klondike"];

var iterator1 = dogs.entries();

console.log(iterator1.next().value);
console.log(iterator1.next().value);



// The every() method test whether all elements in the array pass the test implemented by the provided function.

function isBelowThreshold(currentValue){
    return currentValue < 40;
}

var thresh = [1, 50, 4, 5, 23, 23, 4];

console.log(thresh.every(isBelowThreshold));



// The fill() method fills all the elements of an array from a start index to an end index with a static value.

var bands = ["extrme", "rhcp", "janes addiction", "disturbed", "slipknot"]

console.log(bands.fill("janes", 3, 5));

console.log(bands.fill("whore", 2));

console.log(bands.fill("poop"));



// The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var specialDogs = ['nuno', 'klumaduh', 'ruba', 'jack', 'botman'];

const result = specialDogs.filter(dog => dog.length <= 4);

console.log(result);



// the find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// the findIndex() method returns the index of the first element in the array that safisfies the provided testing function. Otherwise -1 is returned.

var cats = ['henry', 'doug', 'chun', 'pen'];

var four = cats.find(function(element){
    return element.length <= 4;
});

console.log(four);

function findPen(pen){
    return pen.length <= 3;
}

console.log(cats.findIndex(findPen));

// the forEach() method executes a provided function once for each array element.

function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
  }
  
  // Notice that index 2 is skipped since there is no item at
  // that position in the array.
  [2, 5, , 9].forEach(logArrayElements);



  // the includes() method determines whether an array includes a certain element, returning ture of false as apporpriate.

  var whores = ['shanda', 'jessica', 'molly'];

  console.log(whores.includes('shanda'));



  // the indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

  var beasts = ["bloodstarved", "celestial", "gargoyle"];

  console.log(beasts.indexOf('bloodstarved'));



  // the join() method joins all elements of an array (or an array-like object) into a string and returns the string.

  var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
// expected output: Fire,Wind,Rain

console.log(elements.join(''));
// expected output: FireWindRain

console.log(elements.join('-'));
// expected output: Fire-Wind-Rain



// the keys() method returns a new Array Iterator object that contains the keys for each index in the array.

var arr = ['a', , 'c'];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys);  // [0, 1, 2]



// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

var hoes = ['shanda', 'molly', 'peter', 'shanda'];

console.log(hoes.lastIndexOf('shanda'));



// the map() method creates a new array with the results of calling a provided function on every element in the calling array.

var addWhore = ["shanda", 'peter', 'kimberly'];

const map1 = addWhore.map(w => w + " is a whore.");

console.log(map1);



// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage"]



// the push() method adds one or more elements to the end of an array and returns the new length of the array. 

var animals = ['pigs', 'goats', 'sheep'];

console.log(animals.push('cows'));
// expected output: 4

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');

console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]



// the reduce() method applies a function against an accumulator and each element in the array(from left to right) to reduce it to a single value.

const bitches = [5, 4, 5];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(bitches.reduce(reducer, 5));



// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (previousValue, currentValue) => previousValue.concat(currentValue)
  );
  
  console.log(array1);
  // expected output: Array [4, 5, 2, 3, 0, 1]



// the reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

var a = ['one', 'two', 'three'];
a.reverse(); 

console.log(a); // ['three', 'two', 'one']



// the shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

var array2 = [1, 2, 3];

var firstElement = array2.shift();

console.log(array2);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1



// the slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end(end not included). The original array will not be modified.

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]



// the some() method tests whether at least one element in the array passes the test implemented by the provided function. 

var array3 = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array3.some(even));
// expected output: true



// the sort() method sorts the elements of an array in place and returns the array.

var months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

var array4 = [1, 30, 4, 21];
array4.sort();
console.log(array4);
// expected output: Array [1, 21, 30, 4]



// the splice() method changes the contents of an array by rmoving existing elements and/ or adding new elements.

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

myFish.splice(3, 1); // remove 1 item at 2-index position (that is, "drum")
// myFish is ["angel", "clown", "mandarin", "sturgeon"]

console.log(myFish);

// the toLocaleString() method returns a string representing the elements of the array. the elements are converted to Strings using their toLocaleString methods and these Strings are seperated by a locale-specific String (such as a comma ",").



var number = 1337;
var date = new Date();
var myArr = [number, date, 'foo'];

var str = myArr.toLocaleString(); 

console.log(str); 
// logs '1337,6.12.2013 19:37:35,foo'
// if run in a German (de-DE) locale with timezone Europe/Berlin



// the toString() method returns a string representing the specified array and its elements. 

var months = [1, 'Feb', 'Mar', 'Apr'];
months.toString(); // "Jan,Feb,Mar,Apr"

console.log(months);



// the unshift method adds one or more elements to the beggining of an array and returns the new length of the array.

var a = [1, 2, 3];
a.unshift(4, 5);

console.log(a); // [4, 5, 1, 2, 3]



