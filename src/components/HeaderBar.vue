<template>
  <div>
    <nav id="nav">
      <router-link class="nav-link" to="/" v-if="!show">Login</router-link> |
      <router-link class="nav-link" to="/home">Home</router-link> |
      <router-link class="nav-link" to="/line">Line</router-link> |
      <router-link class="nav-link" to="/bar">Bar</router-link> |
      <router-link class="nav-link" to="/doughnut">Doughnut</router-link> |
      <router-link class="nav-link" to="/enquiry">Enquiry</router-link> |
      <a class="nav-link pointer" @click="logOut" v-if="show"
        >Logout</a
      >
      |
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
    data() {
    return {
       show: true,
    };
  },
  methods: {
    logOut() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
  mounted() {
  if (localStorage.getItem('LoggedUser')){
    this.show = true;
  }
    console.log(`the component is now mounted.`)
  }

 
};
</script>
<style  scoped>
.pointer {
  cursor: pointer;
}
</style>