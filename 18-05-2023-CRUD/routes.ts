import { Router } from 'express'
import bookController from './src/books/book.controller'

const routes = Router()

routes.post('/books', bookController.create)
routes.get('/books', bookController.find)
routes.get('/books/:title', bookController.findByTitle)

export {
    routes
}
