/*
Домашнее задание. JS. Урок 3.

Задание 1 (Повторять цикл, пока ввод неверен)
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввел другое число — попросить ввести еще раз, и так далее.
Цикл должен спрашивать число пока либо посетитель не введет число, большее 100, либо не нажмет кнопку Cancel (ESC).
Предполагается, что посетитель вводит только числа, предусматривать обработку нечисловых строк в этой задаче необязательно.
*/
/*
do {
	var number = prompt('Введите число > 100', '');
} while (number <= 100 && number !== null);
*/




/*
Задание 2 (Вывести простые числа)
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n > 1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/



/*
Задание 3 (FizzBuzz)
Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – 'Buzz'.
*/
/*
for (var i = 1; i <= 100; i++) {
	if (i % 5 == 0 && i % 3 != 0) {
		console.log( i + ' Buzz');
	} else if (i % 3 == 0) {
		console.log(i + ' Fizz');
	}
}
*/



/*
Задание 4 (FizzBuzz 2)
Исправьте предыдущую задачу FizzBuzz так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на3, и на 5.
*/
/*
for (var i = 1; i <= 100; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log(i + ' FizzBuzz');
		continue;
	}
	console.log(i);
}*/




/*
Задание 5 (Шахматная доска)
Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо \#. В результате должна получиться шахматная доска.
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.
*/
/*
var str = '', count_start = 1;
var box = +prompt('Введите количество клеток', '10');
var count = +prompt('Введите количество строк', '10');

	for (var i = 1; i <= box; i++) {
		if (i % 2 == 0) {
			str += '_';
		} else {
			str += '#';
		}
	}

	do {
		console.log(str);
		count_start++;
	} while (count_start != count)
*/



/*
Задание 6 (pow)
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(1, 100) = 1 * 1 * ...* 1 = 1
*/
/*
function pow(x, n) {
	var result = 1;
	for (var i = 1; i <= n; i++) {
		result = result * x;
	}
	return result;
}

console.log(pow(3, 5));
console.log(pow(7, 3));
console.log(pow(2, 5));
*/




/*
Codewars
Регистрируемся на codewars
Выполняем задачки:


1.	even-or-odd
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
Создайте функцию, которая принимает целое число как аргумент и возвращает «Четное» для четных чисел или «Нечетное» для нечетных чисел.
function even_or_odd(number) {
  if (number % 2 == 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(even_or_odd(2));




2.	jennys-secret-message
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
Дженни написала функцию, которая возвращает приветствие для пользователя. Тем не менее, она влюблена в Джонни и хотела бы поприветствовать его немного иначе. Она добавила к ней особый случай, но она допустила ошибку.

Исходный код:
 function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}

Решение:
function greet(name) {
  if(name === "Johnny") {
    return "Hello, my love!";
  }
    return "Hello, " + name + "!";
}




3.	return-negative
In this simple assignment you are given a number and have to make it negative. But maybe the number is already
В этом простом задании вам присваивается номер и он должен быть отрицательным. Но, может быть, число уже отрицательно?

Исходный код
function makeNegative(num) {
  // Code?
}

Решение
function makeNegative(num) {
  if(num < 0) {
    return num;
  } else {
    num = '-' + num;
    return +num;
  }

}




4.	opposites-attract
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

Тимми и Сара думают, что они влюблены, но где они живут, они узнают только, как только они соберут цветок. Если у одного из цветов есть четное число лепестков, а у другого есть нечетное количество лепестков, значит, они влюблены.
Напишите функцию, которая будет принимать количество лепестков каждого цветка и вернется, если они влюблены и ложны, если они не являются.

Исходный код
function lovefunc(flower1, flower2){
  // moment of truth
}

Решение
function lovefunc(flower1, flower2){
  var result = flower1 + flower2;
  if(result % 2 == 0) {
    return false;
  } else {
    return true;
  }
}




5.	convert-boolean-values-to-strings-yes-or-no
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
Заполните метод, который принимает логическое значение и возвращает строку «Да» для true, или строку «Нет» для false.

Исходный код
function boolToWord( bool ){
  //...
}

Решение
function boolToWord( bool ){
  if(bool === true) {
    return 'Yes';
  } else if (bool === false) {
    return 'No';
  }
}
*/