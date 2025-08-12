
let n1 = prompt("Digite a nota 1:")
let p1 = prompt("Digite o peso da nota 1:")

let n2 = prompt("Digite a nota 2:")
let p2 = prompt("Digite o peso da nota 2:")

let n3 = prompt("Digite a nota 2:")
let p3 = prompt("Digite o peso da nota 3:")

n1=Number(n1)
n2=Number(n2)
n3=Number(n3)
p1=Number(p1)
p2=Number(p2)
p3=Number(p3)

console.log("A média ponderada das notas é: " + (((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3)))