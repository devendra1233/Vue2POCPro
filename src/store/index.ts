import Vue from 'vue'
import Vuex from 'vuex'
// import dependency to handle HTTP request to our back end
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    historyBooks: [],
    scienceBooks: [],
    mythologyBooks: [],
    fusionBooks: [],
    bookEnquiry: ""
  },
  //to handle state
  getters: {
    historyBooks: (state) => state.historyBooks,
    scienceBooks: (state) => state.scienceBooks,
    mythologyBooks: (state) => state.mythologyBooks,
    fusionBooks: (state) => state.fusionBooks,
    bookEnquiry: (state) => state.bookEnquiry
  },
  mutations: {
    SET_HBOOK(state, historyBooks) {
      state.historyBooks = historyBooks
    },
    SET_SBOOK(state, scienceBooks) {
      state.scienceBooks = scienceBooks
    },
    SET_MBOOK(state, mythologyBooks) {
      state.mythologyBooks = mythologyBooks
    },
    SET_FBOOK(state, fusionBooks) {
      state.fusionBooks = fusionBooks
    },
    SET_ENUIRY(state, bookEnquiry) {
      state.bookEnquiry = bookEnquiry
    }
  },
  actions: {
    async getHistoryBook({ commit }) {
      try{
        let response = await fetch(`https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/historyBook.json`);
        let data = await response.json()
        const historyBooks = data;
        const historyBooksLength = historyBooks.length;
        console.log("historyBooksLength", historyBooksLength)
        commit('SET_HBOOK', [historyBooks, historyBooksLength])
      }catch(err){
        console.error(err);
        // Handle errors here
      }
    },

    // async getHistoryBook({ commit }) {
    //   let response = await fetch(`https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/barChart.json`);
    //   let data = await response.json()
    //   const historyBooks = data;
    //   const historyBooksLength = historyBooks.length;

    //   console.log("historyBooksLength", historyBooksLength)
    //   console.log("historyBooks", historyBooks)
    //   commit('SET_HBOOK', [historyBooks, historyBooksLength])
    // },

    async getScienceBook({ commit }) {
      try{
        let response = await fetch(`https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/scienceBook.json`);
        let data = await response.json()
        const scienceBooks = data;
        const scienceBooksLength = scienceBooks.length;
        console.log("scienceBooksLength", scienceBooksLength)
        commit('SET_SBOOK', [scienceBooks, scienceBooksLength])
      }catch(err){
        console.error(err);
        // Handle errors here
      }
    },

    // getScienceBook({ commit }) {
    //   axios.get('https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/scienceBook.json')
    //     .then(response => {
    //       const scienceBooks = response.data;
    //       const scienceBooksLength = scienceBooks.length;
    //       console.log("scienceBooksLength", scienceBooksLength)
    //       commit('SET_SBOOK', [scienceBooks, scienceBooksLength])
    //     })
    // },

    async getMythologyBook({ commit }) {
      try{
        let response = await fetch(`https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/mythologyBook.json`);
        let data = await response.json()
        const mythologyBooks = data;
        const mythologyBooksLength = mythologyBooks.length;
        console.log("mythologyBooksLength", mythologyBooksLength)
        commit('SET_MBOOK', [mythologyBooks, mythologyBooksLength])
      }catch(err){
        console.error(err);
        // Handle errors here
      }
    },

    // getMythologyBook({ commit }) {
    //   axios.get('https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/mythologyBook.json')
    //     .then(response => {
    //       const mythologyBooks = response.data;
    //       const mythologyBooksLength = mythologyBooks.length;
    //       console.log("mythologyBooksLength", mythologyBooksLength)
    //       commit('SET_MBOOK', [mythologyBooks, mythologyBooksLength])
    //     })
    // },


    async getFusionBook({ commit }) {
      try{
        let response = await fetch(`https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/mythologyBook.json`);
        let data = await response.json()
        const fusionBooks = data;
        const fusionBooksLength = fusionBooks.length;
        console.log("fusionBooksLength", fusionBooksLength)
        commit('SET_FBOOK', [fusionBooks, fusionBooksLength])
      }catch(err){
        console.error(err);
        // Handle errors here
      }
    },

    // getFusionBook({ commit }) {
    //   axios.get('https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/fusionBook.json')
    //     .then(response => {
    //       const fusionBooks = response.data;
    //       const fusionBooksLength = fusionBooks.length;
    //       console.log("fusionBooksLength", fusionBooksLength)
    //       commit('SET_FBOOK', [fusionBooks, fusionBooksLength])
    //     })
    // },



    getLoginUser({ commit }, payload) {
      const newRequest = {
        identifier: payload.email,
        password: payload.password,
      };
      axios.post('http://20.114.244.229:1337/auth/local', newRequest)
        .then(
          login => {
            if (login.status == 200) {
              payload.router.push({ path: '/home' });
              const loginUser = login.data.user.username;
              localStorage.setItem('LoggedUser', login.data.jwt);
              commit('SET_loginUser', [loginUser]);
            }
          },
          error => {
            console.log(error);
            alert("failed to authenticate, try later.")
            // const loginStatus = "failed to authenticate, try later.";
            // commit('SET_loginUser', [loginStatus]);
            commit('SET_loginUser', "Failed to authenticate, try later.");
          }
        );
    },

    async getBookEnquiry(context, payload) {
      // Simple POST request with a JSON body using fetch
      const newRequest = {
        name: payload.name,
        email: payload.email,
        mobile: payload.mobile,
        adress: payload.addres,
        query: payload.query,
      };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newRequest })
      };
      let response = await fetch("https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/enquiry.json", requestOptions);
      let data = await response.json()
      const fusionBooks = data;
      const fusionBooksLength = fusionBooks.length;
      console.log("fusionBooksLength", fusionBooksLength)
      context.commit('SET_ENUIRY', data);
    }

    // getBookEnquiry(context, payload) {
    //   const newRequest = {
    //     name: payload.name,
    //     email: payload.email,
    //     mobile: payload.mobile,
    //     adress: payload.addres,
    //     query: payload.query,
    //   };
    //   try {
    //     const response = axios.post('https://vue2poc-default-rtdb.asia-southeast1.firebasedatabase.app/enquiry.json', newRequest)
    //       .then((response) => {
    //         context.commit('SET_ENUIRY', response.data);
    //       });
    //   } catch (error) {
    //     // this.error = error;
    //     // context.commit('SET_bookService', this.error);
    //   }
    // },


  },
  modules: {
  },

})
