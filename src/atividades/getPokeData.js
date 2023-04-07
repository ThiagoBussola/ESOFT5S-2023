import {writeFile, readFile} from 'fs/promises'
class GetPokeData {
    async getPoke() {
        const pokeList = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")

        pokeList.json().then(resolve => {
            writeFile('pokeUrl.json', JSON.stringify(resolve.results, null, 2))
        })
    }

    async fetchAllPokemonData() {

        const pokeUrlList = JSON.parse(await readFile('pokeUrl.json', "utf-8"))


        const pokeList = pokeUrlList.map(async (pokemon) => {
            let url = pokemon.url

            const response = await fetch(url)
            const result = await response.json()

            const pokeStat = result.stats.map((statAtual) => {
                return {
                    statName: statAtual.stat.name,
                    value: statAtual.base_stat,
                }
            })

            function getRamdomValues(item) {
                const suffledArray = item.sort(() => Math.random() - 0.5)
                const result = suffledArray.slice(0,4)
                return result.map(obj => Object.assign({}, obj))
            }

            console.log(getRamdomValues(pokeStat))
            
            const pokeType = result.types.map(typeIn => {
                return typeIn.type.name
            })

            const PokeData = {
                name: result.forms[0].name,
                dex: result.game_indices[9].game_index,
                version: result.game_indices[9].version.name,
                height: result.height,
                weight: result.weight,
                stats: pokeStat,
                type: pokeType

            }

            return PokeData
        })


        const pokeListEsperada = await Promise.all(pokeList)

        pokeListEsperada.sort((a, b) => {
            return a.dex - b.dex
        })
        
        writeFile('pokedex.json', JSON.stringify(pokeListEsperada, null, 2))
    }
}



async function main() {
    //await new GetPokeData().getPoke()
    await new GetPokeData().fetchAllPokemonData()
    console.log(Math.floor(Math.random() * 10))
}

main()