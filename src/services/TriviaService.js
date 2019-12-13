import axios from 'axios'

const BASE_URL = "http://jservice.io/api"

export default class TriviaService{
    constructor(){
        axios.defaults.baseURL = BASE_URL
    }

    getRandomTrivia(){
        return axios.get('random', {params: {count: 30}})
    }
}

export const triviaService = new TriviaService()