<template>
  <form @submit.prevent="onSubmit" class="signup-form form" novalidate>
    <TextInput type="text" name="fullName" label="Full Name" :value="fullName" @input="onInput" placeholder="Enter your name" :error="errors.fullName" />
    <TextInput type="text" name="username" label="Username" :value="username" @input="onInput" placeholder="Enter your username" :error="errors.username" />
    <TextInput type="email" name="email" label="Email" :value="email" @input="onInput" placeholder="Enter your email" :error="errors.email" />
    <TextInput type="password" name="password" label="Password" :value="password" @input="onInput" placeholder="Enter your password" :error="errors.password" />
    <div class="form__field">
      <Button type="submit" role="primary" text="Sign up" :loading="isLoading" />
    </div>
  </form>
</template>

<script>
import validate from '../../utils/validate';

export default {
  data() {
    return {
      email: '',
      password: '',
      fullName: '',
      username: '',
      avatar:
        'https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png',
      errors: {},
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.loading;
    },
  },
  methods: {
    onInput({ name, value }) {
      this[name] = value;
    },
    onSubmit() {
      this.errors = validate({
        email: this.email,
        username: this.username,
        password: this.password,
        fullName: this.fullName,
      });
      if (Object.keys(this.errors).length === 0) {
        this.$store.dispatch('signup', {
          email: this.email,
          username: this.username,
          password: this.password,
          fullName: this.fullName,
          avatar: this.avatar,
        });
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
