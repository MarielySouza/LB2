let filme={
    nome: prompt("Qual o nome do filme"),
    idade: Number(prompt("Qual sua idade?"))
}



if(filme.idade < 10){
    console.log("Livre")
}
else if(filme.idade >= 10 && filme.idade < 12){
    console.log("10")
}
else if(filme.idade >= 12 && filme.idade < 14){
    console.log("12")
}
else if(filme.idade >= 14 && filme.idade < 16){
    console.log("14")
}
else if(filme.idade >= 16 && filme.idade < 18){
    console.log("16")
}
else if(filme.idade >= 18){
    console.log("18")
}