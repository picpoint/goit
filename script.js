/*
Домашнее задание. JS. Урок 5.
Задание 1 (Кто первым решил больше всех задач)
Напиште код который выведет сотрудника который выполнил больше всех задач.
Например:
var tasksCompleted = {
	'Anna': 29,
	'Serg': 35,
	'Elena': 1,
	'Anton': 99
};
*/
/*
Решение:
var tasksCompleted = {
	'Anna': 29,
	'Serg': 35,
	'Elena': 1,
	'Anton': 99,
	'Semen': 90,
	'Petro': 105,
	'Grigory': 93,
	'Sergey': 106
};

function moreTask(obj) {
	var param = 0;
	for (var key in obj) {
		if (param < obj[key]) {
			param = obj[key];
		}
	}
	return param;
}

console.log(moreTask(tasksCompleted));
*/




/*
Задание 2 (Изменение численных свойств)
Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает объект в котором все числовые значения у свойств умножены на 2.
// Before
var image = {
	width: 100,
	height: 400,
	title: 'Cool image'
};

multiplyNumeric(image);

// after
image = {
	width: 200,
	height: 800,
	title: 'Cool image'
};
*/
/*
Решение
var image = {
	width: 100,
	height: 400,
	title: 'Cool image',
	border: 150,
	margin: 'no'
};

function multiplyNumeric(image) {
	for (var key in image) {
		if (!isNaN(image[key])) {
			image[key] *= 2;
		}
	}
	return image;
}

console.log(multiplyNumeric(image));
*/




/*
Задание 3 (Калькулятор)
Напишите код, который:
Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
Выводит сумму всех значений массива когда ввод прекращен.
*/
/*
Решение
function calcArray() {

	var arr = [], result = 0;
	var x = 10;

	while (!isNaN(x) && x != '' && x !== null) {
		x = +prompt('Введите значение', '');
		arr.push(x);
	}
	arr.pop();

	for (var i = 0; i < arr.length; i++) {
		result += arr[i];
	}

	return result;
}

console.log(calcArray());
*/





/*
Задание 4
Создайте функцию find(arr, value), которая ищет в массиве arr значение
value и возвращяет его позицию, если найдено, или -1, если не найдено
*/
/*
Решение
var arr = ['start', 4, true, 'go', 7, 0, '', 'end'];
var value = 4;

function find(arr, value) {
	for (var i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			return 'Позиция № ' + i;
		}
		continue;
	}
	return -1;
}

console.log(find(arr, value));
*/




/*
Задание 5
Создайте функцию filterRange(arr, a, b), которая принимет массив чисел
arr и возвращает новый массив, который содержит только числа из arr из
диапазона от a до b.
То есть, проверка имеет вид a <= arr[i] <= b
Функция не должна менять arr

Например:
var arr = [5, 7, 4, 8, 3, 0];
var filtered = filterRange(arr, 3, 5);
//filtered = [5, 4, 3];
arr = [5, 7, 4, 8, 3, 0];
*/
/*
Решение
var arr = [7, 3, 5, 8, 2, 1, 4, 6, 9];
var a = 5, b = 9, result = [];

function filterRange(arr, a, b) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= a && arr[i] <= b) {
			result.push(arr[i]);
		}
	}
	return result;
}

console.log(filterRange(arr, a, b));
*/

