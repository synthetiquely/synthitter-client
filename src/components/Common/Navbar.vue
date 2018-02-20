<template>
  <header class="app__header">
    <nav class="navbar">
      <ul class="navbar__menu">
        <router-link class="navbar__menu__item navbar__menu__item_logo" exact-active-class="active" active-class="active" exact to="/">Synthitter</router-link>
        <router-link class="navbar__menu__item" exact-active-class="active" active-class="active" exact to="/">Home</router-link>
      </ul>
      <ul class="navbar__menu navbar__menu_right">
        <router-link class="navbar__menu__item" exact-active-class="active" to="/user/signup">Sign up</router-link>
        <router-link class="navbar__menu__item" exact-active-class="active" to="/user/signin">Sign in</router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #f7f5f5;
}

a:hover {
  color: #7b8590;
}

.app__header {
  grid-area: h;
}

.active {
  color: #413e58;
  text-decoration-line: underline;
}

.navbar {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #4caca4;
  color: #f7f5f5;
}

.navbar__menu {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;
}

.navbar__menu__item {
  padding: 20px 30px;
}

.navbar__menu__item:hover {
  cursor: pointer;
  background-color: #f7f5f5;
}

.navbar__menu__item_logo {
  font-size: 18px;
  font-weight: 500;
}
</style>
