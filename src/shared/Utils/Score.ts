import { ExpectedSkills } from "../../domain/entities/Vacancy/Vacancy";

export class Score {
    static calculate(skills: ExpectedSkills[]): number {
        let leftValue: number = 0
        let rightValue: number = 0
        let result: number = 0

        skills.forEach(skill => {
            const profile = skill.desiredMinimumProfile
            const height = skill.height
            let multipliedValues = profile * height
            
            leftValue += multipliedValues
            rightValue += height
        });
        result = leftValue / rightValue
        result = parseFloat(result.toFixed(2))
        return result
    }
}