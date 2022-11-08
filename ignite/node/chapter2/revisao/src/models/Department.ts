import { v4 as uuid } from "uuid";

class Department {
  id?: string;
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Department };
