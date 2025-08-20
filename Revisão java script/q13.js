let pessoa={
    nome: "Lucas",
    peso: 60,
    altura: 1.77,
    temperatura: prompt("Qual sua temperatura?"),
}

if(pessoa.temperatura>=37.5)
{
    console.log("Lucas está febril")
}
else{
    console.log("Lucas não está febril")
}