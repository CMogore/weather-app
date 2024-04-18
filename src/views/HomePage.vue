src/views/Home.vue
<template>
    <div>
        <a href="/About">About</a>
      <h1>Welcome to the Weather App!</h1>
      <button @click="fetchWeather">Fetch Weather Data</button>
      <Weather v-if="weatherData" />
    </div>
  </template>
  
  <script>
  import Weather from '../components/WeatherInfo.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    components: {
      Weather
    },
    setup() {
      const store = useStore();
  
      // Computed property to check if weather data is available
      const weatherData = computed(() => store.state.weatherData);
  
      // Method to fetch weather data
      const fetchWeather = () => {
        store.dispatch('fetchWeatherData');
      };
  
      return { fetchWeather, weatherData };
    }
  }
  </script>
  