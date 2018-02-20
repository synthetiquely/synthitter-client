<template>
  <section class="user-details">
    <img v-if="user.cover" :src="user.cover" alt="cover" class="cover">
    <div v-else class="cover_solid"></div>
    <div class="user">
      <img :src="user.avatar" alt="user avatar" class="user__avatar">
      <div class="user__info">
        <h3 class="user__info__name">{{ user.firstName }} {{ user.lastName }}</h3>
        <p class="user__info__username">@{{ user.username }}</p>
      </div>
    </div>
    <div class="stats">
      <div class="stats__item">
        <span class="stats__item__title">Tweets</span>
        <span class="stats__item__number">7</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__title">Following</span>
        <span class="stats__item__number">52</span>
      </div>
      <div class="stats__item">
        <span class="stats__item__title">Followers</span>
        <span class="stats__item__number">6</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>


<style scoped>
.user-details {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 300px;
  background-color: #f3fcfe;
}

.cover {
  width: 300px;
  height: 100px;
  margin: 0;
  padding: 0;
  object-fit: cover;
}

.cover_solid {
  width: 300px;
  height: 100px;
  background-color: #4caca4;
  background-repeat: no-repeat;
  background-size: cover;
}

.user {
  display: flex;
}

.user__info {
  padding: 10px 0 15px 20px;
}

.user__info__name {
  margin: 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  color: #14171a;
}

.user__info__username {
  margin: 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #657786;
}

.user__info__name:hover,
.user__info__username:hover {
  color: #4caca4;
  cursor: pointer;
}

.user__avatar {
  width: 68px;
  height: 68px;
  margin: -30px 0 0 8px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid #fff;
}

.user__avatar:hover {
  border-color: #4caca4;
  cursor: pointer;
}

.stats {
  display: flex;
  flex-flow: row nowrap;
}

.stats__item {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;
}

.stats__item__title,
.stats__item__number {
  font-weight: 700;
}

.stats__item__title {
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 14px;
  color: #a1a0a0;
}

.stats__item__number {
  padding-top: 5px;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 16px;
  color: #4caca4;
}

@media screen and (max-width: 375px) {
  .user-details {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
  }
}
</style>
