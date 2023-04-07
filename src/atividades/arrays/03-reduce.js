const numeros = [10, 20, 30, 40, 50];
let num = 5; 

const total = numeros.reduce((acc, item) => {
    return acc + item;
}, num);

//console.log(total);


const nomes = ['Ana', 'Bia', 'Carolina', 'Matheus', 'Vitor'];

const maiorNome = nomes.reduce((maiorNome, nomeAtual) =>{
    if(maiorNome.length  < nomeAtual.length){
        return nomeAtual;
    }

    return maiorNome;
}, '');

//console.log(maiorNome);

const pokemons = [
    {
        name: 'Pikachu',
        type: 'eletric'
    },
    {
        name: 'Elekid',
        type: 'eletric'
    },
    {
        name: 'Bulbassauro',
        type: 'grass'
    },
    {
        name: 'Chikorita',
        type: 'grass'
    },
]


const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
    
    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || []
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual)
    return pokemonsPorTipo

}, {})

// console.log(pokemonsPorTipo)