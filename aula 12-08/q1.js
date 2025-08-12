let op=prompt(`Qual operação vc deseja fazer? 
    Seguindo as intruções:
     m=multiplicação;
     d=divisão
     s=subtração
     a=adição`)

let r

var n1=prompt("Qual número vc deseja que seja operado?")
n1=Number(n1)

var n2=prompt("Escreva o outro número para realizar a operação")
n2=Number(n2)

if(op == 'm'){
    r=n1*n2
}else if(op == 'd'){
    r=n1/n2
}else if(op == 's'){
    r=n1-n2
}else if(op == 'a'){
    r=n1+n2
}else{
    console.log("Essa operação não pode ser realizada")
}


console.log("O resultado da operação é: " +r)


