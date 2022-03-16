<template>
  <!-- https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html -->
  <div class="container">
    <br>
    <h3 class="text-color">History Book List:</h3>
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
        <tr v-for="(hbooks, id) in historyBooks" :key="id">
          <th scope="row">{{ hbooks.author }}</th>
          <td>{{ hbooks.bookname }}</td>
          <td>{{ hbooks.country }}</td>
          <td>{{ hbooks.language }}</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>
<script>
export default {
  name: "HistoryBooks",
  data() {
    return {
    };
  },
   computed: {
     historyBooks() {
    return this.$store.getters.historyBooks[0]
    }
  },
  mounted() {
    this.$store.dispatch("getHistoryBook");
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