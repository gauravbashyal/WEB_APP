// Write a program to calculate the factorial of a number using:for loop and while loop

// Using for loop
let n=5;
let factorial=1;
for(let i=1;i<=n;i++){
    factorial*=i;
}
console.log("factorial using for loop is "+factorial);

// Using while loop
let i=1;
factorial=1;
while(i<=n){
    factorial*=i;
    i++;
}
console.log("factorial using while loop is "+factorial);