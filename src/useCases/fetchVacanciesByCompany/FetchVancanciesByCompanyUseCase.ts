import { ICompanyRepository } from "../../repository/ICompanyRepository";
import { AppError } from "../../shared/error/AppError";
import { IFetchVancanciesByCompanyRequestDTO } from "./IFetchVancanciesByCompanyRequestDTO";

export class FetchVacanciesByCompanyUseCase {
    constructor(
        private repository: ICompanyRepository
    ) {}

    async execute(data: IFetchVancanciesByCompanyRequestDTO) {
        try {
            const vacancies = await this.repository.fetchVacanciesByCompany(data.company)
            return vacancies  
        } catch (error) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}