// Loop through object properties using for...in.

const person = {
    name: "Gaurav",
    age: 21,
    city: "Dharan"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}