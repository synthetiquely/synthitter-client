<template>
  <form @submit.prevent="onSubmit" class="signin-form form" novalidate>
    <TextInput type="email" name="email" label="Email" :value="email" @input="onInput" placeholder="Enter your email" :error="errors.email" />
    <TextInput type="password" name="password" label="Password" :value="password" @input="onInput" placeholder="Enter your password" :error="errors.password" />
    <div class="form__field">
      <Button type="submit" role="primary" size="large" text="Sign in" :loading="isLoading" />
    </div>
  </form>
</template>

<script>
import { validateSignin } from '../../utils/validate';

export default {
  data() {
    return {
      email: '',
      password: '',
      errors: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.loading;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    onInput({ name, value }) {
      this[name] = value;
    },
    onSubmit() {
      this.errors = validateSignin({
        email: this.email,
        password: this.password,
      });
      if (Object.keys(this.errors).length === 0) {
        this.$store.dispatch('signin', {
          email: this.email,
          password: this.password,
        });
      }
    },
  },
  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push('/home');
      }
    },
  },
};
</script>


<style scoped>
.form {
  display: flex;
  flex-flow: column nowrap;
  padding: 30px;
}
</style>