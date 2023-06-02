import { createServer } from "http";
import { read } from "./utils/fileUtils.js";
import { RequestDataApi } from "./utils/requestDataApi.js";

const requestDataApi = new RequestDataApi();

async function handler() {
  await requestDataApi.getAllPokeUrl();
  await requestDataApi.fetchAllPokemonData();

  const server = createServer(async (req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000,
    };

    if (req.method === "GET" && req.url === "/pokemons-data") {
      const data = await read("pokedex.json", "utf8");

      try {
        res.writeHead(200, headers);
        res.end(JSON.stringify(data));
      } catch (err) {
        res.writeHead(500, headers);
        res.end("Internal Server Error\n");

        console.error(err);
      }
    } else {
      res.writeHead(404, headers);
      res.end("404 Not Found\n");
    }
  });

  server.listen(3000, () => {
    console.log(`Server running at http://localhost:3000/`);
  });
}

handler();
