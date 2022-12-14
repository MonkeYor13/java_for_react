// // las funciones no solo ejecutan codigo y si no tambien que retornan

// // ejecuatar codigo
// function hello() {
// 	console.log("first");
// 	console.log("second");
// }
// hello();

// // retonar una valor, se puede (1)guardar en una variable y luego mostrarla ó (2) colocarla dentro de un console

// // (1)
// function hello2() {
// 	return "hola mundo";
// }
// const result = hello2();
// console.log(result);

// // (2)
// function hello3() {
// 	// return 'hola mundo' retorna una String
// 	// return 20.3 retorna un entero
// 	// return {} retorna un objeto
// 	// return [1,2,3] retorna un arreglo
// 	return function () {
// 		return "hola estyo retornando una function dentro de otra funtion";
// 	};
// }
// console.log(hello3()());

// // funciones pasando parametros
// function hello4(name) {
// 	return "hello " + name;
// }
// console.log(hello4("yorvis"));
// console.log(hello4("cesar"));
// console.log(hello4("Jesus"));

// function hello5(x, y) {
// 	return x + y;
// }
// console.log(hello5(10, 20));
// console.log(hello5(5, 10));
// console.log(hello5(10, 50));

// // sel esp ude asginar valos por defecto a los parametros, ya que si no le pasamos los 2 parametros o se nos olvida uno nos dara NaN o undefained eso se puede arrerglar dandole valores predefinidos a X, Y o ambos como por ejemplo un cero (0)
// function hello6(x, y = 0) {
// 	return x + y;
// }
// console.log(hello6(10, ));

// // OBJETOS EN JSON, estan constituido por una propiedad y un valor o english un key y un value, asi como las funciones podemos colocar un objeto dentro de otro objeto, asi mimo podemos agrgar una array, un propiedad booleana y hasta una funcion dentro del objeto.

// const user = {
// 	name: "yorvis",
// 	lastname: "rodriguez",
// 	age: 38,
// 	address: {
// 		country: "argentina",
// 		city: "buenos aire",
// 		street: "main street 123",
// 	},
// 	friend: ['cesar','pepito'],
// 	active: true,
// 	sendMail: function () {
// 		return "sending mail...";
// 	},
// };
// console.log(user);
// // para acceder a las propiedades podemos hacerlo ocn la conotacion de punto (.), recuerda que todo lo que no sea una funcion dentro de una objeto son propiedades y las funciones son metodos.
// console.log(user.age)
// console.log(user.address.city)
// console.log(user.friend[1])
// console.log(user.sendMail())

// // objetos con variables, podemos colocar variables, const dentro de una objeto y llamarlos desde le objeto

// const name = 'laptop'
// const price = 3000

// const newProduct = {
// 	name,
// 	price
// }
// console.log(newProduct)

// MONIPULACION DEL DOM, maniupular el documento. document hace referencia al a la pantalla que vemos ne le navegador y con esto podemos acceder a todas la etiquetas o elementos y manipularlos.

// (1)createElement, con esto podemos crear una elemento dentro de HTML y podemos crear con Ctrl+Space a todas la etiquetas disponibles.
// (2) con append, le decimos que añada en el body un titulo (title que creamos anteriormente en la const title que seria una h1) solo no vermemos nada en la pantalla del navegador porque el h1 esta vacio no tiene texto. tambien podemos agregar una boton.
// (3) innerText, agregamos un texto al elemento correctamente con JS.
// (4) addEventListener, esto quiere decir que le podemos agregar eventos o acciones, podemos ver los eventos con Crtl+space

// // (1)
// const title = document.createElement("h1");
// const button = document.createElement("button");
// // (3)
// title.innerText = 'Hola soy un texto agregado desde JS'
// button.innerText = 'clic'

// // (4) se lee asi al boton le agregue una escucha con el evento clic, donde ejecuatara una funcion.
// button.addEventListener("click", function name(params) {
// 	// console.log('acabo de hacer clic en el boton')
// 	title.innerText = 'texto fue modificado con JS'
// 	alert('se hizo un click sobre le boton ahora')
// })

// // (2)
// document.body.append(title)
// document.body.append(button)

// DESTRUCTURANDO un Objetos, podemos obtener todos los valores de una objeto, tambien podemos obtener valores especificos de un objeto  y es alli odnde destroturamos el objeto.

// const user = {
// 	name: "yorvis",
// 	age: 38,
// };
// const user2 = {
// 	name: "yorvis2",
// 	age: 60,
// 	tall: 168,
// };

// // podemos retornar una etiqueta y obtener todos los valores del objeto llamando al objeto 'user'
// function printInfo(user) {
// 	// return "<h1>Hola " + user.name + "</h1>";
// 	// podemos acceder tambien usando corchetes
// 	return "<h1>Hola " + user["age"] + "</h1>";
// }
// console.log(printInfo(user));
// document.body.innerHTML = printInfo(user);
// // document.body.innerHTML = "<h1>Hola soy una etiqueta directa</h1>";

// // aplicamos la destructuracion y le pasomos entre {} los valores que quedmos extraer del objeto y luego los retonarmos.
// function printInfo2({age, name}) {
// 	return "<h1>Hola " + age +" "+ name + "</h1>";
// }
// console.log(printInfo2(user2));
// document.body.innerHTML = printInfo2(user2);

// // FUNCIONES ANONIMAS, se suele usar muchos en los llamados en los eventos litseninig para los botones.

// // funcion normal llamada start
// function start() {
// 	return "Starting..";
// }
// console.log(start());

// // una funcion anonima sin nombre
// console.log(
// 	(function () {
// 		return "Starting..";
// 	})()
// );

// const button = document.createElement("button");
// button.innerText = "click me";

// button.addEventListener("click", function () {
// 	console.log("clicked");
// 	alert("clicked");
// });

// document.body.append(button);

// // ARRAW FUNCTION O FUNCIONES FLECHAS () =>
// function add(x, y) {
// 	return x + y;
// }
// console.log(add(1, 2));

// let add2 = (x, y) => x + y;
// console.log(add2(3, 5));

// let showText = () => "Hola yorvis";
// let showNumber = () => 39;
// let showBoolean = () => true;
// let showArray = () => [1, 2, 3, 4, 5];
// //*cuando se quiere llamar a una objeto va dentro de ()
// let showObjet = () => ({ name: "yorvis" });

// console.log(showText());
// console.log(showNumber());
// console.log(showBoolean());
// console.log(showArray());
// console.log(showObjet());

// // RETONAR EN FUNCIONES Y CONDICIONAL

// const isAutorized = true;
// let buttonReturn = document.createElement("button");
// buttonReturn.innerText = "return";

// buttonReturn.addEventListener("click", () => {
// 	if (isAutorized) {
// 		return alert("esta autorizado");
// 	}
// 	alert("no esta autorizado");
// });
// document.body.append(buttonReturn);

// // AÑADIR ESTILOS DESDE JAVASCRIPT y concatenandolos los que en java seria interpolar valores
// // *cuanod vamos a interpolar estilos se pueden hacer de diferente formas (1) directamente y (2) usando constantes y comillas `` intercaladas

// const backgroung = 'yellow'
// const color = 'red'
// const isAutorized = true;

// let button1 = document.createElement("button");
// button1.innerText = "Boton1";
// button1.style = "background: red ; color: white"

// let button2 = document.createElement('botton');
// button2.innerText= "Boton2";
// // *se lee si bg es true pintalo de yellow, (? = si no) pintalo de azul
// button2.style = `background: ${isAutorized ? backgroung: 'blue'}; color: ${color}`

// document.body.append(button1);
// document.body.append(button2);

// ARRAY ARREGLOS en react no se utiliza mucha los bucle for si no utilizamos metodos

// const names = ['ryan', 'maria', 'peter']
// const newArrys = ['Luis', 'juana', 'mario']

// // bucle for, no se usa mucho en react
// for (let i = 0; i < names.length; i++) {
// 	const element = names[i];
// 	console.log(element)
// }
// // hacerlos con metodo menos lineas de codigo
// names.forEach(function (name) {
// 	console.log(name)
// })
// // en react se utiliza varios metodos ocn lso array (map, find, concat)
// const newNames= names.map(function (name) {
// 	return `Hola ${name}`
// })
// console.log(newNames)

// const newFound= names.find(function (name) {
// 	if (name=== 'maria') {
// 		return name
// 	}
// })
// console.log(newFound)
// // juntar 2 arreglos en uno con la funcion concat
// console.log(names.concat(newArrys))

// // SPRED OPERATOR concatenar de una manera mas practica, sep uede hacer con arrys y objetos

// const names = ["ryan", "maria", "peter"];
// const newArrys = ["Luis", "juana", "mario"];

// console.log([...names, ...newArrys]);
// console.log(...names, ...newArrys);

// ECMASCRIPT MODULES esto sifinifica dividir una aplicacion en multiples archivos como en Flutter, es importar y incluir archivos en otros por ejemplo creamos una archivo add.js y lo exportamos y luego agregamos app.js importandolo.

import { add, active, point, title, multiply } from "./add.js";

console.log(add(2, 5));
console.log(multiply(2, 5));
console.log(active, point, title);

// si queremos importa lago por defecto del archivo creado 
import nombreCualquiera from  "./add.js"

console.log(nombreCualquiera);
