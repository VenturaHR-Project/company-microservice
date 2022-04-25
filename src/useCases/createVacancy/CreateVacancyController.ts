import { Request, Response } from "express"
import { AppError } from "../../shared/error/AppError"
import { CreateVacancyUseCase } from "./CreateVacancyUseCase"

export class CreateVacancyController {
    constructor(
        private createVacancyUseCase: CreateVacancyUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            await this.createVacancyUseCase.execute(request.body)
            return response.status(201).json({ message: 'Vacancy created with success' });
        } catch (error) {
            if (error instanceof AppError) {
                return response.status(error.status).json({
                    message: error.message
                })
            }
        }
    }
}