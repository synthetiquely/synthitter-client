<template>
  <article class="tweet">
    <Avatar className="tweet__avatar" :size="40" src="https://orig00.deviantart.net/0c3c/f/2016/162/7/b/anime_neko_girl_avatar_by_letfio-d9qu1ct.png" />
    <h3 class="tweet__name">Name</h3>
    <p class="tweet__username">@username</p>
    <span class="tweet__date">22m</span>
    <p class="tweet__message">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eligendi.
    </p>
    <div class="tweet__actions">
      <span type="button" class="tweet__actions__action" title="Reply">
        <i class="far fa-comment"></i>
      </span>
      <span type="button" class="tweet__actions__action" title="Retweet">
        <i class="fas fa-retweet"></i>
      </span>
      <span type="button" class="tweet__actions__action" title="Like">
        <i class="far fa-heart"></i>
      </span>
      <span type="button" class="tweet__actions__action" title="Direct message">
        <i class="far fa-envelope"></i>
      </span>
    </div>
  </article>
</template>

<script>
import Avatar from '../Common/Avatar.vue';

export default {
  name: 'Tweet',
  components: {
    Avatar,
  },
};
</script>


<style scoped>
.tweet {
  display: grid;
  grid-template-columns: 60px minmax(auto, 100px) minmax(auto, 100px) auto;
  grid-template-rows: 30px auto 50px;
  padding: 15px 10px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.tweet:hover {
  background-color: #cbdce0;
}

.tweet__avatar {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.tweet__name {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin: 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  color: #14171a;
}

.tweet__username {
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  margin: 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #657786;
}

.tweet__name:hover,
.tweet__username:hover {
  color: #4caca4;
  cursor: pointer;
}

.tweet__date {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
  margin: 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #657786;
}

.tweet__message {
  grid-column: 2 / -1;
  grid-row: 2 / 3;
  margin: 0;
  font-family: 'Segoe UI', 'Arial', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: justify;
  color: #14171a;
}

.tweet__actions {
  grid-column: 2 / -1;
  grid-row: 3 / -1;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.tweet__actions__action {
  padding: 0 10px;
  color: #a1a0a0;
  cursor: pointer;
}

.tweet__actions__action:hover {
  color: #4caca4;
}
</style>