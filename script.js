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
++Задание 6
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

5.	find-duplicates
http://www.codewars.com/kata/find-duplicates

6.	gradually-adding-parameters
http://www.codewars.com/kata/gradually-adding-parameters

7.	reverseit-1
http://www.codewars.com/kata/reverseit-1

8.	basic-js-calculating-averages
http://www.codewars.com/kata/basic-js-calculating-averages


Codewars 6q
1.	complete-fibonacci-series
http://www.codewars.com/kata/complete-fibonacci-series

2.	detect-pangram
http://www.codewars.com/kata/detect-pangram

3.	multiples-of-3-and-5

4.	count-characters-in-your-string
http://www.codewars.com/kata/count-characters-in-your-string

5.	typer-dot-js
http://www.codewars.com/kata/typer-dot-js
*/