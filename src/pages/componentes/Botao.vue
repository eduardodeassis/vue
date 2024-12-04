<template>
  <q-btn
    :label="label"
    :type="type"
    :color="color"
    @click="handleClick"
  />
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
  name: "Botao",
  props: {
    label: { type: String, required: true }, // Torna obrigatório passar um label
    type: { type: String, default: "button" },
    color: { type: String, default: "primary" },
  },
  methods: {
    handleClick() {
      this.$emit("click"); // Emite um evento para o pai quando o botão for clicado
    },
  },
});
</script>
  