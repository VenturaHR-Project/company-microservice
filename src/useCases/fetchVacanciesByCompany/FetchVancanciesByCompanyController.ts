import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { FetchVacanciesByCompanyUseCase } from "./FetchVancanciesByCompanyUseCase"

export class FetchVacanciesByCompanyController {
    constructor(
        private fetchVacanciesByCompanyUseCase: FetchVacanciesByCompanyUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        const { company } = request.params

        try {
            const vacancies = await this.fetchVacanciesByCompanyUseCase.execute({ company })
            return response.json(vacancies)
        } catch (err) {
            if (err instanceof AppError) {
                return response.status(err.status).json({
                    message: err.message
                })
            }
        }
    }
}