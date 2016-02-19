// A program that displays all numbers. If the number being displayed is a multiple of 3, it will display "fizz". If it is a multiple of 5, it will display "buzz"
// grab numbers 1 - 100
//   if number/3 is integer
//     display "fizz"
//   else if number/5 is integer
//     display "Buzz"
//   else if display number
// go to the next number

var i = 1;
for(var i = 1; i <= 100; i++){
  if (i / 3 > 0 ){
  console.log("fizz")
  }
  else if (i / 5 > 0){
  console.log("buzz")
  }
  else {
    console.log(i)
  }
}
