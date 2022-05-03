import { CompanyRepository } from "../../repository/implementations/CompanyRepository"
import { FetchVacanciesController } from "./FetchVancanciesController"
import { FetchVacanciesUseCase } from "./FetchVancanciesUseCase"

const companyRepository = new CompanyRepository()
const fetchVacanciesUseCase = new FetchVacanciesUseCase(companyRepository)
const fetchVacanciesController= new FetchVacanciesController(fetchVacanciesUseCase) 

export { fetchVacanciesUseCase, fetchVacanciesController }