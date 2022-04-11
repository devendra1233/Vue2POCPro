<template>
  <div>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-3">
            <h2 class="heading-section">Login</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
              <form @submit.prevent="submitForm" class="signin-form">
                <div class="form-group">
                  <InputText
                    id="password-field"
                    type="password"
                     color="green" 
                    :class="{ invalid: !pass.isValid }"
                    placeholder= "Email/Username"
                    v-model="email.val"
                    @blur="clearValidity('email')"
                  /> 
                  <p v-if="!email.isValid" :class="{ invalid: !email.isValid }">
                    Please enter valid email
                  </p>
                </div>
                <div class="form-group">
                    <InputText
                    id="password-field"
                    type="password"
                    color="green" 
                    :class="{ invalid: !pass.isValid }"
                    placeholder= "password"
                    v-model="pass.val"
                    @blur="clearValidity('pass')"
                  /> 
                  <p v-if="!pass.isValid" :class="{ invalid: !pass.isValid }">
                    Please enter valid password
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
import InputText from "@/customComponent/InputText";
import Button from "@/customComponent/Button";
export default {
  components: {
    InputText,
    Button
  },
  data() {
    return {
      email: {
        val: "",
        isValid: true,
      },
      pass: {
        val: "",
        isValid: true,
      },
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      this.formIsValid = true;
      if (this.email.val === "" || !this.email.val.includes("@")) {
        this.email.isValid = false;
        this.formIsValid = false;
      }
      if (this.pass.val === "") {
        this.pass.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formIsValid) {
        return;
      }
      const formData = {
        email: this.email.val,
        password: this.pass.val,
        router: this.$router,
      };
      this.$store.dispatch("getLoginUser", formData);
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style  scoped>
@import "../assets/css/style.css";
.ftco-section {
  color: black;
}
.form-control,
.form-control:hover,
.form-control:focus {
  background: #558bd3;
  outline: none;
  box-shadow: none;
  border-color: rgba(255, 255, 255, 0.4);
}
.invalid {
  color: red;
  font-weight: bold;
}

.heading-section {
  color: black;
}
</style>
