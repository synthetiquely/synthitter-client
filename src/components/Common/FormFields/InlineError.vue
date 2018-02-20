<template>
  <span class="inline-error">{{ text }}</span>
</template>

<script>
export default {
  name: 'InlineError',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped>
.inline-error {
  color: #e57373;
}
</style>
