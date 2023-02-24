// 18 - Estamos importando os TIPOS Request e Response do express
import { Request, Response } from 'express'

// 19 - Estamos criando a classe HealthCheckController
class HealthCheckController{
    // 20 - Estamos criando um método publico e assincrono chamado check
    // que recebe como parametro (inferido) uma req do tipo Request e uma res do tipo Response
    public async check(req: Request, res: Response) {
        // 21 - Estamos retornando um json escrito hello world para quem chamou este método
        return res.json('Hello World')
    }
}

// 22 - estamos exportando a classe já instanciada
export default new HealthCheckController()