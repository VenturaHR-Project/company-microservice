import mongoose, { Document, Schema } from "mongoose"
import { HiringPeriod } from "../enum/ HiringPeriod"
import { JobType } from "../enum/JobType"
import { Profile } from "../enum/Profile"
import { VacancyStatus } from "../enum/VacancyStatus"

type ExpectedSkills = {
    description: String
    profile: Profile
    height: Number
}

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
    expectedSkills: ExpectedSkills
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
        default: VacancyStatus.Published
    },
    expectedSkills: [{
        description: {
            type: String,
            require: true,
            trim: true
        },
        profile: {
            type: Profile,
            require: true,
            trim: true
        },
        height: {
            type: Number,
            require: true,
            min: 1,
            max: 5
        },
    }],
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

export { Vacancy, ExpectedSkills }
