<template>
  <!-- https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html -->
  <div class="container">
    <br />
    <h3 class="text-color">Science Book List:</h3>
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
        <tr v-for="(sbooks, id) in scienceBooks" :key="id">
          <th scope="row">{{ sbooks.author }}</th>
          <td>{{ sbooks.bookname }}</td>
          <td>{{ sbooks.country }}</td>
          <td>{{ sbooks.language }}</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>
<script>
export default {
  name: "ScienceBooks",
  data() {
    return {};
  },
  computed: {
    scienceBooks() {
      return this.$store.getters.scienceBooks[0];
    },
  },
  mounted() {
    this.$store.dispatch("getScienceBook");
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