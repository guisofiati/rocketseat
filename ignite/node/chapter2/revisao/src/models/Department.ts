import { v4 as uuid } from "uuid";

import { Employee } from "./Employee";

class Department {
  id?: string;
  name: string;
  employees: Employee[];

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Department };
