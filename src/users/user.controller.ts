import {Request, Response} from 'express'
import { UserService } from './user.service'

class UserController {

    async create(req: Request, res: Response) {
        const user = await new UserService().create(req.body)

        return res.status(200).json(user)
    }

    async list(req: Request, res: Response) {
        const users = await new UserService().list()

        return res.status(200).json(users)
    }

    async find(req: Request, res: Response) {
        const user = await new UserService().find(req.params.id)

        return res.status(200).json(user)
    }

    async update(req: Request, res: Response) {
        const user = await new UserService().update(req.params.id, req.body)

        return res.status(200).json(user)
    }

    async delete(req: Request, res: Response) {
        await new UserService().delete(req.params.id)

        return res.status(200).json("Successfully deleted user!")
    }

    
}

export default new UserController()