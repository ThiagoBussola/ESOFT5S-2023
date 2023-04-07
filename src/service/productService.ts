import { writeFile, readFile } from 'fs/promises'
class ProductService {

    async createProductList(data) {
        try {
            await writeFile('products.json', JSON.stringify(data, null, 2))
            
        } catch (error) {
            throw new Error(error)
        }
    }

    async listProducts() {
        const productList = await readFile('products.json', "utf-8")

        return JSON.parse(productList)
    }

    async getStock() {
        const productList = await this.listProducts()

        const stockProducts = productList.map(item => {
            let stock = {
                nome: item.nome,
                qtde: item.qtde,
                preco: item.preco,
                valor_stock: item.qtde * item.preco
            }
            return stock
        })

        return stockProducts
    }
}

export default new ProductService()