// Write a function using rest parameters that accepts any number of arguments and returns their product.

function multiply(...num) {
    let product = 1; // 
    for (let i = 0; i < num.length; i++) {
        product = product * num[i]; 
    }
    return product;
}

// Test the function
console.log(multiply(2, 3));        
console.log(multiply(1, 2, 3, 4));  
console.log(multiply(5));           
console.log(multiply());            