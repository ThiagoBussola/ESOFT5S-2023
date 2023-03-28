import User from "../schemas/User";

import { writeFile, readFile } from 'fs/promises'

class ProductService {

    async createProduct(data) {
        try {

            await writeFile('products.json', JSON.stringify(data))
    
        } catch(err) {
            console.error('Failed to create a product file', err)
        }

        finally {
            return
        }
    }

    async findProducts() {
        try {
            
            const products = await readFile('products.json', "utf-8")

            

            return JSON.parse(products)
    
        } catch(err) {
            console.error('Failed to find all products', err)
            return
        }
    }
}


export default new ProductService()