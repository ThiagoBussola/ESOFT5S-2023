import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './users/user.controller'

const routes = Router()

routes.get('/health-check', healthCheckController.check)
routes.post('/users', userController.create)
routes.get('/users', userController.list)
routes.get('/users/:id', userController.find)
routes.put('/users/:id', userController.update)
routes.delete('/users/:id', userController.delete)


// 17 - Estamos exportando a constante routes
export default routes