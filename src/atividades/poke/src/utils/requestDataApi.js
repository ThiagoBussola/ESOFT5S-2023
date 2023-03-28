import { read, write } from "./fileUtils.js";

export class RequestDataApi {
  async getAllPokeUrl() {
    const pokeApiResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );

    pokeApiResponse.json().then((result) => {
      write("allPokeUrl.json", result.results);
    });
  }

  async fetchAllPokemonData() {
    const allPokemonUrl = await read("allPokeUrl.json");

    const pokeList = allPokemonUrl.map(async (pokeLink) => {
      let url = pokeLink.url.toString();

      // const result = await fetch(url).then(response => response.json())
      const response = await fetch(url);
      const result = await response.json();

      const pokeStats = result.stats.map((pokeStat) => {
        return {
          statName: pokeStat.stat.name,
          value: pokeStat.base_stat,
        };
      });

      const pokeMoves = result.moves.map((pokeMove) => {
        return {
          move: pokeMove.move.name,
        };
      });

      const PokeData = {
        name: result.forms[0].name,
        dex: result.game_indices[9].game_index,
        version: result.game_indices[9].version.name,
        height: result.height,
        weight: result.weight,
        stats: pokeStats,
        moves: pokeMoves,
      };

      return PokeData;
    });

    const pokeArr = await Promise.all(pokeList);
    pokeArr.sort((a, b) => {
      return a.dex - b.dex;
    });

    write("pokedex.json", pokeArr);
  }
}
