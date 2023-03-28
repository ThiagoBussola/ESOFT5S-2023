import { Request, Response } from 'express'
import productService from '../service/productService'

class ProductController{    
    public async create(req: Request, res: Response) {
        const product = await productService.createProduct(req.body)

        return res.status(201).send(product)
    }

    public async find(req: Request, res: Response) {
        const products = await productService.findProducts()

        return res.json(products)
    }
}

export default new ProductController()