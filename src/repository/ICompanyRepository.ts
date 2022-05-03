import { Document } from "mongoose"
import { ICreateVacancyRequestDTO } from "../useCases/createVacancy/ICreateVacancyRequestDTO";

export interface ICompanyRepository {
    createVacancy(data: ICreateVacancyRequestDTO): Promise<void>
    fetchVacancies(): Promise<Document[]>
}