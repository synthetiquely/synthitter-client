<template>
  <div :class="classes">{{ text }}</div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'error',
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        [this.type]: true,
        alert: true,
      };
    },
  },
};
</script>

<style scoped>
.alert {
  margin: 10px 0;
  padding: 20px;
  border-radius: 5px;
}
.alert.error {
  background-color: #e57373;
  color: #fff;
}
.alert.success {
  background-color: #4caf50;
  color: #fff;
}
</style>

