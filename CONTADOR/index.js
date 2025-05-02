let contador = 0 //variavel contador
let mensagemExibida = false //flask para uso da function "aparecerMensagem"

//function que informa um alert apos o contador ficar em -3 e que reseta apos ficar maior que -3
const aparecerMensagem = () => {
    if(contador < -2 && !mensagemExibida){
    alert('Nao permitido ficar abaixo de -3 ')
    mensagemExibida = true
}

    if(contador > -3) {
        mensagemExibida = false
}
}

//function que atualiza o numero do contador, tambem colocar novamente a mensagem quando esta acima de -3
const atualizarContador = () => {
    document.getElementById('valorContador').textContent = contador
    aparecerMensagem()
}

//function de incremento do contador
const adicionarClique = () => {
    contador ++
    atualizarContador()
}

//function para decrementar o contador e impedir que o contador fique abaixo de -3
const tirarClique = () => {
    if(contador > -3) {
        contador --
        atualizarContador()
} else{
    alert('Nao permitido')
}
}

