/**
 * company: string,
 * country: string,
 * year: number
 */

class CreateCarService {
  execute(company: string, country: string, year: number) {
    console.log(company, country, year);
  }
}

export default new CreateCarService();
