function selecionaRefeicao(refeicaoSelecionada){
const desmarca = document.querySelector(".selecionadoR");

if(desmarca!==null){
    desmarca.classList.remove("selecionadoR");
}
const selecao = document.querySelector(refeicaoSelecionada);
selecao.classList.add("selecionadoR");
console.log(refeicao);
}

function selecionaBebida(bebidaSelecionada){
    const desmarca = document.querySelector(".selecionadoB");
    
    if(desmarca!==null){
        desmarca.classList.remove("selecionadoB");
        
    }
    const selecao = document.querySelector(bebidaSelecionada);
    selecao.classList.add("selecionadoB");
    console.log(bebida);
    }

    function selecionaSobremesa(sobremesaSelecionada){
        const desmarca = document.querySelector(".selecionadoS");
        
        if(desmarca!==null){
            desmarca.classList.remove("selecionadoS");
        }
        const selecao = document.querySelector(sobremesaSelecionada);
        selecao.classList.add("selecionadoS");
        console.log(sobremesa);
        }

//const ligar = document.querySelector(".botao");
//ligar.classList.add("fecharPedido");

    