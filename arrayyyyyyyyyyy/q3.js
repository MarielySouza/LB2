`faça a leitura de uma fita de RNA de 10 elementos, depois faça o complemento de leitura
dessa fita e imprima os elementos na sequencia correta`


const RNA = []
for(i = 0; i < 10; i++){
    RNA[i] = prompt("Escreva o elemento da fita")


    switch (RNA[i]){

      case "a":
        console.log("complemento de a = u")
        break;
    
      case "u":
        console.log("complemento de u = a")
        break;
      
    
      case "g":
        console.log("complemento de g = c")
        break;
    
      case "c":
        console.log("complemento de c = g")
        break;
    
    
    }
}

