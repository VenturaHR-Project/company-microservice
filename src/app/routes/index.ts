import { Router } from "express"
import { createVacancyController } from "../../useCases/createVacancy"

const routes = Router()

routes.post("/companys", (request, response) => {
    return createVacancyController.handle(request, response)
})

// routes.get("/users", (request, response) => {
//     return fetchUsersController.handle(request, response)
// })

// routes.get("/users/:_id", (request, response) => {
//     return fetchUserController.handle(request, response)
// })

// routes.put("/users/:_id", (request, response) => {
//     return editUserController.handle(request, response)
// })

// routes.put("/users/admin/:_id", (request, response) => {
//     return manageAccountStateController.handle(request, response)
// })

export default routes