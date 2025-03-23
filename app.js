// let car = {}

// car.color = "white";
// car.year = 2024

// car.start = function(){
//     console.log("car has started");
// }

// car.start()


// let car = {
//     colour: "white",
//     year: 2024,
//     start: function () {
//        return "the car has started" 
//     }
// }
// console.log(car.start())
// let returnString = car.start()
// console.log(returnString)

// this keyword inside methods

// var car = {
//     model: "toyota",
//     year: 2024,
//     colour: "white",
//     start: function(){
//         console.log("the car " +  this.model)
//     },
//     stop: function (){
//         console.log("the car has stoped");
//     }
// }
// car.start()
// car.stop()

// var returnString = car.stop()
// console.log(returnString)

// let person = {
//     firstName: "shoaib",
//     lastName: "khan",
//     age: 23,
//     getFullName: function(){
//        return this.firstName + " " + this.lastName;
//     },
//     celebratingBirthday: function(){
//         this.age += 1;
//         console.log("you are now " + this.age + "year old")
//     }
// }

// person.celebratingBirthday()
// console.log(person.getFullName())

// function Car (color, model, year) {
//     this.color = color;
//     this.model = model;
//     this.year = year;
//     this.start = function (){
//         return this.model + " has started"
//     }
// }

// let car1 = new Car ("silver", "toyota", 2024);
// let car2 = new Car ("white", "honda", 2022);
// let car3 = new Car ("grey", "BMW", 2019);
// console.table([car1,car2,car3])
// console.log(car1.start())
// console.log(car2.start())
// console.log(car3.start())
// car1.start()
// car2.start()
// car3.start()






// HOW TO USE OBJECT IN CONSTRUCTOR

// function Person (firstName, lastName, age, ){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.sleep = function(){
//         console.log(firstName + " is sleeping");
//     }
//     this.jumping = function (){
//         console.log(firstName+ " is jumping");
//     }
// } 

// let person1 = new Person ("shoaib", "khan", 23);
// let person2 = new Person ("irfan", "khan", 21);
// let person3 = new Person ("Abdul", "Haseeb", 29);

// console.table([person1,person2,person3])

// person1.sleep()
// person2.jumping()





function Jet (color, model, year){
    this.color = color;
    this.model = model;
    this.year = year;
    this.flight = function(){
        return model + " Is Going to Flight";
    }
}

let jet1 = new Jet ("White", "JF 17 Thunder", 2025 );
let jet2 = new Jet ("silver", "F16 cd block 52", 2024);
let jet3 = new Jet ("blue", "Chandrayan", 2023);

console.table([jet1,jet1,jet3])
jet1.flight()
jet2.flight()
jet3.flight()

console.log(jet1.flight())


function Person (name, age){
    this.name = name;
    this.age = age;
}

// ADDING A METHOD TO THE PROTOTYPE
Person.prototype.greet = function(){
   console.log("hello my name is " + this.name + " and i am " + this.age + " years old");
}

// LET'S CREATE 5 OBJECTS PERSONS
let person1 = new Person ("shoaib", 23);
let person2 = new Person ("Ahmad", 19);
let person3 = new Person ("arslan", 24);
let person4 = new Person ("kashif", 41);
let person5 = new Person ("bilal", 33);

person1.greet()
person2.greet()
person3.greet()
person4.greet()
person5.greet()

console.table([person1,person2,person3,person4,person5])






function Child (name,age){
    this.name = name;
    this.age = age;
    this.play = function(){
        return this.name + " is playing"
    }
}

 Child.prototype.greet = function(){
    console.log("hello my name is " + this.name + " and i am " + this.age + " years old")
}

let child1 = new Child ("Umer", 12);
let child2 = new Child ("Abubakar", 10);
let child3 = new Child ("Usman", 11);


console.log(child1.play());
console.log(child2.play());
console.log(child3.play());
console.table(child1,child2,child3)


let animals = ["girafi", "cow", "goat"];
animals.unshift("cat")
console.log(animals)

function processingData(data){
    console.log("processing....." + "d")
}
processingData("hi")

