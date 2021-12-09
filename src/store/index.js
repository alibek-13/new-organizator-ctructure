import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [
      {
        title: "Aktau",
        total: 12,
        fact: 12,
        child: [
          {
            title: "Aktau1",
            total: 12,
            fact: 12,
            child: [
              {
                title: "Aktau2",
                total: 12,
                fact: 12,
                child: [
                  {
                    title: "Aktau3",
                    total: 12,
                    fact: 12,
                    child: [
                      {
                        title: "Aktau4",
                        total: 12,
                        fact: 12,
                        child: [],
                      },
                    ],
                  },
                ],
              },
              {
                title: "Aktobe",
                total: 12,
                fact: 12,
                child: [],
              },
            ],
          },
        ],
      },
      {
        title: "Oskemen",
        total: 12,
        fact: 112,
        child: [],
      },
    ],
  },
  mutations: { },
  actions: { },

});