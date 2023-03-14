const nums = [2, 4, 6, 8]

const dobro = numero => numero * 2


//console.log(nums.map(dobro))

//console.log(nums.map(numero => numero * 3))


const nomes = ['Ana', 'Bia', 'Lia', 'Rafa']

const letras = nomes.map(text => text[0])

console.log(letras)

const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.99 },
]

const produtos = carrinho.map(item => item.nome)

console.log(produtos)

const valor_total = carrinho.map(item => {
    let per_product = {
        ...item,
        valor: item.qtde * item.preco
    }

    return per_product
})

console.log(valor_total)