<template>
  <div class="input__container">
    <div :class="'input__effect ' + filled">
      <input
        type="text"
        :placeholder="placeholder"
        @blur="$emit('blur', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        :class="'effect '"
      />
      <span class="focus__border" :style="focus__border"></span>
    </div>
    <!-- <span class="input__hint" v-if="show">{{ hint }}</span>
    <i class="material-icons input__icon">{{ icon }}</i> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    show: false,
  }),
  computed: {
    filled() {
      if (!this.show && this.value) {
        return "has__content";
      }
      return "";
    },
    focus__border() {
      return {
        "background-color": this.color,
      };
    },
  },
  props: {
    placeholder: { type: String, required: false, default: "" },
    color: { type: String, required: false, default: "indigo" },
  },
};
</script>
<style scoped>
::placeholder {
  opacity: 0.4;
}

input[type="text"] {
  color: #555;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  outline: none;
}

.input__container {
  width: 100%;
  padding: 0.5rem 0.5rem 0 0;
}

.input__effect {
  /* float: left; */
  width: 100%;
  margin: 1.5rem 0rem 1.5rem 0;
  position: relative;
} /* necessary to give position: relative to parent. */

.input__icon {
  position: relative;
  left: 0rem;
  top: -3.5rem;
  opacity: 0.3;
}
.input__hint {
  float: left;
  width: 100%;
  margin: -1.2rem 0 0 0;
  position: relative;
  font-size: 0.8rem;
  opacity: 0.6;
}

.effect {
  border: 0;
  padding: 4px 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
}

.effect ~ .focus__border {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: indigo;
  transition: 0.4s;
}

.effect:focus ~ .focus__border,
.has-content.effect ~ .focus__border {
  width: 100%;
  transition: 0.4s;
}

.effect ~ label {
  position: absolute;
  left: 0;
  width: 100%;
  top: -1.3rem;
  color: #aaa;
  transition: 0.3s;
  z-index: -1;
  letter-spacing: 0.5px;
}

.effect:focus ~ label,
.has__content.effect ~ label {
  top: -1rem;
  font-size: 12px;
  color: indigo;
  transition: 0.3s;
}

/* <input
                    type="text"
                    class="form-control"
                    :class="{ invalid: !email.isValid }"
                    placeholder= "Email/Username"
                    v-model="email.val"
                    @blur="clearValidity('email')"
                  /> 
                   <input
                    id="password-field"
                    type="password"
                    label="Email"  
                     class="form-control"
                    :class="{ invalid: !pass.isValid }"
                    placeholder= "password"
                    v-model="pass.val"
                    @blur="clearValidity('pass')"
                  />  */
</style>
