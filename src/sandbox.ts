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
*/