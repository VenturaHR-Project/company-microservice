import { Score } from "../../shared/Utils/Score"
import { ICompanyRepository } from "../../repository/ICompanyRepository"
import { AppError } from "../../shared/error/AppError"
import { ICreateVacancyRequestDTO } from "./ICreateVacancyRequestDTO"

export class CreateVacancyUseCase {
    constructor(
        private repository: ICompanyRepository
    ) { }

    async execute(data: ICreateVacancyRequestDTO) {
        data.score = Score.calculate(data.expectedSkills)

        try {
            await this.repository.createVacancy(data)
        } catch (error) {
            throw new AppError(400, "An unexpected error occurred")
        }
    }
}