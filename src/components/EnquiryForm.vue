<template>
  <div>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section">Register In Book Store</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8 col-lg-6">
            <div class="login-wrap p-0">
              <form @submit.prevent="submitForm" class="signin-form">
                <div class="form-group">
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    :class="{ invalid: !name.isValid }"
                    placeholder="Name"
                    v-model="name.val"
                    @blur="clearValidity('name')"
                  />
                  <p v-if="!name.isValid" :class="{ invalid: !name.isValid }">
                    Please enter valid Name
                  </p>
                </div>
                <div class="form-group">
                  <input
                    id="email-field"
                    type="text"
                    class="form-control"
                    :class="{ invalid: !email.isValid }"
                    placeholder="Email"
                    v-model="email.val"
                    @blur="clearValidity('email')"
                  />
                  <p v-if="!email.isValid" :class="{ invalid: !email.isValid }">
                    Please enter valid Email
                  </p>
                </div>
                <div class="form-group">
                  <input
                    id="mobile-field"
                    type="text"
                    class="form-control"
                    :class="{ invalid: !mobile.isValid }"
                    placeholder="Mobile/Phone No"
                    v-model="mobile.val"
                    @blur="clearValidity('mobile')"
                  />
                  <p
                    v-if="!mobile.isValid"
                    :class="{ invalid: !mobile.isValid }"
                  >
                    Please enter valid Mobile number
                  </p>
                </div>
                <div class="form-group">
                  <input
                    id="address-field"
                    type="text"
                    class="form-control"
                    :class="{ invalid: !address.isValid }"
                    placeholder="Address"
                    v-model="address.val"
                     @blur="clearValidity('address')"
                  />
                  <p
                    v-if="!address.isValid"
                    :class="{ invalid: !address.isValid }"
                  >
                    Please enter valid Address
                  </p>
                </div>
                <div class="form-group">
                  <input
                    id="query-field"
                    type="text"
                    class="form-control"
                    :class="{ invalid: !query.isValid }"
                    placeholder="Add you query"
                    v-model="query.val"
                     @blur="clearValidity('query')"
                  />
                  <p v-if="!query.isValid" :class="{ invalid: !query.isValid }">
                    Please enter valid Qurey
                  </p>
                </div>
                <div class="form-group">
                     <Button color="pink" background="#558bd3">Sign In</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Button from "@/customComponent/Button";
export default {
    components: {
    Button
  },
  data() {
    return {
      name: {
        val: "",
        isValid: true,
      },
      email: {
        val: "",
        isValid: true,
      },
      mobile: {
        val: "",
        isValid: true,
      },
      address: {
        val: "",
        isValid: true,
      },
      query: {
        val: "",
        isValid: true,
      },
    };
  },
  computed: {
    bookEnquiry() {
      return this.$store.getters.bookEnquiry;
    },
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.name.val === "") {
        this.name.isValid = false;
        this.formIsValid = false;
      }
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.mobile.val === "") {
        this.mobile.isValid = false;
        this.formIsValid = false;
      }
      if (this.address.val === "") {
        this.address.isValid = false;
        this.formIsValid = false;
      }
      if (this.query.val === "") {
        this.query.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        name: this.name.val,
        email: this.email.val,
        mobile: this.mobile.val,
        address: this.address.val,
        query: this.query.val,
      };
      this.$store.dispatch("getBookEnquiry", formData);
      alert("Enquiry register sucessfully");
      setTimeout(() => this.$router.push({ path: "/home" }), 2000);
    },
  },
  mounted() {},
};
</script>
<style  scoped>
@import "../assets/css/style.css";
.form-control,
.form-control:hover,
.form-control:focus {
  background: #558bd3;
  outline: none;
  box-shadow: none;
  border-color: rgba(255, 255, 255, 0.4);
}
.heading-section {
  color: black;
}
.invalid {
  color: red;
  font-weight: bold;
  text-shadow: #558bd3;
}
</style>