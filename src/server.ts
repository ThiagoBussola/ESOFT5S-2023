// 10 - Estamos importando a Classe App já instanciada de app.ts
import app from "./app";

// 11 - Criamos uma função main() que irá executar os métodos de app e iniciar nossa aplicação
// Essa função é a primeira a ser executada em nossa aplicação
function main() {
    try {
        // 12 - nós estamos utilizando o método listen de express() para criar um servidor
        // passando como parametro: a porta 3000, o "dominio" localhost, 
        // e uma função assincrona e anonima, que irá printar uma mensagem ao ser executada
        app.listen(3000, 'localhost', async () => {
            console.log('starting server')
        })
    } catch (err) {
        // OBS: No catch estamos capturando qualquer erro que possa acontecer ao criar o servidor
        // e printando ele no console
        console.error('Starting server Error', err)
    }
}

// 13 - Estamos executando a função main()
main()