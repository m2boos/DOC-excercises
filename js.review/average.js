var states = [
  "Alabama",
  "California",
  "Connecticut",
  "District of Columbia",
  "Maine",
  "Minnesota"
];

var numEmployees = [
  234726,
  1111812,
  157363,
  1275,
  46741,
  288583
];

// annualPay expressed in thousands of dollars
var annualPay = [
  11759599,
  69487378,
  10586486,
  56900,
  2477958,
  16119212
]

var averageSalary = [];
var average;

for (var i = 0; i < annualPay.length; i++){
  average = getaverage(annualPay[i], numEmployees[i])
  average = +average.toFixed(2)
  averageSalary.push(average)
  console.log(averageSalary)
}
for (var i = 0; i < annualPay.length; i++){
  console.log(states[i] + ":" + averageSalary[i])
}

function getaverage (total, divisor){
  return total/divisor
};
