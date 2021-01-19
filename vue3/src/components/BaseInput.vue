<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style scoped>
label {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  text-align: left;
}
input {
  display: inline-flex;
  font-family: 'Open sans', sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  box-sizing: border-box;
  border: solid 1px rgba(0, 0, 0, 0.4);
  height: 52px;
  width: 100%;
  padding: 0 10px;
  font-size: 20px;
}
input.error {
  margin-bottom: 0;
}
input + p.errorMessage {
  margin-bottom: 24px;
}
input:focus {
  outline: none;
  border-color: #39b982;
}
.field {
  margin-bottom: 24px;
}
</style>
