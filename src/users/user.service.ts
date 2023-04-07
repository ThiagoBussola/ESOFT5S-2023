import { UserType } from "./types/user.types";
import UserModel from './user.schema'

export class UserService {


    async create(user: UserType) {
        const createdUser = await UserModel.create(user)

        return createdUser
    }

    async list() {
        const userList = await UserModel.find()

        return userList
    }

    async findUser(id) {
        const user = await UserModel.findById(id)

        return user
    }

    async remove(id) {
       await UserModel.findByIdAndDelete(id)
    }
}