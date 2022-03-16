<template>
  <div>
    <!-- <div id="page-wrapper"> -->
    <div id="HomeComponent">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <br />
            <h1 class="page-header">Dashboard</h1>
            <br />
          </div>
          <!-- /.col-lg-12 -->
        </div>
        <!-- /.row -->
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-style bg-info">
              <div class="panel-heading">
                <div class="row" @click="historyBookPage">
                  <div class="col-xs-3">
                    <div class="huge">{{ historyBooks }}</div>
                  </div>
                  <div class="col-xs-9">
                    <span class="text-left">History Books</span>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <span class="pull-left">View Details</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-style bg-success">
              <div class="panel-heading">
                <div class="row" @click="mythologyBookPage">
                  <div class="col-xs-3">
                    <div class="huge">{{mythologyBooks}}</div>
                  </div>
                  <div class="col-xs-9">
                    <span class="text-left">Mythology Books</span>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <span class="pull-left">View Details</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-style bg-warning">
              <div class="panel-heading">
                <div class="row" @click="scienceBookPage">
                  <div class="col-xs-3">
                    <div class="huge">{{scienceBooks}}</div>
                  </div>
                  <div class="col-xs-9">
                    <span class="text-left">Science Books</span>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <span class="pull-left">View Details</span>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <div class="panel panel-style bg-danger">
              <div class="panel-heading">
                <div class="row" @click="fusionBookPage">
                  <div class="col-xs-3">
                    <div class="huge">{{fusionBooks}}</div>
                  </div>
                  <div class="col-xs-9">
                    <span class="text-left">Fusion Books</span>
                  </div>
                </div>
              </div>
              <div class="panel-footer">
                <span class="pull-left">View Details</span>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <br />
        <!-- /.row -->
        <div class="row">
          <div class="col-lg-7">
            <div class="panel panel-default" @click="lineChart">
              <line-chart></line-chart>
            </div>
          </div>
          <!-- /.col-lg-8 -->
          <div class="col-lg-5">
            <div class="panel panel-default" @click="doughnut">
              <doughnut-chart></doughnut-chart>
            </div>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
  </div>
</template>
<script>
import LineChart from "@/components/LineChart";
import DoughnutChart from "@/components/DoughnutChart";
export default {
  components: {
    LineChart,
    DoughnutChart,
  },
  methods: {
    historyBookPage() {
      this.$router.push("/historybook");
    },
    mythologyBookPage() {
      this.$router.push("/mythologybook");
    },
    scienceBookPage() {
      this.$router.push("/sciencebook");
    },
    fusionBookPage() {
      this.$router.push("/fusionbook");
    },
    lineChart() {
      this.$router.push("/line");
    },
    doughnut() {
      this.$router.push("/doughnut");
    },
  },
  computed: {
    historyBooks() {
      return this.$store.getters.historyBooks[1];
    }
    ,
    scienceBooks() {
      return this.$store.getters.scienceBooks[1];
    },
    mythologyBooks() {
      return this.$store.getters.mythologyBooks[1];
    },
    fusionBooks() {
      return this.$store.getters.fusionBooks[1];
    },
  },
  mounted() {
    this.$store.dispatch("getHistoryBook");
    this.$store.dispatch("getScienceBook");
    this.$store.dispatch("getMythologyBook");
    this.$store.dispatch("getFusionBook");
  },
};
</script>

<style scoped>
#HomeComponent{
  padding: 20px 20px 60px 20px;
}
.panel-style {
  color: white;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.panel-style:hover {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}
.panel-footer {
  color: black;
  padding: 10px 15px;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}
</style>