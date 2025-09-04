let i = 1
let n = 0
let ab = 0
let ac = 0
let m = 0

while ( i <= 5){

    m = Number(prompt("Qual a matrícula do aluno?"))
    n = Number(prompt("Qual a nota desse aluno?"))

    if(n >= 6){
        console.log("O aluno " +m+ " está acima da média")

        ac++
    }else{
        
        console.log("O aluno " +m+ " está abaixo da média")

        ab++
    }
    i++

}

console.log("Têm " +ac+ " alunos acima da média")
console.log("Têm " +ab+ " alunos abaixo da média")