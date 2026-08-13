// Sort an array of objects based on age or marks.
const students = [
    { name: "Gaurav", age: 21, marks: 80 },
    { name: "Ram", age: 22, marks: 90 },
    { name: "shyam", age: 23, marks: 85 }
];


students.sort(function(a, b) {
    return a.age - b.age;
});
console.log("Sorted by age:", students);

students.sort(function(a, b) {
    return b.marks - a.marks;
});
console.log("Sorted by marks:", students);