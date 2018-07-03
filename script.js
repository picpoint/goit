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
+++Задание 5
Напишите функцию которая принимает бинарную функцию и вызывает её имя c аргументами.
var addf2 = applyf(add);
console.log(addf2(3)(4)); //7
console.log(applyf(mul)(3)(4)); //12
*/
/*
Решение
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
P.S. Вот моё решение, что я выжал из себя. Подсмотрев в правильное решение, понял что как бы
только правильно сделал на половину.

Правильное решение
function applyf(binary) {
	return function(x) {
		return function(y) {
			return binary(x)(y);
		}
	}
}
*/





/*
Codewars
+++Задание 6
http://www.codewars.com/kata/closures-and-scopes
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
+++Задание 7
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
/*
Решение.
Здесь я реализовал объект с геттером и сеттером, можно задать значение и значение будет получено.
Всё здеь как я понимаю работает нормально

var obj = {
	secret: 5,

	getSecret: function () {
		return this.secret;
	},

	setSecret: function (secret) {
		this.secret = secret;
	}
};

console.log(obj.getSecret());

obj.setSecret(10);
console.log(obj.getSecret());
*/
/*
Здесь же я пробую этот объект запихать в функцию, но я понимаю что работает он не правильно,
почему неправильно, не пойму.

function createSecretHolder(secret) {

	var obj = {
		secret: secret,

		getSecret: function () {
			return this.secret;
		},

		setSecret: function (secret) {
			this.secret = secret;
		}
	};

	return obj;
}

console.log(createSecretHolder(777));
console.log(createSecretHolder('new value'));
*/





/*
+++Задание 8
http://www.codewars.com/kata/lazily-executing-a-function
Deferring a function execution can sometimes save a lot of execution time in our programs by postponing the execution
to the latest possible instant of time, when we're sure that the time spent while executing it is worth it.

Write a method make_lazy that takes in a function (symbol for Ruby) and the arguments to the function and returns
another function (lambda for Ruby) which when invoked, returns the result of the original function invoked
with the supplied arguments.

For example:

Given a function add

function add (a, b) {
  return a + b;
}
One could make it lazy as:

var lazy_value = make_lazy(add, 2, 3);
The expression does not get evaluated at the moment, but only when you invoke lazy_value as:

lazy_value() => 5
The above invokation then performs the sum.

Please note: The functions that are passed to make_lazy may take one or more arguments and the number of arguments is not fixed.


Отсрочка выполнения функции иногда может сэкономить много времени выполнения в наших программах, отложив выполнение
до самого последнего возможного момента времени, когда мы уверены, что время, затраченное на его выполнение, того стоит.
Напишите метод make_lazy, который принимает функцию (символ для Ruby) и аргументы функции и возвращает другую функцию
(лямбда для Ruby), которая при вызове возвращает результат исходной функции, вызванной с помощью аргументов.
Например: С учетом функции add

function add (a, b) {
  return a + b;
}

Можно было бы лениться:

var lazy_value = make_lazy(add, 2, 3);
Выражение не оценивается в данный момент, но только тогда, когда вы вызываете lazy_value как:
lazy_value() => 5

Вышеуказанная операция затем выполняет сумму. Обратите внимание: функции, которые передаются make_lazy, могут
принимать один или несколько аргументов, а количество аргументов не фиксировано.
*/
/*
Решение
function add() {
	var result = 0;

	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i];
	}
	return result;
}

function make_lazy(add) {
	return add;
}

var lazy_value = add.bind(add, 5, 15);

console.log(lazy_value());

P.S. Вот как бы решение данного задания опять не знаю, правильно/неправильно
*/