// Homework - Research and use all array functions - Proyecto para GIT - JEFC 2/08

// Antes de iniciar, se crea el Array para las pruebas de las funciones

const myArray = [1, 2, 3, 4, 5];

// 1: Length: Permite retornar la cantidad de elementos de un arreglo.

console.log(myArray.length); 

// 2: At: Recibe un valor numérico entero y devuelve el elemento en esa posición.

let index = 2;

console.log(myArray.at(index));

let indexA = 4;

console.log(myArray.at(indexA));

// 3: Concat: se usa para unir dos o más arrays.

const myArrayB = [6, 7, 8];
const myArrayC = myArray.concat(myArrayB);

console.log(myArrayC);

// 4: Constructor: Se utiliza para crear objetos Array.

// Los arrays pueden ser creados usando un constructor con un solo parámetro numérico - Primera Forma.

const jugadores = new Array(2);
console.log(jugadores.length);
console.log(jugadores[0]);

// Si se pasa más de un argumento al constructor, se crea un nuevo Array con los elementos dados, esto se define como multiples parametros.

const jugadoresB = new Array('Cristiano Ronaldo', 'Lionel Messi');
console.log(jugadoresB.length);
console.log(jugadoresB[0]);

// 5: copyWithin: Transfiere una copia plana de una sección a otra dentro del mismo array, sin modificar su propiedad length y lo devuelve.

const numerosA = [1, 2, 3, 4, 5, 6];
numerosA.copyWithin(0, 2, 4);
console.log(numerosA);

// 6: entries:  Se utiliza en arrays para obtener un iterador que produce pares de índice-elemento para cada elemento del array.

const frutas = ['Pera', 'Papaya', 'Guayaba'];
const iterador = frutas.entries();
for (const entrada of iterador) {
  console.log(entrada);
}

// 7: every: Determina si todos los elementos en el array cumplen una condición dada.

const dorsales = [25, 32, 28, 12, 22];

const DorsalesFutbol = dorsales.every(dorsal => dorsal >= 10);

if (DorsalesFutbol) {
  console.log("Todas las camisas de Futbol tienen el numero del Dorsal arriba o igual a 10");
} else {
  console.log("Todas las camisas de Futbol tienen el numero del Dorsal por debajo del numero 10");
}

// 8: fill:  Se utiliza en arrays para reemplazar los elementos existentes por un valor específico dentro de un rango determinado.

const calificaciones = [1, 2, 3, 4, 5];

// Rellenar los elementos desde la posición 3 hasta la posición 5 con el valor 3
calificaciones.fill(3, 3, 5);

console.log(calificaciones);

// 9: filter: Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const palabras = ['Messi', 'Cristiano', 'Neymar', 'Aristizabal', 'Falque', 'Riquelme'];

const nombreJugadores = palabras.filter((palabra) => palabra.length > 6);

console.log(nombreJugadores);

// 10: find: Encuentra el primer elemento que cumpla con una condición especificada.

const Equipos = ['Pasto', 'Aston', 'America', 'Cali', 'Madrid'];

const EquiposFutbol = Equipos.find(Equipo => Equipo.length > 5);

console.log(EquiposFutbol);

// 11: findIndex: Da el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve undefined.

const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 6;

console.log(array1.findIndex(isLargeNumber));

// 12: findLastIndex: Da el indice del ultimo elemento de un array que cumpla con la funcion de prueba proporcionada. En caso contrario devuelve -1.

const Locks = [5, 12, 8, 130, 44];

const UltimoNumero = (element) => element > 129;

console.log(array1.findLastIndex(UltimoNumero));

// 13: Flat: Se utiliza para concatenar o aplanar diferentes sub-arrays hasta una profundidad especifica, dando una nueva matriz con los elementos de la submatriz.

const NumerosNew = [10, 8, 5, 6, 2, [3, 4, [2, 4]]]

const NumerosNewFlat = NumerosNew.flat(2);

console.log(NumerosNewFlat)

// 14: flatMap: Se utiliza igualmente para concatener diferentes sub-arrays dependiendo de una funcion especifica dada, dando una nueva matriz con los elementos que lo cumplan.

const FlatFunction = [1, 2, 3, 4, 5];

const ResultFlat = FlatFunction.flatMap(numero => [ numero * 2]);

console.log(ResultFlat); 

// 15: ForEach: ejecuta la función indicada una vez por cada elemento del array.

const Letras = ['T', 'N', 'T'];

Letras.forEach((letra) => console.log(letra));

// 16: Includes: Determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.

const leyendas = ['Zidane', 'Ramos', 'Pele'];

console.log(leyendas.includes('Ramos'));

console.log(leyendas.includes('amos'));

// 17: indexOf: Encuentra la primera posición en la que aparece un elemento específico segun que indice se desea buscar, caso contrario que no se presente devuelve -1.

const Colombia = ['Bogota', 'Medellin', 'Cali', 'Tunja', 'Cali'];

const indiceCali = Colombia.indexOf('Cali');

console.log(indiceCali);

// 18: Join: Combina los elementos de un Array en una misma cadena, utilizando un separador dado en la funcion join.

const celulares = ['Iphone', 'Xiaomi', 'LG'];

const marcaCelurares = celulares.join(' - ');

console.log(marcaCelurares); 

// 19: Keys: Mayormente este metodo se utiliza en objetos para obtener un iterador que produces las llaves de un objeto.

const jugador = {
  nombre: 'Lionel',
  apellido: 'Messi',
  edad: 25
};

const clavesJugador = Object.keys(jugador);

console.log(clavesJugador);

// 20: LastIndexOf: Encuentra la ultima posición en la que aparece un elemento específico segun que indice se desea buscar, caso contrario que no se presente devuelve -1.

const Mexico = ['Guadalajara', 'Cancun', 'Nuevo Mexico', 'Jalisco', 'Guadalajara'];

const indiceGuadalajara = Mexico.lastIndexOf('Guadalajara');

console.log(indiceGuadalajara);

// 21: Map: Crea un nuevo array transformando cada elemento del array original utilizando una función dada.

datos = [1, 2, 3, 4, 5];

const datosDobles = datos.map(numero => numero * 2);

console.log(datosDobles);

// 22: Pop: Elimina el ultimo objeto de un array, cambiando la longitud del array original y devolviendo el elemento eliminado.

const Champions = ['Real Madrid', 'Milan', 'Barcelona'];

const EquipoEliminado = Champions.pop();

console.log(Champions);
console.log(EquipoEliminado);

// 23: Push: Agrega uno o mas elementos al final de un array, devolviendo el nuevo array con el objeto añadido segun la funcion

const animales = ['Cerdos', 'Cabras', 'Ovejas'];

const count = animales.push('Vacas');

console.log(count);
console.log(animales);

// 24: Reduce: Aplica una funcion a cada uno de los elementos del array, y al final se obtiene un unico valor de acuerdo a la funcion y los elementos del array.

const horas = [1, 2, 3, 4, 5];

const sumaHoras = horas.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(sumaHoras);

// 25: ReduceRight: Es similar al método reduce, pero opera en los elementos del array en orden inverso, comenzando desde el último elemento y avanzando hacia el primero.

const RankingFIFA = ['Real Madrid', 'Milan', 'Barcelona', 'Bayern'];

const RankingInverso = RankingFIFA.reduceRight((acumulador, equipo) => acumulador + ' ' + equipo);

console.log(RankingInverso);

// 26: Reverse: Invierte el orden de los elementos en un array.

const Cantantes = ['Pirlo', 'Blessd', 'Anuel AA', 'J Balvin'];

const CantantesInvertidos = Cantantes.reverse();

console.log(CantantesInvertidos);

// 27: Shift: Elimina el primer objeto de un array, cambiando la longitud del array original y devolviendo el elemento eliminado.

const Utiles = ['Lapiz', 'Borrador', 'Sacapunta'];

const UtilesCambio = Utiles.shift();

console.log(Utiles);
console.log(UtilesCambio);

// 28: Slice: Hace una copia de una parte del array dentro de un nuevo array empezando por un ciclo definido.

const nombres = ["Daniela", "Joan", "Jose", "Isabella", "Laura"];

const masculinos = nombres.slice(1, 3);

console.log(masculinos)

//29: Some: Verifica si algun elemento del array cumple la funcion establecida por el some.

const añotitulosRealMadrid = [1897, 1990, 1994, 1995, 2018];

const tituloMayora96 = añotitulosRealMadrid.some(numero => numero > 1996);

if (tituloMayora96) {
  console.log("Hay al menos un titulo ganado mas alla del año 1996");
} else {
  console.log("No hay titulos ganados mas alla del año 1996");
}

// 30: Sort: Se utiliza en arrays para ordenar los elementos del array. ( Unicode )

const EquiposArgentina = ['Racing', 'River Plate', 'Aldolsvi', 'Junior'];

EquiposArgentina.sort();

console.log(EquiposArgentina);

// 31: Splice: Modifica el contenido del array al agregar, eliminar o reemplazar elementos en una posición específica.

const meses = ['Enero', 'Marzo', 'Abril', 'Junio'];
meses.splice(1, 0, 'Febrero');
console.log(meses);

meses.splice(4, 1, 'Mayo');
console.log(meses);

// 32: toLocateString: Se utiliza en objetos Date (fechas) y números para formatearlos según las convenciones locales del usuario, como el formato de fecha y hora, y la representación de números.

const fecha = new Date();
const numero = 131416123;

const fechaFormateada = fecha.toLocaleString();
const numeroFormateado = numero.toLocaleString();

console.log(fechaFormateada);
console.log(numeroFormateado);

// 33: toString: Puede convertir diferentes tipos de datos en forma de cadena.

const NumyText = [1, 2, 'a', '1a'];

console.log(NumyText.toString());

// 34: Unshift:  Agrega uno o mas objetos al array, cambiando la longitud del array.

const Pnumeros = [8, 7, 6];

console.log(Pnumeros.unshift(10, 9));

console.log(Pnumeros);

// 35: Values: Mayormente es utilizado en objetos para obtener un iterador que produce los valores de las propiedades del objeto

const futbolista = {
  nombre: 'Cristiano',
  edad: 38,
  ocupacion: 'Jugador del Al Nassr'
};

const profesional = Object.values(futbolista);

console.log(profesional);