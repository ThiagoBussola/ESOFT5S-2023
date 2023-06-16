async function getPokemon() {
    const response = await fetch('http://localhost:3000/pokemons-data')
    const pokemonArray = await response.json()

    const container = document.getElementById("container");


    pokemonArray.forEach((pokemon) => {
        const card = document.createElement("div")
        card.classList.add("card")

        const image = document.createElement("img");
        image.src = pokemon.imgUrl
 
        const nameElement = document.createElement("h2")
        nameElement.textContent = pokemon.name

        const dexElement = document.createElement("p")
        dexElement.textContent = pokemon.dex

        const versionElement = document.createElement("p")
        versionElement.textContent = pokemon.version

        const heightElement = document.createElement("p")
        heightElement.textContent = pokemon.height

        const weightElement = document.createElement("p")
        weightElement.textContent = pokemon.weight

        card.appendChild(image)
        card.appendChild(nameElement)
        card.appendChild(dexElement)
        card.appendChild(versionElement)
        card.appendChild(heightElement)
        card.appendChild(weightElement)

        container.appendChild(card)
    })

}

getPokemon();