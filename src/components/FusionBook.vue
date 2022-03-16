<template>
  <!-- https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html -->
  <div class="container">
    <br />
    <h3 class="text-color">Fusion Book List:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">BookName</th>
          <th scope="col">Country</th>
          <th scope="col">Language</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(fbooks, id) in fusionBooks" :key="id">
          <th scope="row">{{ fbooks.author }}</th>
          <td>{{ fbooks.bookname }}</td>
          <td>{{ fbooks.country }}</td>
          <td>{{ fbooks.language }}</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>
<script>
export default {
  name: "Fusion",
  data() {
    return {};
  },
  computed: {
    fusionBooks() {
      return this.$store.getters.fusionBooks[0];
    },
  },
  mounted() {
    this.$store.dispatch("getFusionBook");
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 2px solid black;
  color: black;
  padding: 15px;
}
.text-color {
  color: black;
}
</style>