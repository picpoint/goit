//Домашнее задание. JS. Урок 7.


/*
+++Задание 1
Напишите функцию которая принимает аргумент и возвращает этот аргумент.
identity(3); // 3
*/
/*
Решение
function identity(arg) {
	return arg;
}

console.log(identity(5));
console.log(identity(155885));
console.log(identity('best of the best'));
*/





/*
+++Задание 2
Напишите две бинарные функции add и mul которые складывают и умножают свои 2 аргумента.
add(3,4); //7
mul(3,4); //12
*/
/*
Решение
function add(param1, param2) {
	return param1 + param2;
}

console.log(add(3, 4));
console.log(add(745, 3));


function mul(param1, param2) {
	return param1 * param2;
}

console.log(mul(3, 4));
console.log(mul(745, 3));
*/






/*
+++Задание 3
Напишите функцию которая принимает аргумент и возвращает функцию которая возвращает этот аргумент.
var idf = identityf(3);
console.log(idf()); // 3
*/
/*
Решение
function identityf(param) {

	function ret() {
		return param;
	}

	return ret();
}

var idf = identityf(110);
console.log(idf);
*/





/*
+++Задание 4
Напишите функцию, которая складывает числа из 2х вызовов
addf(3)(4); //7
*/
/*
Решение
function addf(param1) {

	function secondParam(param2) {
		return param1 + param2;
	}

	return secondParam;
}

console.log(addf(3)(4));
console.log(addf(41)(70));
*/




/*
Задание 5
Напишите функцию которая принимает бинарную функцию и вызывает её имя c аргументами.
var addf2 = applyf(add);
console.log(addf2(3)(4)); //7
console.log(applyf(mul)(3)(4)); //12
*/

function add(param1) {

	function foo(param2) {
		return param1 + param2;
	}

	return foo;
}
console.log(add(3)(4));



function mult(func) {
	return func;
}
console.log(mult(add)(3)(5));






/*
Codewars
http://www.codewars.com/kata/closures-and-scopes
http://www.codewars.com/kata/can-you-keep-a-secret
http://www.codewars.com/kata/lazily-executing-a-function

*/