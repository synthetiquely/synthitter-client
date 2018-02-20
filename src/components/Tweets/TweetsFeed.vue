<template>
  <section class="tweets-feed">
    <Tweet />
    <Tweet />
    <Tweet />
  </section>
</template>

<script>
import Tweet from './Tweet.vue';

export default {
  name: 'TweetsFeed',
  components: {
    Tweet,
  },
};
</script>


<style scoped>
.tweets-feed {
  grid-column: 2 / 3;
  grid-row: 2 / -1;
  background-color: #f3fcfe;
}

@media screen and (max-width: 375px) {
  .tweets-feed {
    grid-column: 1 / -1;
    grid-row: 3 / -1;
  }
}
</style>
