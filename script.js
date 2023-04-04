//switch 
//let opção =4
/*
let opcao=parseInt(prompt("Digite uma opção"))

switch(opcao){
    case 1:
        document.write("Primeira opção")
        break;
    case 2:
        document.write("Segunda opação")
        break;
    case 3:
        document.write("Terceira opção")
        break;
    default:
        document.write("Nenhuma das opções validas")
        break;                
}
*/

//INCREMENTO E DECREMENTO
let valor=5
console.log(valor)//O valor vai ser igual a 5
valor+=5
console.log(valor)//O valor vai ser igual a 10
valor++
console.log(valor)//O valor vai ser igual a 11
valor*=10
console.log(valor)//O valor vai ser igual a 110

let valor1=7
console.log(valor1)
valor1-=3
console.log(valor1)
valor1--
console.log(valor1)
valor1--
console.log(valor1)

/*
//Usando FOR
for(let i=0;i<10; i++){
    document.write("O valor é ",i)
    document.write("<br><br>")
}
*/



//Usando for com array
let carros=["GOL","BMW","MERCEDES","AUDI","MCLAREN"]
for(let i=0; i<carros.length;i++){
    document.write(carros)
    document.write("<br><br>")
}
