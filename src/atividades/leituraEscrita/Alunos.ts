import { writeFile, readFile } from 'fs/promises'
import { alunos } from "./alunosData";


export class Alunos {
    private dataSource = alunos


    getDataSource() {
       return this.dataSource
    }

    writeAlunos() {
        try {
            writeFile('alunosDataSource.json', JSON.stringify(this.dataSource, null, 2))

        }
        catch(err) {
            console.error('erro na escrita', err)
        }
    }

    async readAlunosDataSource() {
        const readAlunos = readFile('alunosDataSource.json', "utf-8")

        return readAlunos
    }
}
