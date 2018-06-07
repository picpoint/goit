/*
Домашнее задание. JS. Урок 4.

Задание 1 (Последовательность Фибоначчи)
Последовательность чисел Фибоначчи вычисляется по формуле формулу F(n) = F(n-1) + F(n-2). В ней каждое следующее число вычисляется
как сумма двух предыдущих. Первые два числа равны 1 и 1.
Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.
Например:
console.log(fib(3)); //2
console.log(fib(7)); //13
console.log(fib(77)); //5527939700884757
/*
Решение
function fib(n) {
	if (n == 1 || n == 2) {
		return 1;
	} else {
		fb = fib(n - 1) + fib(n - 2);
		return fb;
	}
}

console.log(fib(10));
*/




/*
Задание 2 (Проверка на СПАМ)
Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false
*/
/*
Решение: (я немного усовершенствовал программу, можно ввести любое слово(не только spam/sex и оно проверится в строке)
function checkSpam(str) {
	var word = prompt('Введите слово на проверку', '');
	var str_low = str.toLowerCase();
	result = str_low.indexOf(word, 0);
	if (result == -1) {
		return false;
	} else {
		return true;
	}
}

console.log(checkSpam('get new Sex videos'));
console.log(checkSpam('[SPAM] How to earn fast money?'));
console.log(checkSpam('New PSD template'));
*/




/*
Задание 3 (Троеточие)
Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.
Если длинна больше 20, то обрезает строку и добавляет в конец строки '...'
*/
/*
Решение
function trimStr(str) {
	if (str.length > 19) {
		return str.substring(0, 20) + '...';
	} else {
		return str;
	}
}

console.log(trimStr('Строка очень большой длинной'));
console.log(trimStr('Строка большой длинной'));
console.log(trimStr('Строка длинной'));
*/




/*
Codewars
http://www.codewars.com/kata/a-function-within-a-function
*/