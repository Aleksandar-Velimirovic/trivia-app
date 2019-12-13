import { chuckService } from '../services/ChuckService'

export const ChuckStore = {
    state: {
        randomJoke:'',
        jokeCategory: ''
    },

    mutations:{
        setRandomJoke(state, randomJoke){
            state.randomJoke = randomJoke
        },
        setCategory(state, category){
            state.jokeCategory = category
        }
    },

    actions:{
        async getRandomJoke(context){
            const randomJoke = await chuckService.getRandomJoke(context.state.jokeCategory)
            context.commit('setRandomJoke', randomJoke.value)
            return randomJoke
        }
    },
    
    getters:{
        getRandomJoke(state){
            return state.randomJoke
        }
    }
}