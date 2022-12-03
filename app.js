// las funciones no solo ejecutan codigo y si no tambien que retornan

// ejecuatar codigo
function hello() {
	console.log("first");
	console.log("second");
}
hello();

// retonar una valor, se puede (1)guardar en una variable y luego mostrarla ó (2) colocarla dentro de un console

// (1)
function hello2() {
	return "hola mundo";
}
const result = hello2();
console.log(result);

// (2)
function hello3() {
	// return 'hola mundo' retorna una String
	// return 20.3 retorna un entero
	// return {} retorna un objeto
	// return [1,2,3] retorna un arreglo
	return function () {
		return "hola estyo retornando una function dentro de otra funtion";
	};
}
console.log(hello3()());

// funciones pasando parametros
function hello4(name) {
	return "hello " + name;
}
console.log(hello4("yorvis"));
console.log(hello4("cesar"));
console.log(hello4("Jesus"));

function hello5(x, y) {
	return x + y;
}
console.log(hello5(10, 20));
console.log(hello5(5, 10));
console.log(hello5(10, 50));
