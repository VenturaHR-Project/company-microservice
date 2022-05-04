import { Document } from "mongoose"
import { Vacancy } from "../../domain/entities/Vacancy/Vacancy";
import { ICreateVacancyRequestDTO } from "../../useCases/createVacancy/ICreateVacancyRequestDTO";
import { ICompanyRepository } from "../ICompanyRepository";

export class CompanyRepository implements ICompanyRepository {
    async fetchVacanciesByCompany(company: string): Promise<Document[]> {
        const response = await Vacancy.find({ company })
        return response
    }

    async fetchVacancies(): Promise<Document[]>  {
        const response = await Vacancy.find()
        return response
    }

    async createVacancy(data: ICreateVacancyRequestDTO): Promise<void> {
        await Vacancy.create(data)
    }
}