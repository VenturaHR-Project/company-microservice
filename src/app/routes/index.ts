import { Router } from "express"
import { createVacancyController } from "../../useCases/createVacancy"
import { fetchVacanciesController } from "../../useCases/fetchVacancies"
import { fetchVacanciesByCompanyController } from "../../useCases/fetchVacanciesByCompany"

const routes = Router()

routes.post("/companys", (request, response) => {
    return createVacancyController.handle(request, response)
})

routes.get("/companys", (request, response) => {
    return fetchVacanciesController.handle(request, response)
})

routes.get("/companys/:company", (request, response) => {
    return fetchVacanciesByCompanyController.handle(request, response)
})

export default routes