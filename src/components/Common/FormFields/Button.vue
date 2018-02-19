<template>
  <button @click="action" class="button" :class="classes" :type="type">{{ text }}</button>
</template>

<script>
export default {
  props: {
    role: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'button',
    },
    text: {
      type: String,
      default: 'button',
    },
    action: {
      type: Function,
      default: () => {},
    },
  },
  computed: {
    classes() {
      return {
        [this.role]: true,
        active: this.isActive,
        loading: this.isLoading,
      };
    },
  },
};
</script>

<style scoped>
.button {
  min-width: 150px;
  padding: 20px;
  border-radius: 50px;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  cursor: pointer;
}

.button.primary {
  background-color: #4caca4;
  color: #e4e1dd;
}

.button.primary:hover {
  background: linear-gradient(to right, #93dfd8, #b2dfdb);
  color: #7b8590;
}

.button.success {
  background-color: #4caf50;
  color: #e4e1dd;
}

.button.success:hover {
  background: linear-gradient(to right, #8ae98d, #c8e6c9);
  color: #7b8590;
}

.button.default {
  background-color: #e4e1dd;
}
</style>
