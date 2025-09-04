let idade = 1
let pessoas = 0
let total = 0

while(idade != 0){
   idade = Number(prompt("Qual a idade dessa pessoa?"))

   total = total + idade
  if(idade != 0){
   pessoas ++
  }
}

let media = Number(total/pessoas)

console.log("A média de idades é " +media)
