// Primitive

// 7 types: string, boolean, symbol, undefined, null,number, BigInt

const score=100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherId);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubeName ="Ritik"
let secondName = myYoutubeName
myYoutubeName="Jaykar"

console.log(myYoutubeName);
console.log(secondName);

let UserOne={
    email: "xyz@gmail.com",
    upi: "xyz@ybl"
}

let UserTwo= UserOne;

UserTwo.email="Ritik@gmail.com";

console.log(UserOne);
console.log(UserTwo);