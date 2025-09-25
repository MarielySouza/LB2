`crie um algoritmo que leia 5 preços de produtos, posteriormente, imprima o índice
do produto mais caro e do preço`

const produtos = []

let p1 = Number(prompt("Digite o valor do produto: "))
produtos.push(p1)

let p2 = Number(prompt("Digite o valor do produto: "))
produtos.push(p2)

let p3 = Number(prompt("Digite o valor do produto: "))
produtos.push(p3)

let p4 = Number(prompt("Digite o valor do produto: "))
produtos.push(p4)

let p5 = Number(prompt("Digite o valor do produto: "))
produtos.push(p5)

let preco = 0
let indice = 0;

produtos.forEach((item, index) => {
        if(item>preco) {
            preco = item;
            indice = index;
        }
})

console.log(`O item com maior preço é: ${preco} e o seu index é: ${indice}`)
console.table