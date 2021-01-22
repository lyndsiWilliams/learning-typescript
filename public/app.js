"use strict";
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
// ---------- Classes ----------
var Invoice = /** @class */ (function () {
    // Constructor gives each instance an initial value of the parameter passed in
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    ;
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details + ".";
    };
    ;
    return Invoice;
}());
;
var invoiceOne = new Invoice('Mario', 'Work on the Mario website', 250);
var invoiceTwo = new Invoice('Luigi', 'Work on the Luigi website', 300);
// This array can now only have Invoice types
var invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
console.log(invoices);
// You can change these objects with dot notation
invoiceOne.client = 'Yoshi';
invoiceTwo.amount = 400;
console.log(invoiceOne, invoiceTwo);
// ---------- Type Casting ----------
// If you need to grab something specific that TS can't predetermine, you can tell TS what it is like so:
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// Inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
