import { CompanyRepository } from "../../repository/implementations/CompanyRepository";
import { CreateVacancyController } from "./CreateVacancyController";
import { CreateVacancyUseCase } from "./CreateVacancyUseCase";

const companyRepository = new CompanyRepository()
const createVacancyUseCase = new CreateVacancyUseCase(companyRepository)
const createVacancyController = new CreateVacancyController(createVacancyUseCase)

export { createVacancyUseCase, createVacancyController };

