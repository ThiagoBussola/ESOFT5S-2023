import {Schema, model} from 'mongoose'

const bookSchema = new Schema({
    title: String,
    author: String,
    ISBN: String
})

export default model('Books', bookSchema)