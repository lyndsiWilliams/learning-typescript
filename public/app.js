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
;
const me = {
    name: 'Lyndsi',
    age: 30,
    // These can change as long as they stay in structure
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent ', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('Hello ', person.name);
};
greetPerson(me);
console.log(me);
// ---------- Modules ----------
// Only modern browsers support this
// Import the JS file, not TS
import { Invoice } from './classes/Invoice.js';
const invoiceOne = new Invoice('Mario', 'Work on the Mario website', 250);
const invoiceTwo = new Invoice('Luigi', 'Work on the Luigi website', 300);
// This array can now only have Invoice types
let invoices = [];
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
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
