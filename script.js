/*
Задание 1
Используя конструкцию if..else, напишите код, который будет спрашивать: 'Какой сейчас год?'.
Если посетитель вводит '2015', то выводить 'Вы правы!', если что-то другое — выводить 'С луны свалися? 2015!'.
*/
/*
var year = +prompt('Какой сейчас год');
if (year == 2015) {
	alert('Вы правы!');
} else {
	alert('С луны свалися? 2015!');
}
*/



/*
Задание 2
Используя конструкцию if..else, напишите код, который будет спрашивать: 'Введите любое целое число?'
Затем выведите alert: 1, если значение больше нуля, -1, если значение меньше нуля, 0, если значение равно нулю.
*/
/*
var number = +prompt('Введите любое целое число?');
if (number > 0) {
	alert(1);
} else if (number < 0) {
	alert(-1);
} else if (number == 0) {
	alert(0);
}
*/



/*
Задание 3
Напишите код, который будет запрашивать логин пользователя (prompt).
Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.
Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.
*/
/*
var login = prompt('Введите логин');
if (login == null) {
	alert('Canceled');
} else if (login != 'admin') {
	alert('Access denied')
} else if (login == 'admin') {
	var password = prompt('Введите пароль');
		if (password == null) {
			alert('Canceled');
		} else if (password != 'passw0rd') {
			alert('Wrong password');
		} else if (password == 'passw0rd') {
			alert('Welcome home!');
		}
}
*/



/*
Задание 4
Перепишите if с использованием оператора '?':
var a = 1, b = 2;

if (a + b >= 3) {
	result = 'Yep!';
} else {
	result = 'Noup!';
}
*/
/*
var a = +prompt('Введите а = ', '');
var b = +prompt('Введите b = ', '');
var sum = a + b;
var result = (sum >=3) ? 'Yep!' : 'Noup!';
alert(result);
*/



/*
Задание 5
Перепишите if..else с использованием нескольких операторов '?':
var name = 'admin', text;

if (name == 'admin') {
	text = 'Hi';
} else if (name == 'manager') {
	text = 'Hello';
} else if (name == '') {
	text = 'No login';
} else {
	text = '';
}
*/
/*
var name = prompt('Введите логин', '');
var result = (name === 'admin') ? 'Hi':
						 (name === 'manager') ? 'Hello' :
						 (name === '') ? 'No login' :
						 'Empty';
alert(result);
*/




/*
Задания под звёздочкой
1. http://www.codewars.com/kata/convert-a-number-to-a-string/
We need a function that can transform a number into a string.
Нам нужна функция, которая может преобразовать число в строку.

Способ 1
function numberToString(num) {
  return String(num);
}

Способ 2
function numberToString(num) {
  return num + '';
}
*/


/*
2. http://www.codewars.com/kata/convert-a-string-to-a-number/
We need a function that can transform a string into a number. What ways of achieving this do you know?
Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этого вы знаете?

Исходный код:
var stringToNumber = function(str){
  return null;
}

Способ 1
var stringToNumber = function(str){
  return +str;
}

Способ 2
var stringToNumber = function(str){
  return Number(str);
}
*/