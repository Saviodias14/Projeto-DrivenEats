function selecionaRefeicao(refeicaoSelecionada){
    const desmarca = document.querySelector(".selecionadoR");
    if(desmarca!==null){
        desmarca.classList.remove("selecionadoR");
    }
    const selecao = document.querySelector(refeicaoSelecionada);
    selecao.classList.add("selecionadoR");
    
    const R = document.querySelector(".selecionadoR");
    const B = document.querySelector(".selecionadoB");
    const S = document.querySelector(".selecionadoS");
    if((R!==null)&&(B!==null)&&(S!==null)){
        const ligar = document.querySelector(".botao");
        ligar.classList.add("fecharPedido");
        document.querySelector("button").innerHTML="Fechar pedido";
        document.querySelector("button").disabled = false;
    }
}

function selecionaBebida(bebidaSelecionada){
    const desmarca = document.querySelector(".selecionadoB");
    
    if(desmarca!==null){
        desmarca.classList.remove("selecionadoB");
        
    }
    const selecao = document.querySelector(bebidaSelecionada);
    selecao.classList.add("selecionadoB");

    const R = document.querySelector(".selecionadoR");
    const B = document.querySelector(".selecionadoB");
    const S = document.querySelector(".selecionadoS");
    if((R!==null)&&(B!==null)&&(S!==null)){
        const ligar = document.querySelector(".botao");
        ligar.classList.add("fecharPedido");
        document.querySelector("button").innerHTML="Fechar pedido";
        document.querySelector("button").disabled = false;
    }
    }

function selecionaSobremesa(sobremesaSelecionada){
    const desmarca = document.querySelector(".selecionadoS");
        
    if(desmarca!==null){
        desmarca.classList.remove("selecionadoS");
    }
    const selecao = document.querySelector(sobremesaSelecionada);
    selecao.classList.add("selecionadoS");

    const R = document.querySelector(".selecionadoR");
    const B = document.querySelector(".selecionadoB");
    const S = document.querySelector(".selecionadoS");
    if((R!==null)&&(B!==null)&&(S!==null)){
        const ligar = document.querySelector(".botao");
        ligar.classList.add("fecharPedido");
        document.querySelector("button").innerHTML="Fechar pedido";
        document.querySelector("button").disabled = false;
    }
}

function mensagem(){
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
    Total: R$ ${total.toFixed(2)}`
    const link = encodeURIComponent(mensagemZap);
    open("https://wa.me/5531991472152?text="+link);
}
 //Olá, gostaria de fazer o pedido:
//- Prato: Frango Yin Yang
//- Bebida: Coquinha Gelada
//- Sobremesa: Pudim
//Total: R$ 27.70