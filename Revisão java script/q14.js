let livro1={
    nome: prompt("Qual o nome do livro?"),
    autoria: prompt("Quando o livro foi escrito?"),
    páginas: prompt("Quantas páginas tem o livro?"),
    autor: prompt("Qual a nacionalidade do autor?")
}

let livro2={
    nome: prompt("Qual o nome do segundo livro?"),
    autoria: prompt("Quando o livro foi escrito?"),
    páginas: prompt("Quantas páginas tem o livro?"),
    autor: prompt("Qual a nacionalidade do autor?")
}

if(livro1.autoria < livro2.autoria){
    console.log("O livro " +livro1.nome+ " Tem maior autoria")
}
else{
    console.log("O livro " +livro2.nome+ " Tem maior autoria")
}

if(livro1.páginas > livro2.páginas){
    console.log("O livro " +livro1.nome+ " tem mais páginas")
}
else{
    console.log("O livro " +livro2.nome+ " tem mais páginas")
}



if(livro1.autor == "brasileiro"){
 
    console.log("O livro " +livro1.nome+ " tem autor braileiro")
}
else{
    console.log("O livro" +livro1.nome+ "não tem autor brasileiro")
}
    
if(livro2.autor == "brasileiro"){

    console.log("O livro " +livro2.nome+ " tem autor brasileiro")

}else {
    console.log("O livro " +livro2.nome+ " não tem autor brasileiro")
}
    

