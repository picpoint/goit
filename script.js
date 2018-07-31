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
Задание 7
Write a function suffle(arr) to shuffle an array.
*/




/*
Задание 8 (Уникальные css классы)
Имеется массив css классов со старницы.
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
Необходимо из этого массива получить массив с уникальными именами классов (без повторений) отсортированный по
частоте использования (наиболее часто используемые - впереди).
Если классы используются одинаковое количество раз - между ними не важно какой будет первее.
result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
*/




/*
Codewars 7q
1.	more-than-one-way-to-call-a-function-or-skin-a-cat
2.	case-swapping
3.	descending-order
4.	complete-the-pattern-number-10-parallelogram
5.	find-duplicates
6.	gradually-adding-parameters
7.	reverseit-1
8.	basic-js-calculating-averages

Codewars 6q
1.	complete-fibonacci-series
2.	detect-pangram
3.	multiples-of-3-and-5
4.	count-characters-in-your-string
5.	typer-dot-js
*/