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

var car = {
    model: "toyota",
    year: 2024,
    colour: "white",
    start: function(){
        console.log("the car " +  this.model)
    },
    stop: function (){
        console.log("the car has stoped");
    }
}
car.start()
car.stop()

var returnString = car.stop()
console.log(returnString)

let person = {
    firstName: "shoaib",
    lastName: "khan",
    age: 23,
    getFullName: function(){
       return this.firstName + " " + this.lastName;
    },
    celebratingBirthday: function(){
        this.age += 1;
        console.log("you are now " + this.age  + "year old")
    }
}

person.celebratingBirthday()
// console.log(person.getFullName())