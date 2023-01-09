function selecionaRefeicao(refeicaoSelecionada){
    const desmarca = document.querySelector(".selecionadoR");
    if(desmarca!==null){
        desmarca.classList.remove("selecionadoR");
    }
    const selecao = document.querySelector(refeicaoSelecionada);
    selecao.classList.add("selecionadoR");
    
    habilitaBotao()
}

function selecionaBebida(bebidaSelecionada){
    const desmarca = document.querySelector(".selecionadoB");
    
    if(desmarca!==null){
        desmarca.classList.remove("selecionadoB");
        
    }
    const selecao = document.querySelector(bebidaSelecionada);
    selecao.classList.add("selecionadoB");

    habilitaBotao()
    }

function selecionaSobremesa(sobremesaSelecionada){
    const desmarca = document.querySelector(".selecionadoS");
        
    if(desmarca!==null){
        desmarca.classList.remove("selecionadoS");
    }
    const selecao = document.querySelector(sobremesaSelecionada);
    selecao.classList.add("selecionadoS");

    habilitaBotao()
}

function habilitaBotao(){
    const R = document.querySelector(".selecionadoR");
    const B = document.querySelector(".selecionadoB");
    const S = document.querySelector(".selecionadoS");
    if((R!==null)&&(B!==null)&&(S!==null)){
        const ligar = document.querySelector(".botao1");
        ligar.classList.add("fecharPedido");
        document.querySelector(".botao1 button").innerHTML="Fechar pedido";
        document.querySelector(".botao1 button").disabled = false;
    }
}

function mensagem(){
    if(document.querySelector(".botao1 button").disabled === false){
        const fulano = prompt("Qual é o seu nome?");
        const rua = prompt("qual é o seu endereço?");

        const prato = document.querySelector(".selecionadoR p").innerHTML;
        const bebida = document.querySelector(".selecionadoB p").innerHTML;
        const sobremesa = document.querySelector(".selecionadoS p").innerHTML;
        let precoPrato = (document.querySelector(".selecionadoR p:nth-child(4)").innerHTML.replace(/[^0-9,]/g,'')).replace(",",".");
        let precoBebida = (document.querySelector(".selecionadoB p:nth-child(4)").innerHTML.replace(/[^0-9,]/g,'')).replace(",",".");
        let precoSobremesa = (document.querySelector(".selecionadoS p:nth-child(4)").innerHTML.replace(/[^0-9,]/g,'')).replace(",",".");
    
        precoPrato = Number(precoPrato);
        precoBebida = Number(precoBebida);
        precoSobremesa = Number(precoSobremesa);
        const total = precoPrato+precoBebida+precoSobremesa;
        const mensagemZap = `Olá, gostaria de fazer o pedido:\n
        - Prato: ${prato}\n
        - Bebida: ${bebida}\n
        - Sobremesa: ${sobremesa}\n
        Total: R$ ${total.toFixed(2)}\n\n
        Nome: ${fulano}\n
        Endereço: ${rua}`
        const link = encodeURIComponent(mensagemZap);
        open("https://wa.me/5531999999999?text="+link);
    }
}
function finalizaPedido(){
    const prato = document.querySelector(".selecionadoR p").innerHTML;
    const bebida = document.querySelector(".selecionadoB p").innerHTML;
    const sobremesa = document.querySelector(".selecionadoS p").innerHTML;
    let precoPrato = (document.querySelector(".selecionadoR p:nth-child(4)").innerHTML.replace(/[^0-9,]/g,'')).replace(",",".");
    let precoBebida = (document.querySelector(".selecionadoB p:nth-child(4)").innerHTML.replace(/[^0-9,]/g,'')).replace(",",".");
    let precoSobremesa = (document.querySelector(".selecionadoS p:nth-child(4)").innerHTML.replace(/[^0-9,]/g,'')).replace(",",".");
    
    precoPrato = Number(precoPrato);
    precoBebida = Number(precoBebida);
    precoSobremesa = Number(precoSobremesa);
    let total = precoPrato+precoBebida+precoSobremesa;
    total = total.toFixed(2);
    precoBebida = precoBebida.toFixed(2);
    precoPrato = precoPrato.toFixed(2);
    precoSobremesa = precoSobremesa.toFixed(2);

    document.querySelector(".primeiroPedido p").innerHTML = prato;
    document.querySelector(".primeiroPedido p:last-child").innerHTML=`R$ ${precoPrato}`.replace(".",",");
    document.querySelector(".segundoPedido p").innerHTML = bebida;
    document.querySelector(".segundoPedido p:last-child").innerHTML=`R$ ${precoBebida}`.replace(".",",");
    document.querySelector(".terceiroPedido p").innerHTML = sobremesa;
    document.querySelector(".terceiroPedido p:last-child").innerHTML=`R$ ${precoSobremesa}`.replace(".",",");
    document.querySelector(".total p:last-child").innerHTML= `R$ ${total}`.replace(".",",");

    document.querySelector(".transparente").classList.remove("finalizar");
}
function voltar(){
    document.querySelector(".transparente").classList.add("finalizar");    
}