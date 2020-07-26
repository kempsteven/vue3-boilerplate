export const state = {
  jokes: []
};

export const actions = {
  async getJokes({ state }, payload) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${payload ||
        ""}`
    );
    state.jokes = await response.json();
    return state.jokes;
  }
};

export const mutations = {
  setJokes({ state }, payload) {
    const isPayloadArray = Array.isArray(payload);
    if (isPayloadArray) {
      state.jokes = [...state.jokes, ...payload];
    }

    state.jokes.push(payload);
  },

  clearJokes(state) {
    state.jokes = [];
  }
};

export const getters = {
  getJokes: state => state.jokes
};

export default {
  state,
  actions,
  mutations,
  getters
};
