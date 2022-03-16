<template>
  <!-- https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html -->
  <div class="container">
    <br>
    <h3 class="text-color">Mythology Book List:</h3>
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
        <tr v-for="(mbooks, id) in mythologyBooks" :key="id">
          <th scope="row">{{ mbooks.author }}</th>
          <td>{{ mbooks.bookname }}</td>
          <td>{{ mbooks.country }}</td>
          <td>{{ mbooks.language }}</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>
<script>
export default {
  name: "Mythology",
  data() {
    return {
    };
  },
   computed: {
     mythologyBooks() {
    return this.$store.getters.mythologyBooks[0]
    }
  },
  mounted() {
    this.$store.dispatch("getMythologyBook");
  }
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

.text-color{
  color: black;
}
</style>