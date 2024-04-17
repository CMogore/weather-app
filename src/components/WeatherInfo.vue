<!-- src/components/Weather.vue -->
<template>
    <div>
      <h1>Current Weather</h1>
      <p>Temperature: {{ temperature }}°C</p>
      <p>Description: {{ weatherData?.description }}</p>
      <!-- <button @click="simulateTemperatureChange">Simulate Temperature Change</button> -->
    </div>
  </template>
  
  <script>
  import { computed, watch, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  export default {
    setup() {
      const store = useStore();
  
      // Computed property to get temperature from store
      const temperature = computed(() => store.state.temperature);

      

      // Watcher to react to temperature changes
      watch(temperature, (newTemperature, oldTemperature) => {
        console.log(`Temperature changed from ${oldTemperature} to ${newTemperature}`);
      });
  
      // Lifecycle hook to fetch weather data when component is mounted
      onMounted(() => {
        store.dispatch('fetchWeatherData');
        console.log('hook on Mounted')
      });
  
      // Computed property to get weather data from store
      const weatherData = computed(() => store.state.weatherData);
  
      return { temperature, weatherData };
    },
    // methods: {
    //   //temp change for watchers
    // simulateTemperatureChange() {
    //   const newTemperature = Math.floor(Math.random() * 40); // Simulate a new temperature
    //   this.$store.dispatch('updateTemperature', newTemperature);
    // }
  // }
  }
  </script>
  