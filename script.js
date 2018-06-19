/*
Домашнее задание. JS. Урок 6.
+++Задание 1 (Удаление css клссов)
У объекта есть свойство className, которое хранит список css класов – слов,
разделенных пробелами:
var obj = {
	className: 'open menu'
};
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать
дублирование класса в строке:
obj = {
	className: 'my menu menu'
};
removeClass(obj, 'menu');
console.log( obj.className ); // 'my'
Лишних пробелов после функции образовываться не должно.
*/
/*
Решение:
var obj = {
	className: 'open menu go'
};

function removeClass(obj, cls) {
	var mass = [];
	for (var key in obj) {
		var arr = obj[key].split(' ');
	}


	for (var i = 0; i < arr.length; i++) {
		if (arr[i] !== cls) {
			 mass.push(arr[i]);
		}
	}

	var str = mass.join(' ');
	obj.className = str;
	return obj;

}

//console.log(removeClass(obj, 'open'));
//console.log(removeClass(obj, 'do'));
//console.log(removeClass(obj, 'menu'));
P.S. Если раскомментировать все три вызова одновременно то получится что скрипт запоминает предыдущее значение обьекта
А если расскоментировать по одному то результат вызова функции и её работа получаются нормальными
*/




/*
+++Задание 2 (Сортировка массива строк)
Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.
Исходный массив не должен меняться.
var arr = ['HTML', 'JavaScript', 'CSS'];
// ... ваш код ...
console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
*/
/*
Решение
var arr = ['HTML', 'JavaScript', 'CSS'];
var arrSort = arr;
console.log(arr);
console.log(arrSort.sort(1));
*/




/*
+++Задание 3 (Random sort)
Необходимо отсортировать массив в случайном порядке используя метод sort.
var arr = [1, 2, 3, 4, 5];
arr.sort(ваша функция);
console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
*/
/*
Решение 1
var arr = [1, 2, 3, 4, 5, 6, 7];

function sortMass() {
	var min = arr[0];
	var max = arr.length;
	arr = Math.floor(Math.random() * (max - min) + min);
	return arr;
}

console.log(arr.sort(sortMass));
*/
/*
Решение 2
var arr = [1, 2, 3, 4, 5];
var mass = [];

function funcSort(arr) {
	var min = arr[0];
	var max = arr[4];

	for (var i = 0; i < arr.length; i++) {
		var result = Math.floor(Math.random() * (max - min)) + min;
		mass.push(result);
	}
	return mass;
}

console.log(funcSort(arr));
P.S. Выдавил из себя 2 решения.
Формулу генерации произвольного числа я подсмотрел Math.floor(Math.random() * (max - min)) + min;
По решению 1 - да, массив сортируется в произвольном порядке(я так думаю) но он генерится только раз
и каждый раз выдаёт один и тот же результат
По решению 2 - я сделал массив, который генерируется произвольным значиние от 0 до arr.lenght
но он кадый раз заполняет i-тое значение произвольным номером и получается что в массиве могут встречаться
2 или 3 или 4 раза одна и та же цифра
Может быть и первое и второе решение являются не верными
*/




/*
+++Задание 4 (Object sort)
Напишите код, который отсортирует массив объектов people по полю age.
Например:
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };
var people = [ vasya , masha , vovochka ];
... ваш код ...
// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6
Выведите список имён в массиве после сортировки.
*/
/*
Решение
var vasya = { name: 'Вася', age: 23};
var masha = { name: 'Маша', age: 18};
var vovochka = { name: 'Вовочка', age: 6};
var semen = {name: 'Семён', age: 55};
var petro = {name: 'Пётр', age: 20};

var people = [vasya, masha, vovochka, semen, petro];


function objSort(people) {

	people.sort(function (a, b) {
		if (a.age > b.age) {
			return 1;
		}
		if (a.age < b.age) {
			return -1;
		}
		return 0;
	});

	return people;

}

console.log(objSort(people));
//P.S. Вот сделал вроде бы сортировку по заданию, но не могу добиться чтоб он выводил именно массив с названиями
типа var people = [vasya, masha, vovochka, semen, petro];
Выводит отсортированный массив объектов с содержимым объектов
*/




/*
+++Задание 5 (Проверка на палиндром)
Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
Необходимо написать функцию isPal(string) которая возвращает true или false
в зависимости от того является ли строка палиндромом или нет.
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
*/
/*
Решение
function isPal(str) {
	var str = str.toLowerCase();
	str = str.replace(/\s+/g, '');
	var result = str.split('').reverse().join('');
	if (str == result) {
		return str + ' - Является полиндромом';
	}
	return str + ' - не является полиндромом';
}

console.log(isPal('Anna'));
console.log(isPal('А роза упала на лапу Азора'));
console.log(isPal('Вася'));
console.log(isPal('12321'));
console.log(isPal('123212'));
*/




/*
+++Задание 6 (Уникальные элементы массива)
Напишите функцию unique(arr), которая возвращает массив, содержащий только
уникальные элементы arr (arr — массив строк).
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
console.log( unique(strings) ); // кришна, харе, 8-()
*/
/*
//Решение, но это высер галимый )))) Прям жёсткий говнокод ))))
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

function unique(arr) {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != arr[i+1]) {
			result.push(arr[i+1]);
		}
	}
	result.pop();
	return result;
}

console.log(unique(strings));
*/




/*
Задание 7 (Анаграммы)
Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в
разном порядке. Например:
воз - зов киборг - гробик корсет - костер - сектор Напишите функцию anClean(arr),
которая возвращает массив слов, очищенный от анаграмм.
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
var mass = [], result = [];
function anClean(arr) {
	for (var i = 0; i < arr.length; i++) {
		mass.push(arr[i].toLowerCase());

		for (var x = 0; x < arr.length; x++) {
			var param1 = arr[x].split('').reverse();
			if (mass[i] != arr[x]) {
				result.push(mass[i]);
			}
		}
	}

	return param1;
}

console.log(anClean(arr));


/*
Задание 8
Напишите функцию toCamelCase(str), которая преобразует строки вида my-short-string
в myShortString
Дефисы удаляются, а все слова после них получают заглавную букву
Пример:
toCamelCase('background-color');  - backgroundColor
toCamelCase('list-style-type'); - listStyleType
toCamelCase('-webkit-transition'); WebkitTransition




Задание 9
Код ниже получает из массива строк новый массив, содержащий их длины. Перепишите его: уберите цикл,
используйте вместо него метод map.
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}
console.log( arrLength ); // 4,5,2,5



/*
+++Задание 10
Напишите функцию sum(...), которая возвращает сумму всех
своих аргументов.
sum() = 0
sum(1) = 1
sum(1, 2) = 3
sum(1, 2, 3) = 6
sum(1, 2, 3, 4) = 10
*/
/*
Решение
function sum() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}
console.log(sum(5));
console.log(sum(5, 3));
console.log(sum(5, 3, 8, 7, 2));
*/




/*
Задание 11
Создайте объект Date для даты: 25 февраля 2015 года, 2 часа 17 минут.
Временная зона — местная. Выведите его на экран.




http://www.codewars.com/kata/add-property-to-every-object-in-array
http://www.codewars.com/kata/return-the-missing-element
http://www.codewars.com/kata/find-your-villain-name
http://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array
http://www.codewars.com/kata/take-a-ten-minute-walk
*/