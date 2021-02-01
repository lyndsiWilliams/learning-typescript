/*
// TS doesn't know if the anchor tag actually exists before compilation
// Trying to access this will result in an error unless you either:
// - Use an ! at the end
const anchor = document.querySelector('a')!;
console.log(anchor.href);
// OR
// - Use conditional rendering
if (anchor){
    console.log(anchor.href);
};
*/

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

/*
// ---------- Interfaces ----------
// Used to enforce a structure within classes/objects
// There is no interface to create an "IsPerson"
// - This is literally a filter to set structure
interface IsPerson {
  name: string;
  age: number;

  speak(a: string): void;
  spend(a: number): number;
};

const me: IsPerson = {
  name: 'Lyndsi',
  age: 30,

  // These can change as long as they stay in structure
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  }
};

const greetPerson = (person: IsPerson) => {
  console.log('Hello ', person.name);
};

greetPerson(me)

console.log(me)

// ---------- Modules ----------
// Only modern browsers support this
// Import the JS file, not TS
import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

let documentOne: HasFormatter;
let documentTwo: HasFormatter;

documentOne = new Invoice('Yoshi', 'Web work', 250);
documentTwo = new Payment('Mario', 'Plumbing work', 200);

let docs: HasFormatter[] = [];

docs.push(documentOne);
docs.push(documentTwo);

console.log(docs);

const invoiceOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invoiceTwo = new Invoice('Luigi', 'Work on the Luigi website', 300);

// This array can now only have Invoice types
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

You can change these objects with dot notation
invoiceOne.client = 'Yoshi';
invoiceTwo.amount = 400;

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});
*/

// ---------- Type Casting ----------
// If you need to grab something specific that TS can't predetermine, you can tell TS what it is like so:
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber]

  let doc: HasFormatter;

  if(type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  };

  list.render(doc, type.value, 'start');
});

/*
// ---------- Generics ----------
// Generics enable things to be passed as wild cards - defined elsewhere
// <T> captures which properties are passed in, otherwise it doesn't know
// - It's like props but for structure
// "extends" will tell how the obj should be structured
// - otherwise you can pass anything, refuting the purpose of TS
// - <T extends structureGoes: here>
 const addUID = <T extends {name: string}>(obj: T) => {
   let uid = Math.floor(Math.random() * 100);
   return {...obj, uid};
 };

 let docOne = addUID({ name: 'Yoshi', age: 40 });

 console.log(docOne);

 // With interfaces:
 // This makes data's type flexible, it assigns the type at Resource construction
 interface Resource<T> {
   uid: number;
   resourceName: string;
   data: T;
 };

 const docThree: Resource<object> = {
   uid: 1,
   resourceName: 'person',
   data: { name: 'shaun' }
 };

 const docFour: Resource<string[]> = {
   uid: 2,
   resourceName: 'shoppingList',
   data: ['bread', 'milk', 'toilet paper']
 };

 console.log(docThree, docFour);


// ---------- Enums ----------
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'Name of the Wind' }
}
const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.PERSON,
  data: { name: 'Yoshi' }
}

console.log(docOne, docTwo);
*/

// ---------- Tuples ----------
// Structure for arrays = types are fixed upon initialization

let arr = ['Ryu', 25, true];
arr[0] = false;
arr[1] = 'Yoshi';
arr = [30, false, 'Yoshi'];

let tup: [string, number, boolean] = ['Ryu', 25, true]