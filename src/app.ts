// // TS doesn't know if the anchor tag actually exists before compilation
// // Trying to access this will result in an error unless you either:
// // - Use an ! at the end
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// // OR
// // - Use conditional rendering
// if (anchor){
//     console.log(anchor.href);
// };

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

const invoiceOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invoiceTwo = new Invoice('Luigi', 'Work on the Luigi website', 300);

// This array can now only have Invoice types
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

// You can change these objects with dot notation
// invoiceOne.client = 'Yoshi';
// invoiceTwo.amount = 400;

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format());
});


// ---------- Type Casting ----------
// If you need to grab something specific that TS can't predetermine, you can tell TS what it is like so:
const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
});