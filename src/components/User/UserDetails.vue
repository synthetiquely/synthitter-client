<template>
  <section class="user-details">
    <img src="https://fearlesskittyrescue.org/wp-content/uploads/2017/08/cat-1209320_1920.jpg" alt="cover" class="cover">
    <div class="user">
      <img src="http://img02.deviantart.net/f5c1/i/2012/290/a/b/adorable_kitty_by_bili911-d5i3bew.jpg" alt="user avatar" class="user__avatar">
      <div class="user__info">
        <h3 class="user__info__name">Eric Kaiser</h3>
        <p class="user__info__username">@erickaiser</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.user-details {
  width: 300px;
  background-color: #e4e1dd;
}
.cover {
  width: 300px;
  height: 100px;
  margin: 0;
  padding: 0;
  object-fit: cover;
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
</style>
