let myName: string = "Dat";
myName.toLowerCase();
let myName2: string = myName.toLowerCase();
console.log(myName); // Dat - the string method didn't mutate the string
console.log(myName2);

let myNumber: number = 10;
myNumber.toString();
let myNumber2: string = myNumber.toString();
console.log(myNumber);
console.log(typeof myNumber);
console.log(myNumber2);
console.log(typeof myNumber2);
