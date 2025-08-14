alert(`avalie os filmes a seguir com notas de um até 5seguindo os seguintes tópicos`)

alert("Sobre o filme frozen avalie")

let gráfico = prompt("Gráfico")
let audio= prompt("Audio")
let enredo = prompt("Enredo")

gráfico = Number(gráfico)
audio = Number(audio)
enredo = Number(enredo)

alert("Sobre o filme A princesa e o sapo avalie")

let gráfico2 = prompt("Gráfico")
let audio2= prompt("Audio")
let enredo2 = prompt("Enredo")

gráfico2 = Number(gráfico2)
audio2 = Number(audio2)
enredo2 = Number(enredo2)

let media

media = Number(media)

media = (gráfico + audio + enredo)/3

let media2

media2 = Number(media2)

media2 = (gráfico2 + audio2 + enredo2)/3

if(media>media2)
{
    console.log("O filme frozen tem as maiores notas")
}
else if(media<media2)
{
    console.log("O filme A princesa e o sapo tem as maiores notas")
}
else{
    console.log("Os filmes tem a mesms nota")
}
