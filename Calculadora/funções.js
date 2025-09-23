function soma(n1, n2){
    return n1+n2
}

function subtracao(n1, n2){
    return n1-n2
}

function multiplicacao(n1, n2){
    return n1*n2
}

function divisao(n1, n2){

    if(n2 != 0){
        return n1/n2
    }else {
        alert("ERRO, divião por zero")
    }

    return 
    
}

function operacao(num1, num2, op){
    let res

    switch(op){
        case'1': res = soma(num1, num2)
        break;
        case'2': res = subtracao(num1, num2)
        break;
        case'3': res = multiplicacao(num1, num2)
        break;
        case'4': res = divisao(num1, num2)
        break;
    }


}

function menu() {
    let escolha = 0

    do{
        escolha = prompt(`Calculadora
            1- Soma
            2- Subtração
            3-Multiplicação
            4-Divisão
            0- Sair`)

        if(escolha >= 1 && escolha < 5){
            let n1 = parseFloat(prompt("Digite o primeiro número"))
            let n2 = parseFloat(prompt("Digite o segundo número"))
            let resultado = operacao(n1, n2, escolha)
            
                if(resultado)
                    alert("O resultado foi " +resultado)
        }
        

    }while(escolha != 0)
}

menu ()