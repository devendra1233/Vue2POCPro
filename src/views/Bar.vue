<template>
  <div>
    <h3>Bar Chart Example in Vue</h3>
    <bar-chart  
      ></bar-chart>
  </div>
</template>
<script>
import axios from "axios";
import BarChart from '@/components/BarChart'
export default {
  components: {
    BarChart
  },
   data: () => ({
    loaded: false,
    chartdata: null
  }),
   async mounted () {
    this.loaded = false
    try {
       axios  
      .get(
        "https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/scienceBook.json"
      )
      .then((res) => {
        this.chartdata = res.data;
        this.loaded = true
        console.log("chartdata",this.chartdata)
      });
      // const { userlist } = await fetch('https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/scienceBook.json')
      // this.chartdata = userlist
      // this.loaded = true
      // console.log("chartdata",this.chartdata)
    } catch (e) {
      console.error(e)
    }
  }
}
</script>