import { HasFormatter } from '../interfaces/HasFormatter.js';

// ---------- Classes ----------
export class Invoice implements HasFormatter {
  /* Access modifiers:
  - public: Anyone can access property outside of this class
  - private: Nobody can access property outside of this class
    - Can access inside, like in format()
  - readonly: Can read property from inside/outside class, but can't change it
  */
  // readonly client: string;
  // private details: string;
  // public amount: number;

  // Constructor gives each instance an initial value of the parameter passed in
  // constructor(c: string, d: string, a: number) {
  //   this.client = c;
  //   this.details = d;
  //   this.amount = a;
  // };

  // All of the above can be shorthanded like so:
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) {}

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}.`;
  };
};
