<template>
  <div>
   <nav id="nav">
      <router-link class="nav-link" to="/">Login</router-link> |
      <router-link class="nav-link" to="/home">Home</router-link> |
      <router-link class="nav-link" to="/line">Line</router-link> |
      <router-link class="nav-link" to="/bar">Bar</router-link> |
      <router-link class="nav-link" to="/doughnut">Doughnut</router-link> |
      <router-link class="nav-link" to="/enquiry">Enquiry</router-link> |
      <a class="nav-link pointer" @click="logOut">Logout</a> |
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/");
    },
  }
};
</script>
<style  scoped>
.pointer{
   cursor: pointer;
}
</style>