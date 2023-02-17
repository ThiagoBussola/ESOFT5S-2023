import { Request, Response } from 'express'

class HealthCheckController{
    public async check(req: Request, res: Response) {
        return res.json('Hello World')
    }
}

export default new HealthCheckController()