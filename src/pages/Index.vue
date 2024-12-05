<template>
  <q-page>
    <q-card>
      <q-card-section> 
        <h4>Calculadora</h4> 
      
        <q-input v-model="texto" outlined readonly class="text-right" /><br><br>

        <q-btn label="7" type="button" color="primary" size="lg" @click="digito('7')" class="botao-padrao" />&nbsp;
        <q-btn label="8" type="button" color="primary" size="lg" @click="digito('8')" class="botao-padrao" />&nbsp;
        <q-btn label="9" type="button" color="primary" size="lg" @click=" digito('9')" class="botao-padrao" />&nbsp;
        <q-btn label="/" type="button" color="primary" size="lg" @click="operador('/')" class="botao-padrao" /><br><br>
        <q-btn label="4" type="button" color="primary" size="lg" @click="digito('4')" class="botao-padrao" />&nbsp;
        <q-btn label="5" type="button" color="primary" size="lg" @click="digito('5')" class="botao-padrao" />&nbsp;
        <q-btn label="6" type="button" color="primary" size="lg" @click="digito('6')" class="botao-padrao" />&nbsp;
        <q-btn label="*" type="button" color="primary" size="lg" @click="operador('*')" class="botao-padrao" /><br><br>
        <q-btn label="1" type="button" color="primary" size="lg" @click="digito('1')" class="botao-padrao" />&nbsp;
        <q-btn label="2" type="button" color="primary" size="lg" @click="digito('2')" class="botao-padrao" />&nbsp;
        <q-btn label="3" type="button" color="primary" size="lg" @click="digito('3')" class="botao-padrao" />&nbsp;
        <q-btn label="-" type="button" color="primary" size="lg" @click="operador('-')" class="botao-padrao" /><br><br>
        <q-btn label="+/-" type="button" color="primary" size="lg" @click="operador('!')" class="botao-padrao" />&nbsp;
        <q-btn label="0" type="button" color="primary" size="lg" @click="digito('0')" class="botao-padrao" />&nbsp;
        <q-btn label="," type="button" color="primary" size="lg" @click="digito('.')" class="botao-padrao" />&nbsp;
        <q-btn label="+" type="button" color="primary" size="lg" @click="operador('+')" class="botao-padrao" /><br><br>
        <q-btn label="Limpar" type="button" color="primary" size="lg" @click="limparTudo" class="botao-padrao-2x2" />&nbsp;
        <q-btn label="=" type="button" color="primary" size="lg" @click="operador('=')" class="botao-padrao-2x2" />
        
        
      </q-card-section>

      <q-card-section>
        
      </q-card-section>
        
    </q-card>

  </q-page>
</template>

<script>
// import PBotao from './componentes/pBotao.vue'
export default {


  name: 'CalcularadoraPage',
  data () {
    return {
       // VARIAVEIS    42323232323
       texto: "0",
       valor1: 0, 
       valor2: 0, 
       resultado: 0,
       operacao: "",
       limpar: "S",
       tmp: ""
    }
  },

  methods: {
    // FUNCOES OU METODOS JAVASCRIPT
    removeZeroDireita(valor) {
      this.$refs
      let tmp = valor;
      if (tmp.includes(".")) {        
        while (tmp.charAt(tmp.length-1)=="0") {
          tmp = tmp.substring(0, tmp.length-1);
        }
        if (tmp.charAt(tmp.length-1)==".") {
          tmp = tmp.substring(0, tmp.length-1);        
        }
      }
      return tmp;
    },
    limparTudo() {
      this.texto = "0";
      this.valor1 = 0;
      this.valor2 = 0;
      this.operacao = "";
      this.limpar = "S";
    },
     calcular(valor1, valor2, operacaoClicada) {
      let operacao = {
        '+': (valor1, valor2) => valor1 + valor2,
        '-': (valor1, valor2) => valor1 - valor2,
        '*': (valor1, valor2) => valor1 * valor2,
        '/': (valor1, valor2) => valor1 / valor2
      }

      return operacao[operacaoClicada](valor1, valor2)
    },
    digito(digitoBotao) { 
      if (digitoBotao === ".") {
        if (this.limpar == "S") {
          this.texto = "0.";
          this.limpar = "N";
        }
        else {            
          if (!(this.texto.includes("."))) {
            this.texto += digitoBotao;            
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
    preencheValor1(valor, operadorBotao){
      if (operadorBotao !== valor) {
        this.valor1 = valor;
        this.operacao = operadorBotao;
        this.limpar = "S";
      } 
      else {
        this.operacao = "";
        this.limpar = "N";
      }
    },
    igual(valor) {
      let resultado;
      if (!(this.operacao === "")) {
        this.valor2 = valor;
        if (this.valor2 == 0 && this.operacao == '/') {
          resultado = "Não é possível dividir por zero"
        }
        else {          
          const valor = this.calcular(this.valor1, this.valor2, this.operacao)
          resultado = this.removeZeroDireita(valor.toFixed(5));          
        }
        this.limpar = "S";
        this.operacao = "";
        return resultado;
      }
    },
    operador(operadorBotao) {
      if (operadorBotao == "!") {
        this.resultado = parseFloat(this.texto);
        this.resultado = -1 * this.resultado;
        this.texto = this.removeZeroDireita(this.resultado.toFixed(5));        
      }
      else {
        if (this.texto.includes("Não") && this.texto.includes("zero")) {
          this.texto = "0";
          this.limpar = "N";
        }
        if (this.operacao == "") {
          this.preencheValor1(parseFloat(this.texto), operadorBotao);
        }
        else {          
          if (this.operacao == "=") {
            this.texto = this.igual(parseFloat(this.texto));            
          }
          else {            
            this.texto = this.igual(parseFloat(this.texto));            
            this.preencheValor1(parseFloat(this.texto), operadorBotao);
          }  
        }       
      }
    }
  },

  mounted() {
    // SE PRECISAR INICIALIZAR ALGO QUANDO A PAGINAR CARREGAR
    this.texto = "0",
    this.limpar = "S"
  },

  components: {}
}
</script>
<style scoped>
.text-right {
  text-align: right;
}
.botao-padrao {
    width: 50px; 
    height: 50px;
  }
.botao-padrao-2x2 {    
  width: 107px; 
  height: 50px;
}
</style>