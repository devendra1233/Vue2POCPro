<template>
  <!-- https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html -->
  <div class="container">
    <br>
    <h3 class="text-color">Book List:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Country</th>
          <th scope="col">ImageLink</th>
          <th scope="col">Buy Book</th>
          <th scope="col">year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(hbooks, id) in historyBooks" :key="id">
          <th scope="row">{{ hbooks.title }}</th>
          <td>{{ hbooks.author }}</td>
          <td>{{ hbooks.country }}</td>
          <td>{{ hbooks.language }}</td>
          <td>
            <a v-bind:href="hbooks.link" target="_blank">Buy</a>
          </td>
          <td>{{ hbooks.year }}</td>
        </tr>
      </tbody>
    </table>
    <br />
  </div>
</template>
<script>
export default {
  name: "Books",
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