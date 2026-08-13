// Show the difference between var, let and const inside a loop.
// Using var
for (var i = 1; i <= 3; i++) {
    console.log(i);
}
console.log("After loop:", i);

// Using let
for(let j=0;j<3;j++){
    console.log("let inside loop: "+j);
}                   //let le outside ma kam gardina
//console.log("let outside loop: "+j); 

// Using const
for(const i=0;i<3;i++){
    console.log("const inside loop: "+i);
}
// console.log("const outside loop: "+i); 
//const le loop vitra pani change gardina