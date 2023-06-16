import { ErrorMessages } from "../arrayRandomValues/errorMessage.enum"

export class Matemagica {

    private x: Number
    private y: Number

    constructor() {}

    private sum() {
        return Number(this.x) + Number(this. y)
    }

    public getSum() {
        return this.sum()
    }
    
    public setX(x: Number){
        if(typeof x !== 'number') {
            return ErrorMessages.INVALID_OPERATION
        }
        this.x = x
    }

    public setY(y: Number){
        if(typeof y !== 'number') {
            return ErrorMessages.INVALID_OPERATION
        }
        this.y = y
    }

    public getX() {
        return console.log(this.x)
    }
    
    public getY() {
        return console.log(this.y)
    }
}