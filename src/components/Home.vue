<template>
  <section class="home">
    <UserDetails />
    <CreateTweet />
    <TweetsFeed />
  </section>
</template>

<script>
import UserDetails from './User/UserDetails.vue';
import CreateTweet from './Tweets/CreateTweet.vue';
import TweetsFeed from './Tweets/TweetsFeed.vue';

export default {
  components: {
    UserDetails,
    CreateTweet,
    TweetsFeed,
  },
};
</script>

<style scoped>
.home {
  display: grid;
  grid-template-columns: minmax(auto, 300px) 1fr;
  grid-template-rows: 80px 150px min-content;
  grid-gap: 10px;
  padding-top: 15px;
}
</style>
