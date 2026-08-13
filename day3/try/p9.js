// Remove duplicate elements from an array.

const numbers = [1, 2, 3, 3, 4, 1, 5];
const uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);