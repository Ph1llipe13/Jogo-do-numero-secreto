let listaDeNumeroSorteado = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function textoInicial()
{
    exibirTextoNaTela('h1', 'Jogo do número secreto.');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10.');
}
textoInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto)
    {
        let palavratentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTexto = `Você descobriu o número secreto com ${tentativa} ${palavratentativa}. `;
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p',mensagemTexto);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }
    else
    {
        if (chute > numeroSecreto)
        {
            exibirTextoNaTela('p', 'O numero secreto é menor.')

        }
        else
        {
            exibirTextoNaTela('p','O numero secreto é maior')
        }
        tentativa++;
        limparCampo()
    }
}
function gerarNumeroAleatorio() 
{
    let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteado.length;
    if (quantidadeDeElementosNaLista == numeroLimite)
    {
        listaDeNumeroSorteado = [];
    }

    if(listaDeNumeroSorteado.includes(numeroEscolido))
    {
        return gerarNumeroAleatorio();
    }
    else
    {
        listaDeNumeroSorteado.push(numeroEscolido);
        console.log(listaDeNumeroSorteado);
        return numeroEscolido;
    }
    
}
function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = ''
}
function novoJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1 ;
    limparCampo();
    textoInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}