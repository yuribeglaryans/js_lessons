// Function declartion
// arguments (a, b)
function foo(a, b) {
    // var sum = 45;
    // console.log(sum);
    return a + b;
  }
  let value = foo(5, 9);
  //console.log(value); // parameters
  
  let num = 56;
  // Function exprestion
  let bar = function (a, b) {
    let num = "Hello";
    console.log(num, "this is num value");
    return a - b;
  };
  
  console.log(bar(52, 43));