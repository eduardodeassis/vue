<template>
  <q-page class="flex justify-center">
    <div>
        <h4>Calculadora</h4> 
        
        <q-input v-model="texto" outlined readonly class="text-right" /><br><br>
        <q-btn label="7" type="button" color="primary" size="lg" @click="digito('7')" class="botao-padrao" />&nbsp;
        <q-btn label="8" type="button" color="primary" size="lg" @click="digito('8')" class="botao-padrao" />&nbsp;
        <q-btn label="9" type="button" color="primary" size="lg" @click=" digito('9')" class="botao-padrao" />&nbsp;
        <q-btn label="/" type="button" color="primary" size="lg" @click="digito('/')" class="botao-padrao" /><br><br>
        <q-btn label="4" type="button" color="primary" size="lg" @click="digito('4')" class="botao-padrao" />&nbsp;
        <q-btn label="5" type="button" color="primary" size="lg" @click="digito('5')" class="botao-padrao" />&nbsp;
        <q-btn label="6" type="button" color="primary" size="lg" @click="digito('6')" class="botao-padrao" />&nbsp;
        <q-btn label="*" type="button" color="primary" size="lg" @click="digito('*')" class="botao-padrao" /><br><br>
        <q-btn label="1" type="button" color="primary" size="lg" @click="digito('1')" class="botao-padrao" />&nbsp;
        <q-btn label="2" type="button" color="primary" size="lg" @click="digito('2')" class="botao-padrao" />&nbsp;
        <q-btn label="3" type="button" color="primary" size="lg" @click="digito('3')" class="botao-padrao" />&nbsp;
        <q-btn label="-" type="button" color="primary" size="lg" @click="digito('-')" class="botao-padrao" /><br><br>
        <q-btn label="+/-" type="button" color="primary" size="lg" @click="digito('!')" class="botao-padrao" />&nbsp;
        <q-btn label="0" type="button" color="primary" size="lg" @click="digito('0')" class="botao-padrao" />&nbsp;
        <q-btn label="," type="button" color="primary" size="lg" @click="digito('.')" class="botao-padrao" />&nbsp;
        <q-btn label="+" type="button" color="primary" size="lg" @click="digito('+')" class="botao-padrao" /><br><br>
        <q-btn label="=" type="button" color="primary" size="lg" @click="digito('=')" class="botao-padrao-2x2" />&nbsp;
        <q-btn label="Limpar" type="button" color="primary" size="lg" @click="limparTudo" class="botao-padrao-2x2" />

        
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
       resultado: 0,
       operacao: "",
       limpar: "S",
       tmp: ""
    }
  },

  methods: {
    // FUNCOES OU METODOS JAVASCRIPT
    removeZeroDireita() {
      this.tmp = this.texto;
      if (this.tmp.includes(".")) {        
        while (this.tmp.charAt(this.tmp.length-1)=="0") {
          this.tmp = this.tmp.substring(0, this.tmp.length-1);
        }
        if (this.tmp.charAt(this.tmp.length-1)==".") {
          this.tmp = this.tmp.substring(0, this.tmp.length-1);        
        }
      }
      this.texto = this.tmp;
    },
    calcular() {
      if (this.operacao == "+") {
        this.resultado = parseFloat(this.valor1) + parseFloat(this.valor2);        
        console.log(this.valor1 + " + " + this.valor2 + " = " + this.resultado.toFixed(5));
      } 
      else if (this.operacao == "-") {
        this.resultado = parseFloat(this.valor1) - parseFloat(this.valor2);        
        console.log(this.valor1 + " - " + this.valor2 + " = " + this.resultado.toFixed(5));
      }
      else if (this.operacao == "*") {
        this.resultado = parseFloat(this.valor1) * parseFloat(this.valor2);        
        console.log(this.valor1 + " * " + this.valor2 + " = " + this.resultado.toFixed(5));
      }
      else if (this.operacao == "/") {
        this.resultado = parseFloat(this.valor1) / parseFloat(this.valor2);        
        console.log(this.valor1 + " / " + this.valor2 + " = " + this.resultado.toFixed(5));
      }
      if ((parseFloat(this.valor2) == 0) && (this.operacao == '/')) {
        this.texto = "Não é possível dividir por zero";
      } 
      else {      
        this.texto = this.resultado.toFixed(5);  
        this.removeZeroDireita();
      }
    },
    digito(digitoBotao) {
      console.log("digitoBotao:"+digitoBotao);
      if ((digitoBotao == "+") || (digitoBotao == "-") || (digitoBotao == "*") || (digitoBotao == "/") || (digitoBotao == "=")) {
        if (digitoBotao == "=") {
          if (!(this.operacao == "")) {   
            this.valor2 = this.texto;       
            this.calcular();
          }
          this.valor1 = 0;
          this.operacao = "";
          this.limpar = "S";
        }
        else {
          if ((this.valor1 == 0) && (this.operacao == "")) {
            this.valor1 = this.texto;
            this.operacao = digitoBotao;
            this.limpar = "S";
          } 
          else {
            this.valor2 = this.texto;
            this.calcular();
            this.valor1 = this.texto;
            this.operacao = digitoBotao;
            this.limpar = "S";
          }
        }
      }
      else { 
        if (digitoBotao == "!") {
          this.resultado = parseFloat(this.texto);
          this.resultado = -1 * this.resultado;
          this.texto = this.resultado.toFixed(5);
          this.removeZeroDireita();
        }
        else if (digitoBotao == ".") {
          if ((!(this.texto.includes("."))) || (this.limpar == "S")) {
            if (this.limpar == "S") {
              this.texto = "0.";
              this.limpar = "N";
            }
            else {
              this.texto += digitoBotao;    
            } 

          }          
        }
        else if (this.limpar == "S") {
          this.texto = digitoBotao;
          this.limpar = "N";
        }
        else {
          this.texto += digitoBotao;    
        }        
      }
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
.botao-padrao {
    width: 50px; 
    height: 50px;
  }
.botao-padrao-2x2 {    
  width: 107px; 
  height: 50px;
}
</style>