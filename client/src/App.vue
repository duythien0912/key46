<template>
  <div id="app">
    <HomeNav/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from '@/components/Navigation/HomeNav.vue';

export default {
  name: 'app',
  components: {
    HomeNav,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
