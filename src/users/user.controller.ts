import {Request, Response} from 'express'
import { UserService } from './user.service'

class UserController {

    async create(req: Request, res: Response) {
        const user = await new UserService().create(req.body)

        return res.status(200).json(user)
    }
}

export default new UserController()