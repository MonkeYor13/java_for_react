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

// OBJETOS EN JSON, estan constituido por una propiedad y un valor o english un key y un value, asi como las funciones podemos colocar un objeto dentro de otro objeto, asi mimo podemos agrgar una array, un propiedad booleana y hasta una funcion dentro del objeto.

const user = {
	name: "yorvis",
	lastname: "rodriguez",
	age: 38,
	address: {
		country: "argentina",
		city: "buenos aire",
		street: "main street 123",
	},
	friend: ['cesar','pepito'],
	active: true,
	sendMail: function () {
		return "sending mail...";
	},
};
console.log(user);
// para acceder a las propiedades podemos hacerlo ocn la conotacion de punto (.)
console.log(user.age)
console.log(user.address.city)
console.log(user.friend[1])
console.log(user.sendMail())
