exibirMensagemInicial();
let listaNumeroEscolhido = [];
let numeroLimite = 200;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;




function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do número Secreto' );
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 200');
    
}

function verificarChute(){
    let chute = document.querySelector('input').value;  
        if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns! Você acertou em ${tentativas} ${palavraTentativa} ` ;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');

        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limpaCampo();
        
        
    }
        
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaNumeroEscolhido.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaNumeroEscolhido = [];
    }
    if(listaNumeroEscolhido.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumeroEscolhido.push(numeroEscolhido);
        console.log(listaNumeroEscolhido);
        return numeroEscolhido;
    }
}

function limpaCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciaJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limpaCampo();
    tentativas = 1;    
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}