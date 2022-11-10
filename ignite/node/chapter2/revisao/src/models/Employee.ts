import { v4 as uuid } from "uuid";

class Employee {
  id?: string;
  name: string;
  lastName: string;
  age: number;
  gender: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Employee };
