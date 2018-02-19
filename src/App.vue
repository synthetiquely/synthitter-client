<template>
  <div id="app" class="app">
    <app-navbar></app-navbar>
    <main class="app__container">
      <router-view></router-view>
    </main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Navbar from './components/Common/Navbar.vue';
import Footer from './components/Common/Footer.vue';

export default {
  components: {
    'app-navbar': Navbar,
    'app-footer': Footer,
  },
  name: 'app',
};
</script>

<style>
body {
  height: 100vw;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}

.app {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px auto 60px;
  grid-template-areas:
    'h h h h h h h h h h h h'
    'c c c c c c c c c c c c'
    'f f f f f f f f f f f f';
}

.app__container {
  grid-area: c;
  height: 100%;
  padding: 0 20%;
  background-color: #383843;
  color: #f7f5f5;
}

.app__header {
  grid-area: h;
}

.app__footer {
  grid-area: f;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a1a0a0;
}
</style>
