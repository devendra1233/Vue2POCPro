<template>
  <div id="app" :style="cssProps">
    <header-bar></header-bar>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
    <footer-bar></footer-bar>
    <!-- <div class="footer">
      <p>Book Store</p>
    </div> -->
  </div>
</template>
<script>
import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";
export default {
   components: {
    HeaderBar,
    FooterBar
  },
  data() {
    return {
      cssProps: {
        // backgroundImage: `url(${require("./assets/images/bg.jpg")})`,
        // "border" : "5px solid ",
        "background-repeat": "no-repeat, repeat",
        "background-color": "#fff",
      },
    };
  },
  mounted() {},
};
</script>
<style lang="scss">
// @import "./assets/css/bootstrap.min.css";
@import "./assets/css/metisMenu.min.css";
@import "./assets/css/timeline.css";
@import "./assets/css/startmin.css";
@import "./assets/css/morris.css";
// @import "./assets/css/font-awesome.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 15px 15px 15px;
  background-color: #103d82 !important;
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      color: #ddd;
    }
  }
}
#nav a:hover {
  background-color: #53637a;
  color: ddd;
}
.nav-link {
  display: inline-block !important;
}

.footer {
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #103d82 ;
   color: white;
   text-align: center;
}
</style>