const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99 },
    { nome: 'Impressora', qtde: 0, preco: 649.50 },
    { nome: 'Caderno', qtde: 4, preco: 27.10 },
    { nome: 'Lapis', qtde: 3, preco: 5.82 },
    { nome: 'Tesoura', qtde: 1, preco: 19.20 }
]

const getProdutosEmEstoque = carrinho.filter(item => item.qtde > 1).map(item => item.nome)

const getProdutoEspecifico = carrinho.find(item => item.qtde < 3)

const temEstoque = carrinho.every(item => item.qtde > 1)

// console.log(getProdutosEmEstoque)
// console.log(getProdutoEspecifico)

// console.log(temEstoque)