import { ICreateVacancyRequestDTO } from "../../useCases/createVacancy/ICreateVacancyRequestDTO"
import { Vacancy } from "./Vacancy"

export class VacancyFactory {
    static create() { 
        return new Vacancy()
    }

    static createWith(data: ICreateVacancyRequestDTO): ICreateVacancyRequestDTO {
        return new Vacancy(data)
    }
}