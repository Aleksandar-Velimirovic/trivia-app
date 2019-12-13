const Chuck  = require('chucknorris-io')

export class ChuckService{
    constructor(){
        this.client = new Chuck()
    }

    getRandomJoke(term = ''){
        return this.client.getRandomJoke(term)
    }
}

export const chuckService = new ChuckService()

