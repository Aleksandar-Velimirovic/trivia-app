<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{randomTrivia}}
  </div>
</template>

<script>
import store from '../store'
import { triviaService } from '../services/TriviaService'
export default {
    computed:{
        randomTrivia(){
            return this.$store.getters.getRandomTrivia
        }
    },

    beforeRouteEnter(to, from, next){
        store.dispatch('getRandomTrivia')
        .then(() => {
            next()
        })
    }
}
</script>
