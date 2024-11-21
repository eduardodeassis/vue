<template>
  <q-page class="flex justify-center">
    <div>
        <h4>Calculadora</h4> 
        
        <q-input v-model="texto" outlined class="text-right" /><br><br>
        <q-btn label="7" type="button" color="primary" size="lg" @click="digito('7')" />&nbsp;
        <q-btn label="8" type="button" color="primary" size="lg" @click="digito('8')" />&nbsp;
        <q-btn label="9" type="button" color="primary" size="lg" @click=" digito('9')" />&nbsp;
        <q-btn label="/" type="button" color="primary" size="lg" @click="digito('/')" /><br><br>
        <q-btn label="4" type="button" color="primary" size="lg" @click="digito('4')" />&nbsp;
        <q-btn label="5" type="button" color="primary" size="lg" @click="digito('5')" />&nbsp;
        <q-btn label="6" type="button" color="primary" size="lg" @click="digito('6')" />&nbsp;
        <q-btn label="*" type="button" color="primary" size="lg" @click="digito('*')" /><br><br>
        <q-btn label="1" type="button" color="primary" size="lg" @click="digito('1')" />&nbsp;
        <q-btn label="2" type="button" color="primary" size="lg" @click="digito('2')" />&nbsp;
        <q-btn label="3" type="button" color="primary" size="lg" @click="digito('3')" />&nbsp;
        <q-btn label="-" type="button" color="primary" size="lg" @click="digito('-')" /><br><br>
        <q-btn label="+/-" type="button" color="primary" size="lg" @click="digito('!')" />&nbsp;
        <q-btn label="0" type="button" color="primary" size="lg" @click="digito('0')" />&nbsp;
        <q-btn label="," type="button" color="primary" size="lg" @click="digito(',')" />&nbsp;
        <q-btn label="+" type="button" color="primary" size="lg" @click="digito('+')" /><br><br>
        <q-btn label="=" type="button" color="primary" size="lg" @click="digito('=')" />&nbsp;
        <q-btn label="Limpar" type="button" color="primary" size="lg" @click="limparTudo" />

        
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CalcularadoraPage',

  data () {
    return {
       // VARIAVEIS    42323232323
       texto: "0",
       valor1: 0, 
       valor2: 0, 
       operacao: "",
       limpar: "S"
    }
  },

  methods: {
    // FUNCOES OU METODOS JAVASCRIPT
    digito(digitoBotao) {
      if ((digitoBotao == "+") || (digitoBotao == "-") || (digitoBotao == "*") || (digitoBotao == "/") || (digitoBotao == "=")) {
        if (digitoBotao == "=") {
          if (!(this.operacao == "")) {          
            calcular();
          }
          this.valor1 = 0;
          this.operacao = "";
        }
        else {
          if ((this.valor1 == 0) && (this.operacao == "")) {
            this.valor1 = this.texto;
            this.operacao = digitoBotao;
            this.limpar = "S";
          } 
          else {
            this.valor2 = this.texto;
            calcular();
            this.valor1 = this.texto;
            this.operacao = digitoBotao;
            this.limpar = "S";
          }
        }
      }
      else { 
        if (this.limpar == "S") {
          this.texto = digitoBotao;
          this.limpar = "N";
        }
        else {
          this.texto += digitoBotao;    
        }        
      }
    },
    calcular() {
      this.texto = this.valor1 + this.valor2;  
    },
    limparTudo() {
      this.texto = "0";
      this.valor1 = 0;
      this.valor2 = 0;
      this.operacao = "";
      this.limpar = "S";
    }
  },

  mounted() {
    // SE PRECISAR INICIALIZAR ALGO QUANDO A PAGINAR CARREGAR
    this.texto = "0",
    this.limpar = "S"
  }
}
</script>
<style scoped>
.text-right {
  text-align: right;
}
</style>