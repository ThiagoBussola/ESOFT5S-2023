import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    public constructor() {
        this.express = express()

        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void {
        this.express.use(express.json())
    }

    public routes(): void {
        this.express.use(routes)
    }

    private async database() {
        try {
            mongoose.set("strictQuery", true)
            await mongoose.connect('mongodb://0.0.0.0:27017/esoft5s')
            console.log('Connect database success')
        } catch (err) {
            console.error('Connect database fail, error: ', err)
        }
    }
}
export default new App().express