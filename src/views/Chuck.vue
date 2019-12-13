<template>
    <div>
        <h3>Random Joke: </h3>
        <p>{{randomJoke}}</p>
        <form @submit.prevent="getJoke"> 
            <input type="text" placeholder="Search category" @input="setCategory($event.target.value)">
            <br><br>
            <button type="submit" class="btn btn-primary">New Joke</button>
        </form>
    </div>
</template>

<script>
import store from '../store'

export default {
    
    computed:{
        randomJoke(){
            return this.$store.getters.getRandomJoke
        }
    },

    // created(){
    //     this.$store.dispatch('getRandomJoke')
    // },

    methods:{
        getJoke(){
            return this.$store.dispatch('getRandomJoke')
        },
        setCategory(v){
            return this.$store.commit('setCategory', v)
        }
    },

    beforeRouteEnter(to, from, next){
        store.dispatch('getRandomJoke')
        .then(() => {
            next()
        })
    }
}
</script>

<style>

</style>
