export interface Address {
  street?: string;
  state?: string;
  city: string;
  country: string;
}

export class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public address: Address,
    public name?: string,
    public addressStr?: string
  ) {
    this.name = `${this.firstName} ${this.lastName}`

    let {street = '', state = '', city, country} = this.address;
    if(street) street += ', ';
    if(state) state += ', ';
    this.addressStr = `${street}${city}, ${state}${country}`;
  }
};

export interface Skill {
  name: string;
  desc: string;
}

export interface Hero {
  name: string;
  desc: string;
  person: Person;
  skills: Skill[];
}
