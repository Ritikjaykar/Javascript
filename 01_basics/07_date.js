let mydate= new Date();
console.log(mydate.toString());  //=> Wed Dec 20 2023 18:41:58 GMT+0000
console.log(mydate.toDateString()); //=>Wed Dec 20 2023
console.log(mydate.toLocaleString()); //=>12/20/2023, 6:41:58 PM
console.log(typeof mydate);

let myCreateDate= new Date(2023,0,4);
console.log(myCreateDate.toLocaleString()); //=>1/4/2023, 12:00:00 AM

let createDate = new Date("12-21-2023");
console.log(createDate.toLocaleString()); // ==> 12/21/2023 12:00:00 AM
console.log(createDate.getTime());


let myTimeStamp= Date.now();
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

