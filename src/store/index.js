import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../plugins/axios-setup';

Vue.use(Vuex);

const initialState = () => ({
  flights: [],
  codes: [],
  hotels: [],
  packages: [],
  loading: true
});

const actions = {
  fetchFlights({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get('/flights')
        .then(response => {
          commit('setFlights', response.data);
          resolve(response.data);
        })
        .catch(reject);
    });
  },
  fetchCodes({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get('/iataCodes')
        .then(response => {
          commit('setCodes', response.data);
          resolve(response.data);
        })
        .catch(reject);
    });
  },
  fetchHotels({ commit }) {
    return new Promise((resolve, reject) => {
      return axios.get('/hotels')
        .then(response => {
          commit('setHotels', response.data);
          resolve(response.data);
        })
        .catch(reject);
    });
  },
  mountPackages({ commit, state }) {
    const packages = [];
    let city, outboundDate, inboundDate, days, total;
    state.flights.map(flight => {
      state.hotels.map(hotel => {
        if (hotel.iata === flight.arrivalAirport) {
          city = state.codes.find(code => code.id === flight.arrivalAirport);
          outboundDate = new Date(flight.outboundDate).toLocaleDateString();
          inboundDate = new Date(flight.inboundDate).toLocaleDateString();
          days = Math.floor((flight.inboundDate - flight.outboundDate) / (1000 * 60 * 60 * 24));
          total = flight.price + (hotel.pricePerNight * days);
          packages.push({ flight, hotel, city, outboundDate, inboundDate, total });
        }
      });
    });

    commit('setPackages', packages);
  }
};

const getters = {
  flights(state) {
    return state.flights;
  },
  codes(state) {
    return state.codes;
  },
  hotels(state) {
    return state.hotels;
  },
  packages(state) {
    return state.packages;
  },
  loading(state) {
    return state.loading;
  }
};

const mutations = {
  setFlights(state, data) {
    state.flights = data;
  },
  setCodes(state, data) {
    state.codes = data;
  },
  setHotels(state, data) {
    state.hotels = data;
  },
  setPackages(state, data) {
    state.packages = data;
  },
  setLoading(state, data) {
    state.loading = data;
  },
  resetVuex(state) {
    Object.assign(state, initialState());
  }
};

export default new Vuex.Store({
  state: initialState(),
  actions: actions,
  getters: getters,
  mutations: mutations
});
