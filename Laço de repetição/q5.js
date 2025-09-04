let n = 1
let p = 0
let f = 0
let nf = 0

while(n != 0){

    n = Number(prompt("Qual a temperatura dessa pessoa?"))

    if(n >= 38){
        f++
    }else{
        (nf++) - 1
    }
}
console.log("A quantidade de pessoas com febre são: " +f)

console.log("A quantidade de pessoas sem febre são: " +nf)
