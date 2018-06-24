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
/*
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
var mass = [], result = [];

function anClean(arr) {
	for (var i = 0; i < arr.length; i++) {
		mass.push(arr[i].toLowerCase());
		var subarrx = arr[i].split('').join('');
		var subarrxrvrs = arr[i].split('').reverse().join('');
		console.log(subarrx + ' - ' + subarrxrvrs);

		if (mass[i] != subarrx && mass[i] != subarrxrvrs) {
			result.push(mass[i]);
		}
	}
	return result;
}

console.log(anClean(arr));
*/




/*
+++Задание 8
Напишите функцию toCamelCase(str), которая преобразует строки вида my-short-string
в myShortString
Дефисы удаляются, а все слова после них получают заглавную букву
Пример:
toCamelCase('background-color');  - backgroundColor
toCamelCase('list-style-type'); - listStyleType
toCamelCase('-webkit-transition'); WebkitTransition
*/
/*
function toCamelCase(str) {
	var result = str.split('-');
	var out = '';

	for (var i = 0; i < result.length; i++) {
		if (result[i] == '') {
			result.splice(result[i], 1);
		}
	}

	for (var x = 0; x < result.length; x++) {
		out += result[x].charAt(0).toUpperCase() + result[x].slice(1);
	}

	return out;
}

console.log(toCamelCase('background-color'));
console.log(toCamelCase('list-style-type'));
console.log(toCamelCase('-webkit-transition'));
P.S. Еле еле сделал, но немного не точно, вместо "listStyleType", выдаёт "ListStyleType"
*/




/*
+++Задание 9
Код ниже получает из массива строк новый массив, содержащий их длины. Перепишите его: уберите цикл,
используйте вместо него метод map.
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
arrLength[i] = arr[i].length;
}
console.log( arrLength ); // 4,5,2,5
*/
/*
Решение
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];

var result = arr.map(function (arr) {
	return arr.length;
});

console.log(result);
*/




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
+++Задание 11
Создайте объект Date для даты: 25 февраля 2015 года, 2 часа 17 минут.
Временная зона — местная. Выведите его на экран.
*/
/*
var date = new Date(2015, 1, 24, 29, 17);
console.log(date);
*/




//CODEWARS
/*
+++Задание 12
http://www.codewars.com/kata/add-property-to-every-object-in-array
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null.
The solution should work for array of any length.
Ваша задача - добавить новое свойство usersAnswer к каждому объекту в массиве вопросов. Значение usersAnswer должно быть равно null.
Решение должно работать для массива любой длины.
*/
/*
Решение
var questions = [{
	question: "What's the currency of the USA?",
	choices: ["US dollar", "Ruble", "Horses", "Gold"],
	corAnswer: 0
}, {
	question: "Where was the American Declaration of Independence signed?",
	choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
	corAnswer: 0
}];


for (var i = 0; i < questions.length; i++) {
	questions[i].usersAnswer = null;
}

console.log(questions);
*/




/*
+++Задание 13
http://www.codewars.com/kata/return-the-missing-element
Fellow code warrior, we need your help! We seem to have lost one of our array elements, and we need your help to retrieve it!
Our array, superImportantArray, was supposed to contain all of the integers from 0 to 9 (in no particular order),
but one of them seems to be missing.
Write a function called getMissingElement that accepts an array of unique integers between 0 and 9 (inclusive),
and returns the missing element.

Помощник кодового воина, нам нужна ваша помощь! Кажется, мы потеряли один из наших элементов массива, и нам нужна ваша
помощь, чтобы получить его! Предположительно, наш массив superImportantArray должен содержать все целые числа
от 0 до 9 (в определенном порядке), но один из них, кажется, отсутствует. Напишите функцию, называемую
getMissingElement, которая принимает массив уникальных целых чисел от 0 до 9 (включительно) и возвращает
отсутствующий элемент.
*/
/*
//Решение 1 - тут исходный массив меняется
function getMissingElement(arr){
	arr.sort();

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] != i) {
			return i;
		}
	}
}

console.log(getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] )); // returns 8
console.log(getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] )); // returns 3
console.log(getMissingElement( [1, 3, 2, 4, 0, 5, 8, 7, 9] )); // returns 6
*/
/*
Решение 2 - здесь исходный массив не меняется
function getMissingElement(arr){
	var result = [];

	for (var x = 0; x < arr.length; x++) {
		result.push(arr[x]);
	}

	result.sort();

	for (var i = 0; i < result.length; i++) {
		if (result[i] != i) {
			return i;
		}
	}

}

console.log(getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] )); // returns 8
console.log(getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] )); // returns 3
console.log(getMissingElement( [1, 3, 2, 4, 0, 5, 8, 7, 9] )); // returns 6
*/




/*
+++Задание 14
http://www.codewars.com/kata/find-your-villain-name
Create a function, getVillainName, that returns a villain name based on the user's birthday.
(The birthday will be passed to the function as a valid Date object, so for simplicity, there's no need
to worry about converting strings to dates.)
The first name will come from the month, and the last name will come from the last digit of the date.
The returned value should be a string in the form of "First Name Last Name".
For example, a birthday of November 18 would return "The Terrifying Teaspoon"

Создайте функцию getVillainName, которая возвращает имя злодея, основанное на дне рождения пользователя.
(День рождения будет передан функции как действительный объект Date, поэтому для простоты нет необходимости
беспокоиться о преобразовании строк в даты.)
Первое имя будет получено с месяца, а фамилия будет указана с последней цифры даты.
Возвращаемое значение должно быть строкой в форме «Имя Фамилия».
Например, день рождения 18 ноября вернет «Ужасную чайную ложку»,

Решение
var firstname = {
	January: "The Evil",
	February: "The Vile",
	March: "The Cruel",
	April: "The Trashy",
	May: "The Despicable",
	June: "The Embarrassing",
	July: "The Disreputable",
	August: "The Atrocious",
	September: "The Twirling",
	October: "The Orange",
	November: "The Terrifying",
	December: "The Awkward"
};

var lastname = {
	0: "Mustache",
	1: "Pickle",
	2: "Hood Ornament",
	3: "Raisin",
	4: "Recycling Bin",
	5: "Potato",
	6: "Tomato",
	7: "House Cat",
	8: "Teaspoon",
	9: "Laundry Basket"
};

function getVillainName(birthday){
	birthday = birthday.split(' ');
	var str = '';

	var firstvalue = birthday[0];
	var lastvalue = +birthday[1];

	for (var key in firstname) {
		if (key == firstvalue) {
			str = firstname[key];
		}
	}

	for (var key in lastname) {
		if (key == lastvalue) {
			str += ' ' +  lastname[key];
		}
	}

	return str;
}

console.log(getVillainName('March 9'));
P.S. Задание решил, но немного не понял почему в задании дата 18 ноября - возвращяет "The Terrifying Teaspoon"
вместо "The Terrifying Pickle Teaspoon"
В моим решении я не сделал учат даты с двумя цифрами а только с одной.
*/




/*
http://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array
http://www.codewars.com/kata/take-a-ten-minute-walk
*/