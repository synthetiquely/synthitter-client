<template>
  <form @submit.prevent="submit" class="signup-form form" novalidate>
    <TextInput type="text" name="fullName" label="Full Name" :value="fullName" @input="onInput" placeholder="Enter your name" />
    <TextInput type="text" name="username" label="Username" :value="username" @input="onInput" placeholder="Enter your username" />
    <TextInput type="email" name="email" label="Email" :value="email" @input="onInput" placeholder="Enter your email" />
    <TextInput type="password" name="password" label="Password" :value="password" @input="onInput" placeholder="Enter your password" />
    <div class="form__field">
      <Button type="submit" role="primary" text="Sign up" />
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
    };
  },
  methods: {
    onInput({ name, value }) {
      this[name] = value;
    },
    submit() {
      console.log(`${this.email}`);
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
