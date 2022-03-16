<template>
  <div class="footer" >
    <p class="footerText" @click="homePage">Book Store</p>
  </div>
</template>
<script>
export default {
  methods: {
    homePage() {
      this.$router.push("/home");
    },
    }
};
</script>
<style  scoped>
.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #103d82 ;
   color: white;
   text-align: center;
   padding-top: 15px;
}
.footerText{
 cursor: pointer;
}
</style>