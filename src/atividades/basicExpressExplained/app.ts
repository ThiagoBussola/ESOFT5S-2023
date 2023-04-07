// 1 - Estamos importando o express
import express from 'express'
// 23 - Estamos importando a constante routes
import routes from './routes'

// 2 - Estamos criando uma classe App, que irá conter as configurações da noss API
class App {
    // 3 - Estamos criando uma propriedade publica, chamada express, do TIPO express.Application
    public express: express.Application

    // 4 - Criando um construtor 
    public constructor() {
        // 5 - Estamos atribuindo para a propriedade express uma instancia de express()
        // quem utilizar dessa propriedade, terá acesso aos métodos presentes dentro de express()
        this.express = express()

        // 8 - Estamos forçando quem instanciar essa classe, a automaticamente executar o método
        // middleware
        this.middleware()
        // 26 - Estamos forçando quem instanciar essa classe, a automaticamente executar o método
        // routes, e assim as rotas serão criadas ao iniciar a aplicação 
        this.routes()
    }

    // 6 - Criando um método chamado middleware 
    public middleware(): void {
        // 7 - Estamos utilizando através da propriedade express (que é uma instancia de express()),
        //  estamos utilizando o método use() para dizer ao express que as requisições e respostas
        // serão no formato json
        this.express.use(express.json())
    }

    // 24 - Estamos criando um método publico chamado routes
    public routes(): void {
        // 25 estamos utilizando o método use de express() para informar ao framework que este será
        // o arquivo principal do sistema de roteamento
        this.express.use(routes)
    }
}
// 9 - estamos exportando a classe App já instanciada, e já chamando o atributo express
// então quem chamar essa classe, já poderá utilizar os métodos que pertencem a express()
export default new App().express