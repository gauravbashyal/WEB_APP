// Create an arrow function that returns an object and use template literals to print:    Hello, my name is ___ and I am ___ years old

const createPerson = (name, age) => ({ name, age });
const person = createPerson("Gaurav", 21);
console.log(`Hello, My Name is ${person.name} and I am ${person.age} Years Old`);