<template>
  <div>
    <form @submit.prevent="login">
      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value>

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" value>

      <button type="submit" name="button">
        Login
      </button>

      <p>{{ error }}</p>

      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      const credentials = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch('user/login', credentials);
        await this.$router.push({ name: 'event-list' });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
