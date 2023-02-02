

// Este ejemplo crea un array de frutas y luego usa cada función de array para manipular el mismo. 

let frutas = ["manzana", "plátano", "cereza", "pera"]

// Agregar elementos al final del array con push()
frutas.push("uva")
console.log(frutas)
 ["manzana", "plátano", "cereza", "pera", "uva"]

// Agregar elementos al principio del array con unshift()
frutas.unshift("fresa")
console.log(frutas) 
 ["fresa", "manzana", "plátano","cereza","pera","uva"] 

// Eliminar el último elemento del array con pop() 
let ultimaFruta = frutas.pop()
console.log(ultimaFruta) // uva 
console.log(frutas)
 ["fresa","manzana","plátano","cereza","pera"]  

 // Eliminar el primer elemento del array con shift()  
let primeraFruta = frutas.shift()
console.log(primeraFruta)
 fresa 
console.log(frutas)
["manzana","plátano","cereza","pera"]  

 // Reemplazar un elemento en un índice específico con splice()  
frutas.splice(2, 1, 'sandía')
   console.log(frutas) 
 ["manzana", "plátano", sandía, pera]  

// Crear un "clon" del array frutas, se le agrega "mango" a este clon y se junta al array original
// el cual se guarda en un nuevo array llamado frutasT
 let frutas2 = [...frutas,frutas2.push(Mango)]
 let frutasT = frutas.concat(frutas2)
 console.log(frutasT)
 ["manzana", "plátano", sandía, pera,"manzana", "plátano", sandía, pera, Mango ]
// Reordenar el array con reverse()
frutas.reverse()
console.log(frutas)
["pera", "sandía", "plátano", "manzana"]

// Ordenar el array con sort()
frutas.sort()
console.log(frutas)
["manzana", "pera", "plátano", "sandía"]

// Obtener una subsección del array con slice()
let frutasSub = frutas.slice(1, 3)
console.log(frutasSub)
["pera", "plátano"]

// Encontrar la posición de un elemento en el array con indexOf()
let posicion = frutas.indexOf("plátano")
console.log(posicion) // 2

// Encontrar si un elemento existe en el array con includes()
let existe = frutas.includes("mango")
console.log(existe) // false

// Iterar sobre un array con forEach()
frutas.forEach(function(fruta) {
console.log(fruta)
})

// Mapear un array a un nuevo array con map()
let frutasMayus = frutas.map(function(fruta) {
return fruta.toUpperCase()
})
console.log(frutasMayus)
["MANZANA", "PERA", "PLÁTANO", "SANDÍA"]

// Filtrar un array con filter()
let frutasVerdes = frutas.filter(function(fruta) {
return fruta === "manzana" || fruta === "pera"
})
console.log(frutasVerdes)
["manzana", "pera"]

// Encontrar un elemento en el array con find()
let frutaTropical = frutas.find(function(fruta) {
return fruta === "sandía"
})
console.log(frutaTropical) // sandía

// Reducir un array a un único valor con reduce()
let totalLetras = frutas.reduce(function(acumulador, fruta) {
return acumulador + fruta.length
}, 0)
console.log(totalLetras) // 17
 




 