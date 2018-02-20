<template>
  <img :src="src" alt="user avatar" class="avatar" :class="classes">
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    className: {
      type: String,
    },
    src: {
      type: String,
      default:
        'http://www.cheap-accountants-in-london.co.uk/wp-content/uploads/2015/07/User-Avatar.png',
    },
    size: {
      type: Number,
      default: 68,
    },
  },
  computed: {
    classes() {
      return {
        [this.className]: true,
        [`size-${this.size}`]: true,
      };
    },
  },
};
</script>

<style scoped>
.avatar {
  border-radius: 50%;
  object-fit: cover;
}

.avatar.size-68 {
  width: 68px;
  height: 68px;
}

.avatar.size-32 {
  width: 32px;
  height: 32px;
}

.avatar.size-40 {
  width: 40px;
  height: 40px;
}
</style>
