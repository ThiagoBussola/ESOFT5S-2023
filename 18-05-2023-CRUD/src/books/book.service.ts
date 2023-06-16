import BookModel from './book.schema'


export class BookService {

    public async create(book: any) {
        return await BookModel.create(book)
    }

    public async find() {
        return await BookModel.find()
    }

    public async findByTitle(title: any) {
        const findedBooks = await BookModel.find({title: title})

        const bookIncludes = findedBooks.includes()
        return bookIncludes
    }
}