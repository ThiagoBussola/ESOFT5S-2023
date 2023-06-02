import { writeFile, readFile } from "fs/promises";
import path from "path";

const __dirname = path.resolve();

const databaseFile = path.join(__dirname, "./src/", "pokemons");

export const write = async (filename, data) =>
  await writeFile(
    path.join(databaseFile, filename),
    JSON.stringify(data, null, 2)
  );

export const read = async (filename) =>
  JSON.parse(await readFile(path.join(databaseFile, filename), "utf-8"));

let arr = [];

arr.join;
