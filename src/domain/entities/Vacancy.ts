import mongoose, { Document, Schema } from "mongoose"
import { HiringPeriod } from "../enum/ HiringPeriod"
import { JobType } from "../enum/JobType"
import { VacancyStatus } from "../enum/VacancyStatus"

interface IVancancy extends Document {
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

const schema = new Schema<IVancancy>({
    uid: {
        type: String,
        require: true,
        trim: true
    },
    ocupation: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    company: {
        type: String,
        require: true,
        trim: true
    },
    state: {
        type: String,
        require: true,
        trim: true
    },
    city: {
        type: String,
        require: true,
        trim: true
    },
    JobType: {
        type: JobType,
        require: true,
        trim: true
    },
    hiringPeriod: {
        type: HiringPeriod,
        require: true,
        trim: true
    },
    status: {
        type: VacancyStatus,
        require: true,
        trim: true,
        default: VacancyStatus.enabled
    },
    createdAt: {
        type: String,
        require: true,
        trim: true
    },
    expiresAt: {
        type: String,
        require: true,
        trim: true
    },
})

const Vacancy = mongoose.model("Vacancy", schema)

export { Vacancy }
