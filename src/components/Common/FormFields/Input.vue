<template>
  <div class="form__field" :class="{'has-error': error}">
    <label :for="name" class="form__field__label">{{ label }}</label>
    <input :type="type" :name="name" :id="name" :value="value" @input="changeValue($event.target.value)" :placeholder="placeholder" class="form__field__input">
    <inline-error v-if="error" :text="error" />
  </div>
</template>

<script>
import InlineError from './InlineError.vue';

export default {
  name: 'TextInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    error: {
      type: String,
    },
  },
  methods: {
    changeValue(value) {
      this.$emit('input', { value, name: this.name });
    },
  },
  components: {
    'inline-error': InlineError,
  },
};
</script>

<style scoped>
.form__field {
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 20px;
}

.form__field__input {
  font-family: 'Raleway', sans-serif;
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  background-color: #a1a0a0;
  color: #f7f5f5;
}
.form__field__input:focus {
  color: #fff;
  outline-color: #4caca4;
}

.has-error {
  color: #e57373;
}
</style>