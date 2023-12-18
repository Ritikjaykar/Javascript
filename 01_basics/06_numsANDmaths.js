const num=199;
// console.log(num);

const score= new Number(199)
// console.log(score);

// console.log(score.toString().length);
// console.log(score.toFixed(5));

const number = 123.446

// console.log(number.toPrecision(5));

const hundreds =1000000;
// console.log(hundreds.toLocaleString(`en-IN`));


// +++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.6));
// console.log(Math.ceil(9.6));
// console.log(Math.floor(4.9));
// console.log(Math.min(5,8,9,0));
// console.log(Math.max(5,8,9,0));

console.log(Math.random());
console.log(Math.random()*10 + 1);  //=> +1 0 ko na lane ke liye hai aur *10  0 to 9 lane ke liye
console.log(Math.floor(Math.random()*10 +1));

const min=10;
const max =20;

console.log((Math.floor(Math.random()*(max - min +1)+min)));