<template>
  <footer class="app__footer">
    <ul class="footer__menu">
      <li class="footer__link">
        <a href="/https://github.com/synthetiquely">
          <i class="fab fa-github"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
a {
  color: #7b8590;
}

a:hover {
  color: #e4e1dd;
}

.app__footer {
  grid-area: f;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3fcfe;
}

.footer__menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer__link {
  color: #7b8590;
}
</style>
