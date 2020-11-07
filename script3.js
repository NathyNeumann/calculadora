//pega o visor da calcularora
let valorVisor = document.querySelector('#idexibir');

//pega todos os numeros
let numeros = document.querySelectorAll('.number');
let aux="";//pega os valores do visor primeiro ou segundo
let res;// gera o resultado
let primeiroValor = "";// armazena somente o primeiro valor
let opera = ""; //armazena o operador para usar em %
//click para cada numero
numeros.forEach(function (botao) {
    botao.addEventListener("click", pegarValorTela )
    botao.addEventListener("touchstart", pegarValorTela )
});

function pegarValorTela (event) {
        aux += event.target.id;
        valorVisor.value = aux; 
}

//pega os operadores
let operacoes = document.querySelectorAll('.opera');

//click para cada operador
operacoes.forEach(function (operador) {
    operador.addEventListener("click", executaBotao);
    operador.addEventListener("touchstart", executaBotao);

});

function executaBotao (event) {

        
    switch(event.target.id){
        case 'raiz': //operações-fórmulas ja com resultado
            res = Math.sqrt(aux);
            aux = res;
            break;
        case 'porcentagem':
            if(primeiroValor == ""){
                res = aux/100;
                aux = res;
            }else if (opera == ""){
                res = aux/100;
                aux = res;
            }else{
                res = aux/100;
                res = primeiroValor * res;
                aux = res;
            }
            break;
        case 'aoQuadrado':
            res = (aux**2);
            aux = res;
            break;
        case '1dividido':
            res = 1/(aux);
            aux =res;
            break;
        case '/': //armazena o valor ja digitado, mostra operacao na tela limpa para novo valor
            primeiroValor = aux;
            opera = event.target.id;
            res = opera;
            aux ="";
            break;
        case '*':
            primeiroValor = aux;
            opera = event.target.id;
            res = opera;
            aux ="";
            break;
        case '+':
            primeiroValor = aux;
            opera = event.target.id;
            res = opera;
            aux ="";
            break;
        case '-':
            primeiroValor = aux;
            opera = event.target.id;
            res = opera;
            aux ="";
            break;
        case 'sinal': // troca o sinal
            if (valorVisor.value == "") {
                aux = valorVisor.value;
            }else if (valorVisor.value < 0) {
                aux = Math.abs(valorVisor.value);
            } else {
                aux = -(valorVisor.value);
            }
            res = aux;
            primeiroValor = aux;
            break;
        case "CE": //limpa tudo
            valorVisor.value="";
            aux="";
            primeiroValor = "";
            res="";
            opera="";
            break;
        case 'Apaga1': //apaga só o último
            let stringCortada = valorVisor.value.substring(0, valorVisor.value.length - 1);
            res = stringCortada;
            aux = res;
            break;
        case "=": //resultado conforme operação
            if (opera == "/"){
                if(aux == "" || aux == 0){
                    res = "Impossível!"
                }else{
                    res = Number(primeiroValor)/Number(aux);
                    aux = res;
                }
            }else if(opera == "*"){
                res = Number(primeiroValor)*Number(aux);
                aux = res;
            }else if(opera == "+"){
                res = Number(primeiroValor)+Number(aux);
                aux = res;
            }else if(opera == "-"){
                res = Number(primeiroValor)-Number(aux);
                aux = res;
            }else{
                res = aux;
            }
            opera = "";
           break;

    }   
    valorVisor.value = res;
    
}