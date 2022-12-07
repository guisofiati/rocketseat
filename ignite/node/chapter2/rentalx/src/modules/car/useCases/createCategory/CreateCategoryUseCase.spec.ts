import { AppError } from "@errors/AppError";
import { CategoryRepositoryInMemory } from "@modules/car/repositories/in-memory/CategoryRepositoryInMemory";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

describe("Create category", () => {
  let categoryRepositoryInMemory: CategoryRepositoryInMemory;
  let createCategoryUseCase: CreateCategoryUseCase;

  beforeEach(() => {
    categoryRepositoryInMemory = new CategoryRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoryRepositoryInMemory,
    );
  });

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category test",
      description: "Category description test",
    };

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description,
    });

    const categoryCreated = await categoryRepositoryInMemory.findByName(
      category.name,
    );

    // console.log(categoryCreated);

    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with same name", async () => {
    expect(async () => {
      const category = {
        name: "Category test",
        description: "Category description test",
      };

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });

      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
