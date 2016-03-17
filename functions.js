// YOUR CODE HERE
sillySum(arr)

// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.
function sillySum(arr) {
  var count = 0;
  for (var i = 0; count < arr.length; i ++) {
    count += (count * arr[i]);
  }
}

var myArray = [1, 2, 3];
sillySum(myArray);


// Create a function that returns true if the number passed in is a prime number and false if not.
function isPrime(num) {
    if (num < 2) {
        return false;
    } for (var i = 2; i < num; i++) {
        if (num % i === 0){
            return false;
        }
   } return true;
}
isPrime(7);

// Write a function called filter that filters elements of an array based on a callback function.
// filter takes in an array and another function (a callback). The callback for filter will take in a number and return true or false (like isPrime does!). Your filter function should create a new array. The filter function should use the callback on each element of the original array. When the callback returns true for an element, filter should add that element to the new array. Make filter return the new array at the end!

// starter structure for our filter function
var filter = function(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i])
  }
}
filter ([0,1,2,3,4,5], console.log)
// arr = [0,1,2,3,4,5]
// callback = console.log
//disregard information above, using for reference


var filter = function(arr, callback) {
function isPrime(num) {
   if (num < 2) {
        return false;
   } for (var i = 2; i < num; i++) {
        if (num % i === 0){
            return false;
       }
     } return true;
   }
}

var newArray = [];
    if (isPrime()){
    newArray.push(i));
    }
    for (var i = 0;i < newArray.length; i++) {
        console.log(newArray.push(i));
    }

var isOdd = function(num) {
    return num % 2 !== 0;
}

filter ([0,1,2,3,4,5], isOdd);
// returns [1, 3, 5]

// you could also try using your isPrime function as the callback:
filter ([8,6,7,5,3,0,9], isPrime)
// returns [7,5,3]

var newArray = [];
for (var i = 0; i < newArray.length; i++){
  console.log(newArray(i));
}
