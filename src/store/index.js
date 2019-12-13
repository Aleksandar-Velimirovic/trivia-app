import Vue from 'vue'
import Vuex from 'vuex'
import { ChuckStore } from './ChuckStoreModule'
import { TriviaStore } from './TriviaStoreModule'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    ChuckStore,
    TriviaStore
  }
})

export default store

