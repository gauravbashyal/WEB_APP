// Copy an object using the spread operator and modify one property.

const person = {
  name: "Gaurav",
  age: 21
};

const newPerson = {
  ...person,
  age: 22  
};

console.log("Original:", person);
console.log("Updated:", newPerson);