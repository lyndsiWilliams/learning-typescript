/* 
//---------- Types ----------

let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = '20';

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(7.5));


// ---------- Arrays ----------
let names = ['luigi', 'mario', 'yoshi'];

names.push('toad');

let numbers = [10, 20, 30, 40];

// Must declare type of mixed array at declaration, otherwise it can only be one type
let mixed = ['ken', 4, 'chun-li', 8, 9];

mixed.push('ryu');
mixed.push(10);


// ---------- Objects ----------
// Must declare types at declaration, that value is now strictly that type
let ninja = {
  name: 'mario',
  belt: 'black',
  age: 30
};

// Can overwrite old object with new info, but it must be in the exact same structure as the original object
ninja = {
  name: 'yoshi',
  belt: 'yellow',
  age: 40
};


// ---------- Explicit types ----------
// You can declare the type of the variable without giving it a value with a colon
let character: string;
let age: number;
let isLoggedIn: boolean;


// ---------- Arrays ----------
// With arrays, you've got to put the type before []
// This array is still undefined as far as value goes, but the type is declared
let ninjas: string[]

// This method will declare the type and initiate it as an empty array, not undefined
let ninjasDeclared: string[] = []


// ---------- Union types ----------
// Use (this|method) to declare mixed types
let mixed: (string|number|boolean)[] = []

// You don't need parenthesis if you're giving a variable a union type
let uid: string|number;


// ---------- Objects ----------
// Declare it as an object and it can have mixed types as you declare the first instance
// An array is technically a type of object so you could declare this as an array
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 }

// This is how you assign types to the specific values in an object
let ninjaTwo: {
  name: string,
  age: number,
  beltColor: string
};


// ---------- Any type ----------
// If you set the type as any, the value can change types
// This is the shapeshifter type, it's what JS does
// - use this sparingly, because it defeating the purpose of TS (which is safety in type declaration AKA more efficient errors)

// Example: set the type of age as any, and declare it as 25
let age: any = 25;

// You can change this to a boolean/string/whatever you want now if you want
age = true;
age = 'hello';
age = { name: 'luigi' };

// Works with arrays like so
let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);

// Works with objects like so
let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
ninja = { name: 25, age: 'yoshi' };  // This is the error stuff TS tries to avoid


// ---------- Functions ----------
// Both of these methods will declare greet as a function type

// let greet = () => {
//   console.log("Hello, world!");
// };

let greet: Function;  // Note: All types are capitalized

// This variable function can now be altered, but will always live in the greet variable
// and greet will always be a Function type
greet = () => {
  console.log('Hello, again!')
};

// A ? after parameter name makes it an optional parameter
//    - optional parameter returns undefined when nothing is passed through
// UNLESS it's given a default value
//    - then it's value will become the default value until something passed in replaces it
//    - this makes it also an optional parameter
// Always do required parameters first, optional last
const add = (a: number, b: number = 10, c?: number|string) => {
  console.log(a + b);
};

add(5, 10);

const minus = (a: number, b: number) => {
  return a + b;
}

// In cases like below, TS will infer the type based off of what's returned
let result = minus(10, 7);
// Since this returns a number, reassigning the type like so would not work:
// result = 'something else'

// You can also infer the result yourself like so:
const structuredMinus = (a: number, b: number): number => {
  return a + b;
}

// If a function has no return, the inferred type is 'void' (hover voidFunc to see type)
const voidFunc = () => {
  console.log('This function is type: void');
};


// ---------- Type Aliases ----------
// Keep code DRY with type aliases like so:
type stringOrNum = string | number;
type objWithName = { name: string, uid: stringOrNum };

const logDetails = (uid: stringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};


// ---------- Function Signatures ----------
// Basic function type -- let greet: Function;
// Advances function type:

// Example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
};

// Example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  };
};

// Example 3
type person = { name: string, age: number }

let logDetails: (obj: person) => void;

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};
*/