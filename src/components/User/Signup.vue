<template>
  <form @submit.prevent="onSubmit" class="signup-form form" novalidate>
    <TextInput type="text" name="fullName" label="Full Name" :value="fullName" @input="onInput" placeholder="Enter your name" />
    <TextInput type="text" name="username" label="Username" :value="username" @input="onInput" placeholder="Enter your username" />
    <TextInput type="email" name="email" label="Email" :value="email" @input="onInput" placeholder="Enter your email" />
    <TextInput type="password" name="password" label="Password" :value="password" @input="onInput" placeholder="Enter your password" />
    <div class="form__field">
      <Button type="submit" role="primary" text="Sign up" :loading="isLoading" />
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      fullName: '',
      username: '',
      avatar:
        'https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png',
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
      this.$store.dispatch('signup', {
        email: this.email,
        username: this.username,
        password: this.password,
        fullName: this.fullName,
        avatar: this.avatar,
      });
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
