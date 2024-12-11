<template>
  <div>
    <q-btn
      :label="etiqueta"
      :color="cor"
    />
  </div>
</template>

<script>
export default {
  props: {
    etiqueta: { type: String, required: true },
    cor: { type: String, default: "primary" },
  },

  data() {
    return {

    }
  },

  methods: {

  }
}


</script>
  
export default defineComponent({
  name: "Botao",
  props: {
   
  },
  methods: {
    handleClick() {
      this.$emit("click"); // Emite um evento para o pai quando o botão for clicado
    },
  },
});