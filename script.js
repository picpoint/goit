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
/*
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
*/





/*
Codewars

+++http://www.codewars.com/kata/closures-and-scopes
We want to create a function, which returns an array of functions, which return their index in the array.
For better understanding, here an example:
var callbacks = createFunctions(5); // create an array, containing 5 functions
callbacks[0](); // must return 0
callbacks[3](); // must return 3
We already implemented that function, but when we actually run the code, the result doesn't look like what we expected.
Can you spot, what's wrong with it? A test fixture is also available

Мы хотим создать функцию, которая возвращает массив функций, которые возвращают свой индекс в массиве.
Для лучшего понимания здесь приведен пример:
Мы уже реализовали эту функцию, но когда мы действительно запускаем код, результат не выглядит так, как мы ожидали.
Можете ли вы заметить, что с ним не так? Также доступно тестовое крепление
*/
/*
Решение
function createFunctions(n) {
	var callbacks = [];

	for (var i = 0; i < n; i++) {
		callbacks.push(function () {
			return i;
		});
	}

	return callbacks;
}

console.log(createFunctions(5));

P.S. Я после цикла просто вызвал функцию, поставив "()", вот в этом месте
	..	return i;
	..		}());
Как бы без скобок получается массив функций [ [Function], [Function], [Function], [Function], [Function] ]
При вызове со скобками получается массив [0, 1, 2, 3, 4]
*/





/*
http://www.codewars.com/kata/can-you-keep-a-secret
There's no such thing as private properties on a coffeescript object! But, maybe there are?
Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods

Нет частной собственности на объект coffeescript! Но, может быть, есть? Реализуйте функцию createSecretHolder (секрет),
которая принимает любое значение как секретное и возвращает объект с ТОЛЬКО двумя методами

getSecret() which returns the secret
setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/

function createSecretHolder(secret) {
	get: function () {
		return secret;
	}
}

var obj = createSecretHolder(5);
obj.getSecret();


/*
http://www.codewars.com/kata/lazily-executing-a-function
*/