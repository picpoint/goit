/*
Домашнее задание. JS. Урок 9.
*/

/*
+++Задание 1
http://learn.javascript.ru/call-apply#перепишите-суммирование-аргументов
Перепишите суммирование аргументов
Есть функция sum, которая суммирует все элементы массива:

 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

function sumArgs() {
  // ваш код
}

alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
Для решения примените метод reduce к arguments, используя call, apply или одалживание метода.
P.S. Функция sum вам не понадобится, она приведена в качестве примера использования reduce для похожей задачи.
*/
/*
Решение
function sumArgs() {
	arguments.reduce = [].reduce;
	return arguments.reduce(function (a, b) {
		return a + b;
	})
}

console.log(sumArgs(1, 4, 7, 5, 6));
*/





/*
+++Задание 2
http://learn.javascript.ru/call-apply#примените-функцию-к-аргументам
Примените функцию к аргументам
Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию func и произвольное количество аргументов.
Она должна вызвать func(arg1, arg2...), то есть передать в func все аргументы, начиная со второго, и возвратить результат.

Например:

// Применить Math.max к аргументам 2, -2, 3
alert( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
alert( applyAll(Math.min, 2, -2, 3) ); // -2
Область применения applyAll, конечно, шире, можно вызывать её и со своими функциями:

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

alert( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
alert( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
*/
/*
function applyAll(func) {
	arguments.splice = [].splice;
	arguments = arguments.splice(1);
	return func.apply(null, arguments);
}

console.log(applyAll(Math.max, 2, 7, 1, -4, 15, 77, 42));
console.log(applyAll(Math.min, 2, 7, 1, -4, 15, 77, 42));


function sum() {
	return [].reduce.call(arguments, function(a, b) {
		return a + b;
	});
}

function mul() {
	return [].reduce.call(arguments, function(a, b) {
		return a * b;
	});
}

console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(mul, 2, 3, 4));
Данное задание я решал давно, почти решил сам, подсмотрел немного.
Прошло около недели, сел перерешать и решил сам, не подсматривал
*/





/*
Задание 3
http://learn.javascript.ru/decorators#логирующий-декоратор-много-аргументов
Логирующий декоратор (много аргументов)

Создайте декоратор makeLogging(func, log), для функции func возвращающий обёртку, которая при каждом вызове
добавляет её аргументы в массив log.
Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается func с любым набором аргументов.

Работать должно так:

function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
// ваш код
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
	var args = log[i]; // массив из аргументов i-го вызова
	alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
*/






/*
http://learn.javascript.ru/decorators#кеширующий-декоратор
*/






/*
Codewars
http://www.codewars.com/kata/unpacking-arguments
*/