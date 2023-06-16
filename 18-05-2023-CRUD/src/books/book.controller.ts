import {Request, Response} from 'express'
import { BookService } from './book.service'

class BookController {
   
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)

        return res.send(book)
    }

    async find(req: Request, res: Response) {
        const books = await new BookService().find()

        return res.send(books)
    }

    async findByTitle(req: Request, res: Response) {
        const book = await new BookService().findByTitle(req.params.title)

        return res.send(book)
    }
}

export default new BookController()