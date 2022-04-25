import { HiringPeriod } from "../../domain/enum/ HiringPeriod"
import { JobType } from "../../domain/enum/JobType"
import { VacancyStatus } from "../../domain/enum/VacancyStatus"

export interface ICreateVacancyRequestDTO{
    uid: string
    ocupation: string
    description: string
    company: string
    state: string
    city: string
    jobType: JobType
    hiringPeriod: HiringPeriod
    status: VacancyStatus
    createdAt: string
    expiresAt: string
}