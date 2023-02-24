// 14 - Estamos importando a Classe Router de express
import { Router } from 'express'
import healthCheckController from './controller/healthCheckController'
import userController from './controller/userController'

// 15 - Estamos criando uma constante chamada routes que recebe Router()
const routes = Router()

// 16 - Estamos utilizando o método get atraves da constante routes (que pertence a Router())
// e passando como parametro, o nome da rota, e o que ela deve executar ao ser chamada
routes.get('/health-check', healthCheckController.check)
routes.get('/users', userController.list)

// 17 - Estamos exportando a constante routes
export default routes