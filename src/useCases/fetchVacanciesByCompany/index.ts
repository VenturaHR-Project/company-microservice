import { CompanyRepository } from "../../repository/implementations/CompanyRepository"
import { FetchVacanciesByCompanyController } from "./FetchVancanciesByCompanyController"
import { FetchVacanciesByCompanyUseCase } from "./FetchVancanciesByCompanyUseCase"

const companyRepository = new CompanyRepository()
const fetchVacanciesByCompanyUseCase = new FetchVacanciesByCompanyUseCase(companyRepository)
const fetchVacanciesByCompanyController = new FetchVacanciesByCompanyController(fetchVacanciesByCompanyUseCase) 

export { fetchVacanciesByCompanyUseCase, fetchVacanciesByCompanyController }