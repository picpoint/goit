/*
Домашнее задание. JS. Урок 14.
*/


/*
Задание 1

var animal = {
	eat: function () {
		return this.full = 'yes';
	}
};

var rabbit = {
	__proto__: animal   // наследуем прототип
};

console.log(rabbit.eat());   // будет выводиться с-во 'yes';  для того чтобы оно выводилось я дополнительно
сделал  return в фа-ии eat объекта animal
*/



/*
Задание 2

Есть объекты:

var head = {
  glasses: 1
};

var table = {
  pen: 3
};

var bed = {
  sheet: 1,
  pillow: 2
};

var pockets = {
  money: 2000
};

Присвойте объектам ссылки __proto__ так, чтобы любой поиск чего-либо шёл по алгоритму pockets -> bed -> table -> head.
То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.
После этого ответьте на вопрос, как быстрее искать glasses: обращением к pockets.glasses или head.glasses? Попробуйте протестировать.

Решение
var head = {
	glasses: 1
};

var table = {
	pen: 3,
	__proto__: head   // Третий шаг - мы делаем head прототипом table, выстроив цепочку протоипов, мы имеем связь между ними
};

var bed = {
	sheet: 1,
	pillow: 2,
	__proto__: table  // Второй шаг - мы делаем table прототипом bed
};

var pockets = {
	money: 2000,
	__proto__: bed    // Первый шаг - мы делаем объект bed прототипом pockets
};

console.log(pockets.pen);
console.log(bed.glasses);
console.log(table.money);

как быстрее искать glasses? - быстрее искать вызвав его родной метод head.glasses
*/