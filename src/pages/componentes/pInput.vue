<template>
  <div>
    <q-input 
      outlined 
      rounded 
      :label="etiqueta" 
      v-model="vmodelo" 
    />    
  </div>
</template>

<script>
export default {
  name:'pInput',
  props: {
    etiqueta: { type: String, required: true },
    vomodelo: { type: String, required: true },
  
  },
  methods: {
  }
}
</script>