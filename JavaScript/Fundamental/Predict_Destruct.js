const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
// randomCar is now a string with ['Tesla'] in it
console.log(otherRandomCar)
// otherRandomCar is now a string with ['Mercedes'] in it
//without the , infront of the name the selection would be ['Tesla'] 



const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
let { name } = employee;
//Predict the output
console.log(name);
//Using a const to pull out a name out of the employee const wont work 
// Because by using const u are creating another key
// thust console.log(otherName) line is extra
// console.log(otherName);


const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
// it will print the output 12345
console.log(hashedPassword);
// It will print an undefine value because the key is not inside of const person

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
// this will be a false statment because 2 is not equal to 5 
console.log(first == third);
// this will be a true statment because 2 is equal to 2


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// the key value is set to 'value'
console.log(secondKey);
// the key value is set to [1,5,1,8,3,3]
console.log(secondKey[0]);
// the value 0 inside of secondKey is 1
console.log(willThisWork);
// 5 






