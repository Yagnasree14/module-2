//Creating an object using object literal notation
const person = {
    firstName: "John",
    lastName:"Doe",
    age:30,
    occupation:"Engineer",
    //Method inside the object
    sayHello: function()
    {
        console.log( `Hello , my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old`);

    },
};
//Accesing object properties
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.occupation);
//Calling the method of the object
person.sayHello();