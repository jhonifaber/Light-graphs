import Vue from 'vue'
import Vuex from 'vuex'
import { BASE_URL } from "./axios/axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    prices: [],
    unPrecio: [],
    dosPrecios: [],
    multiple: [],
    selectedFilter : 'UnPrecioFare'

  },
  getters: {
    prices(state) {
      return state.prices
    },
    unPrecio(state) {
      return state.unPrecio
    },
    dosPrecios(state) {
      return state.dosPrecios
    },
    multiple(state) {
      return state.multiple
    },
    selectedFilter(state){
      return state.selectedFilter
    }

  },
  mutations: {
    savePrices(state, payload) {
      payload.unprecio.forEach(element => {
        state.unPrecio = Object.entries(element);
      });

      payload.dosprecios.forEach(element => {
        state.dosPrecios = Object.entries(element);
      });

      payload["3.0a"].forEach(element => {
        state.multiple = Object.entries(element);
      });
    },
    saveSelectedFilter(state, payload){
      state.selectedFilter = payload
    }
  },
  actions: {
    async getPrices(context) {
      const response = await BASE_URL.get('/prices')
      context.commit('savePrices', response.data)
    }
  }
})
