let salario = 1
let salarioT = 0

while( salario > 0){
    salario = prompt("Digite o valor do salário dos membros da família(ao terminar digite 0)")
    salario = Number(salario)

    salarioT = salarioT + salario
}


console.log("O salário total da família é " +salarioT)