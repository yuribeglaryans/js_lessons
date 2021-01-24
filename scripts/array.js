var arr = [6, 45, 5, 5];
var arr1 = new Array("hi");
var arr2 = new Array(5);
var arr3 = Array.of(2);
//var listItems = document.querySelectorAll("li");
//console.log(listItems);
var arr4 = Array.from("Hello");
//console.log(arr4);
// Adds element to the array from the end
arr.push(56);
//console.log(arr);
// Remove element from the array in the end
arr.pop();
//console.log(arr);
// Adds element to the array in the beginning
arr.unshift("hello");
//console.log(arr);
// Remove first element of the array
arr.shift();
//console.log(arr);
var index = arr.indexOf(5);
//console.log(index);
var lastIndex = arr.lastIndexOf(5);
//console.log(lastIndex);
var concatedArr = arr.concat(arr4);
console.log(concatedArr);