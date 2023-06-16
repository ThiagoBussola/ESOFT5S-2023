import express from 'express'
import mongoose from 'mongoose'
import { routes } from './routes'

class App {
    public express: express.Application

    constructor() {
        this.express = express()
        this.middleware() 
        this.database()
        this.routes()
    }

    private middleware(): void {
        this.express.use(express.json())
    }

    private async database() {
        try {
            await mongoose.connect('mongodb://0.0.0.0:27017/ESOFT5S-books');
            console.log('connect database success')
        } catch(err) {
            console.error('Fail to connect database')
        }
    }

    private routes(): void {
        this.express.use(routes)
    }
}

export default new App().express