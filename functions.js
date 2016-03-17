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
