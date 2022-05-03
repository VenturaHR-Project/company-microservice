import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { FetchVacanciesUseCase } from "./FetchVancanciesUseCase"

export class FetchVacanciesController {
    constructor(
        private fetchVacanciesUseCase: FetchVacanciesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            const vacancies = await this.fetchVacanciesUseCase.execute()
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