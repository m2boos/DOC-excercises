var student1 = {
  class: "DoC",
  city: "Arlington",
  firstname: "Carlos",
  gender: "male",
  age: 40,
  statesWorked: ["DC", "VA", "CT"]
}

var student2 = { class: 'DoC',
  city: 'Washington',
  firstname: 'Jane',
  age: 27,
  statesWorked: [ 'DC', 'OR', 'CA' ],
  gender: 'female' }

function studentInfo(student) {
  console.log(student.firstname + " is " + student.age + " and lives in " + student.city);
};

// build an array with both students
var students = [];
students.push(student1);
students.push(student2);
console.log(students);

// then iterate / loop over the array
// for each student, call the studentInfo method for that student
for (var i = 0; students.length < 2; i++){
  studentInfo(students[i])
}
