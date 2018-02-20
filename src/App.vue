<template>
  <div id="app" class="app">
    <app-navbar></app-navbar>
    <main class="app__container">
      <Alert v-if="error" type="error" :text="error" />
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Common/Navbar.vue';
import Footer from './components/Common/Footer.vue';

export default {
  name: 'app',
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}

.app {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 60px 1fr 60px;
  grid-template-areas:
    'h h h'
    'c c c'
    'f f f';
}

.app__container {
  grid-area: c;
  height: 100%;
  display: flex;
  margin-bottom: 10px;
  padding: 0 10%;
  background-color: #383843;
  color: #f7f5f5;
}

@media screen and (max-width: 1024px) {
  .app__container {
    padding: 0 10px;
  }
}
</style>
