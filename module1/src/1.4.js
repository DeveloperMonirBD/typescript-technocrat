"use strict";
// Basic Data Types
// string
let firstName = 'Monirul';
// number
let rollNumber = 123;
// boolean
let isAdmin = true;
// any
let d;
d = 123;
d = 'Monirul';
d = true;
d = [1, 2, 3, 4, 5];
d = ['Monirul', 'Sakib', 'Rafi'];
d = [1, 'Monirul', true];
d = [{ name: 'Monirul', age: 25 }, { name: 'Sakib', age: 30 }];
d = [1, 'Monirul', true, { name: 'Sakib', age: 30 }];
d = [1, 'Monirul', true, { name: 'Sakib', age: 30 }, [1, 2, 3]];
d = [1, 'Monirul', true, { name: 'Sakib', age: 30 }, [1, 2, 3], function () { console.log('Hello'); }];
let randomValu = 123;
// array
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
let names = ['Monirul', 'Sakib', 'Rafi'];
names.push('Read');
// tuple --> array --> order --> type of values
let user = [1, 5];
let userTuple = ["Monirul", 123];
let ageName = [28, "Mr.X", true];
ageName[0] = 20;
// enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
let direction = Direction.Up;
console.log(direction); // 1
// object
let userObject = {
    name: 'Monirul',
    age: 25
};
// void 
function logMessage(message) {
    console.log(message);
}
logMessage('Hello, World!');
// function with return type
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(5, 10);
//null and udefined
let x = undefined;
let y = null;
// never 
function throwError(message) {
    throw new Error(message);
}
throwError('This is an error message');
