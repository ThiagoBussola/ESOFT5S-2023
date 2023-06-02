import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    age: {
        type: Number
    }
}, {
    timestamps: true
})

export default model('User', UserSchema)