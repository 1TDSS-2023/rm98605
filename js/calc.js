//Desafio 1: 
//Inserir o value dos botões de números e operações no visor
//É Obrigatorio ultilizar funções parametrizadas...
//Pode ser ultilizados eventos inline

//Desafio 3:
//Evite a inserção de mais de um opreador por vez no sensor

function inserirDadoNoVisor(botao, visor){
    if(botao.value === "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){

        if(visor.value[visor.value.lenth-1] === "+" || visor.value[visor.value.lenth-1] === "-" || visor.value[visor.value.lenth-1] === "*" || visor.value[visor.value.lenth-1] === "/"){
            visor.value.slice(visor.value.lenth-1);
        }else{
            visor.value += botao.value;
        }

    }else {
        visor.value += botao.value;
    }
}

//Desafio 2:
//Ulltilizando a função eval(expressão)
//Crie uma nova função no formato arrow function que receba um parametro e passe para  a função eval realizar o calculo e devolva o resultado no visor.

const realizarOperacao = (visor)=>{
    visor.value = eval(visor.value);
}