/* eslint-disable no-console */ /* eslint-disable max-len */
<template>
  <div v-if="weather">
    <h1 class="heading">{{ routeName }}</h1>
    <!-- <h1>{{count}}</h1> -->
    <!-- <ul class="list">
        <li v-for="user in users" :key="user.name"
        v-bind:class="{'active': user.firstname === 'Sebastian'}">{{user.firstname}}</li>
    </ul> -->

    <p>{{ weather.name }}</p>
    <!-- <p><strong>Sunrise:</strong> {{weather.sys && new Date(weather.sys.sunrise*1000)}}</p> -->
    <!-- <p><strong>Sunset:</strong> {{weather.sys && new Date(weather.sys.sunset*1000)}}</p> -->

    <h1>Weather</h1>
    <p>
      Desc:{{
        weather.weather[0] &&
          weather.weather[0].length &&
          weather.weather[0].description
      }}
    </p>
    <p>Speed:{{ weather.wind.speed }}</p>
    <p>{{count}}</p>
    <button @click="increament">Increament</button>
  </div>
</template>

<script>
import axios from 'axios';
// import store from '../store/index';

export default {
  data() {
    return {
      weather: {},
      // count: 1,
      users: [
        { firstname: 'Sebastian', lastname: 'Eschweiler' },
        { firstname: 'Bill', lastname: 'Smith' },
        { firstname: 'John', lastname: 'Porter' },
      ],
    };
  },

  created() {
    this.getWeather();
  },
  computed: {
    reversedHeading() {
      return this.pageName
        .split('')
        .reverse()
        .join();
    },
    now() {
      return new Date();
    },
    count() {
      return this.$store.state.count;
    },
    routeName() {
      return this.$route.name;
    },
  },

  methods: {
    increament() {
      // this.$store.increament();
      this.$store.dispatch('icreamentAction');
    },
    async getWeather() {
      // eslint-disable-next-line no-undef
      const res = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=0deb4dc38e5ededb2c4ef40ee26d60c0',
      );
      // eslint-disable-next-line no-console
      console.log(res.data);
      this.weather = res.data;
    },
  },
};
</script>

<style scoped>
.heading {
  color: green;
  font-size: 5rem;
}

.active {
  border: 1px solid grey;
  padding: 10px;
  border-radius: 10px;
}

.list {
  list-style: none;
  font-weight: 900;
  flex-direction: row;
  justify-content: space-around;
  display: flex;
}
</style>
