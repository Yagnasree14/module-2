//Creating an object using constuctor function
function Car(make, model, year) {
    this.make=make;
    this.model = model;
    this. year = year;
}
//Craeting instances (objects) of the Car class
const car1 = new Car("Toyota", "Corolla", 2022);
const car2 = new Car("Honda", "Civic", 2021);

//Accessing object properties of car1 and car2
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
