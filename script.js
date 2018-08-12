/*
Домашнее задание. JS. Урок 10.
*/

/*
+++Задание 1 (Объект в массив)
Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив состоящий только из чисел или строк.
Написать метод extractNumber или extractString, который будет возвращать массив.
var obj = {
	person1Age: 20,
	person1Name: 'Ivanov',
	person2Age: 30,
	person2Name: 'Petrov',
	person3Age: 40,
	person3Name: 'Sidorov'
};

var ages = [20,30,40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];
*/
/*
Решение
var obj = {
	person1Age: 20,
	person1Name: 'Ivanov',
	person2Age: 30,
	person2Name: 'Petrov',
	person3Age: 40,
	person3Name: 'Sidorov',
	person4Age: 7.5,

	extractNumber: function () {
		var arr = [];
		for (key in obj) {
			if (typeof(obj[key]) === 'number') {
				arr.push(obj[key]);
			}
		}
		return arr;
	},
	
	extractString: function () {
		var arr = [];
		for (key in obj) {
			if (typeof(obj[key]) === 'string') {
				arr.push(obj[key]);
			}
		}
		return arr;
	}
};

console.log(obj.extractNumber());
console.log(obj.extractString());
*/





/*
+++Задание 2 (Максимальное число в массиве)
Необходимо написать функцию, которая будет принимать на вход массив чисел и возвращать самое большое.
getMaxNumber([1,30,40,2,7]); // 40
getMaxNumber([1,15,-20,2,-7]); // 15
*/
/*
Решение
function getMaxNumber(arr) {
	return Math.max.apply(this, arr);
}

console.log(getMaxNumber([1, 30, 40, 2, 7])); // 40
console.log(getMaxNumber([1, 15, -20, 2, -7])); // 15
console.log(getMaxNumber([7, 444, -120, 2, -7])); // 44
*/






/*
+++Задание 3
Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
Напишите функцию JavaScript, которая возвращает переданную строку с буквами в алфавитном порядке. Перейти к редактору
Example string: webmaster
Expected Output: abeemrstw
Assume punctuation and numbers symbols are not included in the passed string.
Предположим, что символы препинания и цифры не включены в переданную строку.
*/
/*
Решение
var str = 'webmaster';

function alphaString(str) {
	var result = str.split('');
	return result.sort().join('');
}

console.log(alphaString(str));
*/






/*
+++Задание 4
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
string in upper case. Go to the editor
Example string: the quick brown fox
Expected Output: The Quick Brown Fox
*/
/*
function upperString(str) {
	var mass = str.split(' ');
	var result = '';
	for (var i = 0; i < mass.length; i++) {
		result += mass[i].charAt(0).toUpperCase() + mass[i].slice(1) + ' ';
	}
	return result;
}

console.log(upperString('the quick brown fox'));
*/






/*
+++Задание 5
Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
Go to the editor
Example string: Web Development Tutorial
Expected Output: Development
*/
/*
Решение
function longestString(str) {
	var arr = str.split(' ');
	var max = '';
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > max.length) {
			max = arr[i];
		}
	}
	return max;
}

console.log(longestString('Web Development Tutorial'));
*/





/*
+++Задание 6
Write a JavaScript function which accepts an argument and returns the type. Note: There are six possible values
that typeof returns: object, boolean, function, number, string, and undefined.
*/
/*
Решение
function typeOfArguments(arg) {
	return typeof arg;
}
var x;
console.log(typeOfArguments({}));
console.log(typeOfArguments(true));
console.log(typeOfArguments(function () {}));
console.log(typeOfArguments(5));
console.log(typeOfArguments('some text'));
console.log(typeOfArguments(x));
*/





/*
+++Задание 7
Write a function suffle(arr) to shuffle an array.
*/
/*
Решение
function shuffleArray(arr) {

	function sortNum(a, b) {
		var rnd = Math.floor(Math.random() * arr.length);
		for (var i = 0; i < arr.length; i++) {
			if (a < b) return rnd;
		}
	}

	return arr.sort(sortNum);

}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7]));
console.log(shuffleArray(['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь']));
*/






/*
+++Задание 8 (Уникальные css классы)
Имеется массив css классов.
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по
частоте использования (наиболее часто используемые - впереди).
Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
*/
/*
Решение
function cssArray(arr) {
	var mass = [];
	for (var i = 0; i < arr.length; i++) {
		if (mass.indexOf(arr[i]) == -1) {
			mass.push(arr[i]);
		}
	}
	return mass;
}

console.log(cssArray(['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link']));
Решение чуть подсмотрел
*/






/*
Codewars 7q

+++1.	more-than-one-way-to-call-a-function-or-skin-a-cat
http://www.codewars.com/kata/more-than-one-way-to-call-a-function-or-skin-a-cat
*/
/*
Решение
function sum(a, b) {
	return a + b || function (b) {
		return a + b;
	}
}

console.log(sum(3, 2));
console.log(sum(3)(3));
P.S. такой момент, на кодворсе, указано в тестах следующее
Test.expect(sum(2,3), 5);
Test.expect(sum(3)(3), 5);
Но как я понимаю  sum(3)(3), 5 - это не правильно, если сам правлю тест на sum(3)(3), 6 то тест проходит
*/





/*
+++2.	case-swapping
http://www.codewars.com/kata/case-swapping
*/
/*
Решение
function swap(str) {
	var arr = str.split('');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i].toUpperCase()) {
			arr[i] = arr[i].toLowerCase();
		} else {
			arr[i] = arr[i].toUpperCase();
		}
	}
	return arr.join('');
}

console.log(swap('CodeWars')); // cODEwARS
console.log(swap('abc')); // ABC
console.log(swap('ABC')); // abc
console.log(swap('HelloWorld')); // hELLOwORLD
console.log(swap('H_E_l-l_0 WO|||Rld')); // h_e_L-L_0 wo|||rLD
*/






/*
+++3.	descending-order
http://www.codewars.com/kata/descending-order
Your task is to make a function that can take any non-negative integer as a argument and return it with its
digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Ваша задача - создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента
и возвращать его с его цифрами в порядке убывания.
По существу, переставьте цифры, чтобы создать максимально возможное число.
*/
/*
Решение
function descendingOrder(n) {
	return +(n + '').split('').sort().reverse().join('');
}

console.log(descendingOrder(21445)); // 54421
console.log(descendingOrder(145263)); // 654321
console.log(descendingOrder(1254859723)); // 9875543221
*/






/*
4.	complete-the-pattern-number-10-parallelogram
http://www.codewars.com/kata/complete-the-pattern-number-10-parallelogram
You have to write a function pattern which returns the following Pattern(See Examples)
upto n rows, where n is parameter.
####Rules/Note:
If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
The length of each line = (2n-1).
Range of n is (-∞,100]

Вам нужно написать шаблон функции, который возвращает следующий шаблон (см. Примеры) до n строк, где n - параметр.
#### Правила / Примечание: Если аргумент равен 0 или отрицательному целому числу,
тогда он должен возвращать "" т.е. пустую строку. Длина каждой линии = (2n-1). Диапазон n равен (-∞, 100)
*/
/*
function pattern(n) {
	var output = "";
	var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	for (var i = 1; i < arr.length - (arr.length - n) + 1; i++) {
		// if (n >= arr.length) {
		//
		// }
		output += arr[i];
	}
	return output;
}

console.log(pattern(15));
*/




/*
+++5.	find-duplicates
http://www.codewars.com/kata/find-duplicates
Given an array, find the duplicates in that array, and return a new array of those duplicates.
The elements of the returned array should appear in the order when they first appeared as duplicates.
Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., '1' !== 1).
Учитывая массив, найдите дубликаты в этом массиве и верните новый массив этих дубликатов.
Элементы возвращаемого массива должны появляться в том порядке, в котором они сначала появляются как дубликаты.
Примечание: номера и их соответствующие строковые представления не должны рассматриваться как дубликаты (т. Е. '1'! == 1).
*/
/*
Решение
function duplicate(arr) {
	var mass = [];
	var res = [];

	for (var i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === 'number') {
			if (mass.indexOf(arr[i]) === -1) {
				mass.push(arr[i]);
			} else {
				if (res.indexOf(arr[i]) === -1)
				res.push(arr[i]);
			}
		}
	}
	return res;

}

console.log(duplicate([1, 2, 4, 4, 3, 3, 1, 5, 3, '5'])); // [4, 3, 1]
console.log(duplicate([0, 1, 2, 3, 4, 5])); // []
console.log(duplicate(['1', '2', 3, 4, '5'])); []
P.S. Решил, работает вроде бы, но вот на кодверсе по тестам что то выдаёт пару ошибок
*/





/*
+++6.	gradually-adding-parameters
http://www.codewars.com/kata/gradually-adding-parameters
This kata is all about adding numbers.
You will create a function named add. This function will return the sum of all the arguments. Sounds easy, doesn't it??
Well here's the twist. The inputs will gradually increase with their index as parameter to the function.
Эта ката - это добавление чисел. Вы создадите функцию с именем add. Эта функция вернет сумму всех аргументов.
Звучит просто, не так ли? Ну вот и твист. Входы будут постепенно увеличиваться с индексом в качестве параметра функции.
*/
/*
Решение
function add() {
	if (arguments == undefined) {
		return 0;
	}
	var count = 0;
	var result = 0;
	for (var i = 0; i < arguments.length; i++) {
		result += arguments[i] * (++count);
	}

	return result;
}

console.log(add(3, 4, 5));  //returns ( 3 * 1 ) + ( 4 * 2 ) + ( 5 * 3 ) = 26
console.log(add());  //=> 0
console.log(add(1, 2, 3));  //=> 14
console.log(add(1, 4, -5, 5));  //=> 14
*/





/*
+++7.	reverseit-1
http://www.codewars.com/kata/reverseit-1
You have to create a function named reverseIt.
Write your function so that in the case a string or a number is passed in as the data,
you will return the data in reverse order. If the data is any other type, return it as it is.
Examples of inputs and subsequent outputs:
Вы должны создать функцию с именем reverseIt. Напишите свою функцию так, чтобы в случае передачи
строки или числа в качестве данных вы вернете данные в обратном порядке.
Если данные представляют собой любой другой тип, верните его как есть.
Примеры входов и последующих выходов:
"Hello" -> "olleH"
"314159" -> "951413"
[1,2,3] -> [1,2,3]
*/
/*
Решение
function reverseIt(data) {
	if (typeof data === 'string') {
		return data.split('').reverse().join('');
	}
	if (typeof data === 'number') {
		return +(data + '').split('').reverse().join('');
	}
	return data;
}

console.log(reverseIt('Hello'));
console.log(reverseIt(314159));
console.log(reverseIt([1,2,3]));
*/






/*
+++8.	basic-js-calculating-averages
http://www.codewars.com/kata/basic-js-calculating-averages
Let's build a calculator that can calculate the average for an arbitrary number of arguments.
The test expects you to provide a Calculator object with an average method:
Calculator.average()
The test also expects that when you pass no arguments, it returns 0. The arguments are expected to be integers.
It expects Calculator.average(3,4,5) to return 4.
Давайте построим калькулятор, который может вычислить среднее значение для произвольного количества аргументов.
Тест ожидает, что вы предоставите объект Calculator со средним методом: Calculator.average ()
Тест также ожидает, что когда вы не передадите никаких аргументов, он вернет 0.
Ожидается, что аргументы будут целыми. Он ожидает, что Calculator.average (3,4,5) вернется 4.
*/
/*
Решение
var Calculator = {
	average: function () {
		var result = 0;
		if (arguments == undefined) {
			return 0;
		}

		for (var i = 0; i < arguments.length; i++) {
			result += arguments[i] / arguments.length;
		}
		return result;
	}
};

console.log(Calculator.average(3, 4, 5));
console.log(Calculator.average(7, 5, 8, 3, 9));
console.log(Calculator.average(5, 5, 5, 5, 5));
P.S. Считает правильно, но тест на кодверсе выдаёт Longer test - Expected: 5.769230769230769, instead got: 5.76923076923077
Честно, аж смешно
*/





/*
+++Codewars 6q
1.	complete-fibonacci-series
http://www.codewars.com/kata/complete-fibonacci-series
The function 'fibonacci' should return an array of fibonacci numbers. The function takes a number as an
argument to decide how many no. of elements to produce.
If the argument is less than or equal to 0 then return empty array
Example:
fibonacci(4); // should return [0,1,1,2]
fibonacci(-1); // should return []
Функция «fibonacci» должна возвращать массив чисел фибоначчи. Функция принимает число как аргумент,
чтобы решить, сколько нет. элементов для производства. Если аргумент меньше или равен 0, возвращаем пустой массив.
Пример:
fibonacci (4); // должен возвращать [0,1,1,2]
fibonacci (-1); // должен возвращать []
*/
/*
Решение
function fib(n) {
	var a = 0;
	var b = 1;
	var c;
	var mass = [];
	if (n == 0) {
		return [0];
	}
	if (n == 1) {
		return [0, 1];
	}
	for (var i = 2; i < n; i++) {
		c = a + b;
		a = b;
		b = c;
		mass.push(c);
	}
	return mass;
}

console.log(fib(8));  // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
										  // 1, 2, 3, 4, 5, 6, 7,  8,  9, 10, 11, 12
Задача решена, но с подглядками и немного коряво
*/






/*
+++2.	detect-pangram
http://www.codewars.com/kata/detect-pangram
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the
letters A-Z at least once (case is irrelevant).
Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
Ignore numbers and punctuation.
Панграма - это предложение, содержащее каждую букву алфавита хотя бы один раз. Например, предложение 
«Быстрая коричневая лиса прыгает по ленивой собаке» - это панграма, потому что она использует буквы A-Z хотя 
бы один раз (случай не имеет значения). 
Учитывая строку, определите, является ли она панграмой. Верните True, если это так, False, если нет. 
Игнорировать числа и знаки препинания.
*/
/*
Решение
function isPangram(string) {
	var arr = [];
	var count = 0;
	var alphabetEn = ['a', 'b', 'c', 'd', 'e',
									'f', 'g', 'h', 'i', 'j',
									'k', 'l',	'm', 'n', 'o',
									'p', 'q', 'r', 's', 't',
									'u', 'v', 'w', 'x',	'y', 'z'];

	var alphabetRu = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й',
										'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
										'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

	var mass = string.toLowerCase().split(' ').join('').split('').sort();


	for (var i = 0; i < mass.length; i++) {
		if (arr.indexOf(mass[i]) === -1) {
			arr.push(mass[i]);
		}
	}

	for (var x = 0; x < alphabetEn.length; x++) {
		if (arr[x] === alphabetEn[x]) {
			console.log(arr[x] + ' == ' + alphabetEn[x]);
			count++;
		} else {
			console.log(arr[x] + ' != ' + alphabetEn[x]);
		}
	}

	if (count === alphabetEn.length) {
		return true;
	} else {
		return false;
	}

}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('Six big juicy steaks sizzled in a pan as five workmen left the quarry'));
console.log(isPangram('is not a pangramm words'));
//console.log(isPangram('Эй цирюльникъ ёжик выстриги да щетину ряхи сбрей феном вошь за печь гони'));
console.log(isPangram('This is not a pangram'));
P.S. Задачу решил, хотел написать панграмм для русского алфавита, но т.к. в юникод буква ё идет не по порядку,
решил пока не замарачиваться. Русский панграмм пока не получился.
*/




/*
3.	multiples-of-3-and-5 - данной задачи на кодворсе  не обнаружено
*/





/*
4.	count-characters-in-your-string
http://www.codewars.com/kata/count-characters-in-your-string
The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then
the result should be { 'a': 2, 'b': 1 }
What if the string is empty ? Then the result should be empty object literal { }
Основная идея состоит в том, чтобы подсчитать все возникающие символы (UTF-8) в строке.
Если у вас есть строка, подобная этой aba, тогда результат должен быть {'a': 2, 'b': 1}
Что делать, если строка пуста? Тогда результатом должен быть пустой литерал объекта {}
*/
function count (string) {
	var str = string.split('');

	return str;
}

console.log(count('aba')); // {'a': 2, 'b': 1}






/*
5.	typer-dot-js
http://www.codewars.com/kata/typer-dot-js
*/