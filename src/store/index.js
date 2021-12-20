import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    isModalVisivle: false,

  },

  mutations: {
    VISIBILITI_MODAL: (state) => {
      state.isModalVisivle = !state.isModalVisivle
    },
    ADD_CITIES: (state, division) => {
      state.cities.push(division)
    },
    ADD_SUBDIVISION: (state, subdivision) => {
      state.cities.subDivision.push(subdivision)
    }
  },
  actions: {
    ACTION_VISIBILITIMODAL({commit}) {
      commit('VISIBILITI_MODAL')
    },

  },
  getters: {
    STATE_SITIES(state) {
      return state.cities;
    },
    STATE_SHOWMODAL(state) {
      return state.isModalVisivle;
    },
  },
});