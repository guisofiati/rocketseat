/**
 * company: string,
 * country: string,
 * year: number
 */

interface Car {
  company: string;
  country?: string; // opcional
  year: number;
}

class CreateCarService {
  // execute(data: Car) {
  //   console.log(data.company, data.country, data.year); -> onde for chamado é so passar os argumentos
  // }
  execute({ country = "unknown", year, company }: Car) {
    console.log(company, country, year);
  }
}

export default new CreateCarService();
