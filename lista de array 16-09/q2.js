`leia o tipo sanguíneo de 10 pessoas, ao final, imprima o índice do cadastro 
e o tipo de cada sangue cadastrado`



const sangue = []

for(i = 0; i < 10; i++){
    sangue[i] = prompt("Qual su tipo sanguíneo?")
}

sangue.forEach((item, index) => {
    console.log(`o indice: ${index} o tipo de sangue cadastrado é ${item}`)
})