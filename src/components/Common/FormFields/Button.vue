<template>
  <button @click="action" class="button" :class="classes" :type="type" :title="text">
    <i v-show="loading" class="fas fa-spinner" :class="{ 'loading': loading }"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    role: {
      type: String,
      default: 'default',
    },
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'medium',
    },
    text: {
      type: String,
      default: 'button',
    },
    loading: {
      type: Boolean,
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
        [this.size]: true,
      };
    },
  },
};
</script>

<style scoped>
.button {
  min-width: 150px;
  border-radius: 50px;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  cursor: pointer;
}

.button.large {
  padding: 20px;
}

.button.medium {
  padding: 10px;
}

.button.small {
  padding: 5px;
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
  background-color: #fff;
  color: #4caca4;
  border: 1px solid #4caca4;
}

button.default:hover {
  background-color: #4caca4;
  color: #fff;
}

.loading {
  margin-right: 10px;
  animation: spinner 0.6s linear infinite;
}

@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
