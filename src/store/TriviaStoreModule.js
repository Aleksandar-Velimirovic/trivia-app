import { triviaService } from '../services/TriviaService'

export const TriviaStore = {
    state: {
        randomTrivia:'',
    },

    mutations:{
        setRandomTrivia(state, randomTrivia){
            state.randomTrivia = randomTrivia
        },
    },

    actions:{
        async getRandomTrivia(context){
            const randomTrivia = await triviaService.getRandomTrivia()
            context.commit('setRandomTrivia', randomTrivia)
            return randomTrivia
        }
    },
    
    getters:{
        getRandomTrivia(state){
            return state.randomTrivia
        }
    }
}