import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'


const routes = Router()

routes.get('/health-check', healthCheckController.check)

export default routes