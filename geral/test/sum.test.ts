import { describe, test, expect } from '@jest/globals'
import { Matemagica } from '../src/atividades/unityTests/matemagica'
import {ErrorMessages} from '../src/atividades/arrayRandomValues/errorMessage.enum'


describe('Sum two numbers', () => {
    test('should be sum two numbers', () => {
       const matemagica = new Matemagica()
       matemagica.setX(1)
       matemagica.setY(2)
       
       expect(matemagica.getSum()).toBe(3)
    })

    test('Deve retornar um erro ao tentar somar atribuir uma string para realização de operações matematicas', () => {
        const matemagica = new Matemagica()
        
        // @ts-ignore
       expect(matemagica.setX('oi')).toBe(ErrorMessages.INVALID_OPERATION)
        // @ts-ignore
       expect(matemagica.setY('ola')).toBe(ErrorMessages.INVALID_OPERATION)
    })
})


