// src/store/index.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    temperature: 0,
    weatherData: null
  },
  mutations: {
    setTemperature(state, temperature) {
      state.temperature = temperature;
    },
    setWeatherData(state, weatherData) {
      state.weatherData = weatherData;
    }
  },
  actions: {
    fetchWeatherData(context) {
      // Simulate API call
      setTimeout(() => {
        const temperature = Math.floor(Math.random() * 40)
        const weatherData = { temperature, description: 'Sunny' };
        context.commit('setTemperature', weatherData.temperature);
        context.commit('setWeatherData', weatherData);
      }, 1000);
    },
    // updateTemperature(context, newTemperature) {
    //   // Simulate temperature update to show watcher functioning
    //   context.commit('setTemperature', newTemperature);
    // }
  }
});

export default store;
