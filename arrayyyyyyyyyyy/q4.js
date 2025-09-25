`um aluno deve preencher as notas trimestrais referentes a cada uma de suas 8 materias, cada matéria deve ter
nome, nota e frequencia. Preencha os dados e posteriormente:

    a)imprima a média de frequencia de todas as diciplinas
    b)imprima a quantidade de notas acima da media (60%)
`
let acimamedia = 0
const materias = []
const notas = []
const frequencia= []

for(i = 0; i < 8; i++){

    materias[i] = prompt("Qual o nome da matéria?")

    notas[i] = prompt("Qual sua nota na matéria " +materias[i])
    

    frequencia[i] = Number(prompt("Qual sua frequencia na materia " +materias[i]))

    if(notas[i] >= 21){
        acimamedia++
    }

}

let frequenciaf = 0

for(f = 0; f < 8; f++){

    frequenciaf += frequencia[f]

}

let mediafreq = 0

mediafreq = frequenciaf/8



console.log(materias)
console.log(notas)
console.log(frequencia)
console.log("A quantidade de notas acima da média é: " +acimamedia);
console.log("A média de frequência é: " +mediafreq);


