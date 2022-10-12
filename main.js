const botao = document.querySelector("#button")
const span = document.querySelector("#span")

botao.onclick = clickBotao

function clickBotao (e) {
    let valorDigitado = e.target.value

    span.innerText += valorDigitado

 /*   if (+valorDigitado >= 0 || valorDigitado === ".") {
        console.log(valorDigitado)
    } else {
        console.log("op:" + valorDigitado)
    }

    */
}


//Botao limpar tudo AC

const limpar = document.querySelector("#ac")
limpar.onclick = clickLimpar


function clickLimpar () {    
    span.innerHTML = ""
}

//Botao voltar atras <

const voltar = document.querySelector("#voltar")

voltar.onclick = clickVoltar

function clickVoltar () {
    let resultado = span.innerHTML

    span.innerHTML = resultado.substring(0, resultado.length -1)
}


//Botao Operacao =

const calcular = document.querySelector("#operacao")

calcular.onclick = botaoCalcular

function botaoCalcular () {
    let resultado = span.innerHTML

    if(resultado){
        span.innerHTML = eval(resultado)
    } else {}

    console.log()
}
