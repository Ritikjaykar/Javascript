const name = "Ritik";
const repoCount= 33;

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =new String(`Ritik-RJ-com`);

/*
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
*/

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString =gameName.slice(-8,2);
console.log(anotherString);

const newStringOne = "   Ritik    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Ritik.com/hitesh%20jaykar"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));