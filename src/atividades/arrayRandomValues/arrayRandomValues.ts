import {deepStrictEqual} from 'assert'
import { ErrorMessages } from './errorMessage.enum'
// dado um array de objetos
const produtos: any = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 },
    { nome: 'Mochila', qtde: 6, preco: 150.99 },
    { nome: 'Teclado', qtde: 4, preco: 500.99 },
    { nome: 'Mouse', qtde: 3, preco: 78.99 },
    { nome: 'Tenis', qtde: 2, preco: 350.99 },
    { nome: 'Meias', qtde: 10, preco: 19.99 },
]

// percorra esse array e retorne um novo array com 3 elementos aleatórios
// não podem existir valores repetidos no array


function getRandomValuesFromArray(array: any, randomQuantity: any) {
    if(randomQuantity > array.length) return ErrorMessages.INVALID_NUMBER_RANGE
    let randomProducts:any = []

    while(randomProducts.length < randomQuantity) {
        let randomNumber: any = Math.floor(Math.random() * array.length)
        if(!randomProducts.includes(array[randomNumber])) {
            randomProducts.push(array[randomNumber])
        }
    }
    return randomProducts
}



deepStrictEqual(getRandomValuesFromArray(produtos, 15), ErrorMessages.INVALID_NUMBER_RANGE)

//getRandomValuesFromArray(produtos, 4)


