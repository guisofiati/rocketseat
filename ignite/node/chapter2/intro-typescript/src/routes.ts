import { Request, Response } from "express";
import CreateCarService from "./CreateCarService";

// colocando o conteudo em arquivo separado, para nao poluir o server.ts
export function createCar(request: Request, response: Response) {
  CreateCarService.execute("Toyota", "Japan", 2007); // "2007" -> erro

  return response.send();
}
