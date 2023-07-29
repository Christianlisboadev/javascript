var numeros = Array (1, 2, 3, 4, 5)
var pares = Array()

for ( var i in numeros){
    numeros[i] % 2 === 0 ? pares.unshift(numeros[i]) : null;
}

console.log(numeros)
console.log(pares)