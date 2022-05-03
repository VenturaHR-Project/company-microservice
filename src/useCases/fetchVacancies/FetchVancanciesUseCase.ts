import { ICompanyRepository } from "../../repository/ICompanyRepository";
import { AppError } from "../../shared/error/AppError";

export class FetchVacanciesUseCase {
    constructor(
        private repository: ICompanyRepository
    ) {}

    async execute() {
        try {
            const vacancies = await this.repository.fetchVacancies()
            return vacancies  
        } catch (error) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}