<template>
  <section class="create-tweet-form">
    <Avatar src="http://img02.deviantart.net/f5c1/i/2012/290/a/b/adorable_kitty_by_bili911-d5i3bew.jpg" :size="40" />
    <input type="text" name="create-tweet" id="create-tweet" placeholder="What's happening?" class="create-tweet-form__input">
    <Button role="default" type="submit" text="Tweet" />
  </section>
</template>


<script>
import Avatar from '../Common/Avatar.vue';

export default {
  name: 'CreateTweet',
  components: {
    Avatar,
  },
};
</script>


<style scoped>
.create-tweet-form {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: #cbdce0;
  border-bottom: 1px solid #ccc;
}

.create-tweet-form__input {
  width: 80%;
  margin: 0 10px;
  padding: 10px;
  color: #f3fcfe;
  border-radius: 5px;
  border: none;
}

.create-tweet-form__input:focus {
  color: #000;
  outline-color: #4caca4;
}

@media screen and (max-width: 768px) {
  .create-tweet-form__input {
    max-width: 80%;
    width: auto;
  }
}
</style>
