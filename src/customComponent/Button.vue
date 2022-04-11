<template>
  <button
    :type="type"
    :style="{color,background}"
    :disabled="disabled"
    class="
      form-control
      btn
      px-3
      px-6
      py-2
      font-semibold
      text-white
      bg-blue-500
      rounded-md
      hover:opacity-95
      focus:outline-none">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'save',
    },
    color:{
      type: String
    },
    background: {
      type : String
    },
    disabled: {
      type : Boolean
    }
  },
};
</script>
<style scoped>
button:disabled{
  opacity: 0.5;
  background: gray;
}
.form-control:hover{
  filter: brightness(125%);
}
</style>