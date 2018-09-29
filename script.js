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

/*
var animal = {
	east: 'yes'
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype = animal;

var krol = new Rabbit('Bugs Bunny');
console.log(krol.name);
console.log(krol.east);
*/

/*
function Rabbit() {

}

Rabbit.prototype = {
	eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats);
*/

/*
var options = {
	height: 300,
	width: 200,
	index: 150
};

function Menu(obj) {
	return obj;
}

function inherit(proto) {
	function F() {

	}
	F.prototype = proto;
	var object = new F;
	return object;
}

var result = inherit(options);
console.log(result.height);
console.log(result.index);
*/

/*
function Constr(name) {
	this.name = name;
}

var obj = new Constr('AMD');
console.log(obj.name);

var obj2 = new obj.constructor('Intel');
console.log(obj2.name);
*/

/*
function Animal(name) {
	this.name = name;
	this.speed = 0;

	this.run = function (speed) {
		this.speed += speed;
		return 'Скорость ' + this.speed;
	};

	this.stop = function () {
		return this.speed = 0;
	};
}

var rabbit = new Animal('krolik');
console.log(rabbit.run(1));
console.log(rabbit.run(5));
console.log(rabbit.stop());
*/

/*
function Animal(name) {
	this.name = name;
	this.speed = 0;
}

Animal.prototype.run = function (speed) {
	this.speed += speed;
	return this.speed;
};

Animal.prototype.stop = function () {
	return this.speed = 0;
};

var jaguar = new Animal('Barsik');
console.log(jaguar.run(5));
console.log(jaguar.run(8));
console.log(jaguar.stop());
*/

/*
Есть класс CoffeeMachine, заданный в функциональном стиле.
Задача: переписать CoffeeMachine в виде класса с использованием прототипа.

// Исходный код
function CoffeMashine(power) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;

	function getBoilTime() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	function jobsCoffe() {
		console.log('Coffe is ready');
	}

	this.run = function () {
		setTimeout(jobsCoffe, getBoilTime());
	};

	this.setWaterAmount = function (amount) {
		waterAmount = amount;
	};
}

var cm = new CoffeMashine(40000);
cm.setWaterAmount(150);
cm.run();



//Решение
function CoffeMashine(power) {
	this.__waterAmount = 0;              // здесь делаем св-во защищенным, т.к локальная переменная не будет видна
	var WATER_HEAT_CAPACITY = 4200;      // я оставил локальную переменную локальной, т.к смысла нет её выносить в защищенную

	this.__readyCoffe = function() {     // здесь делаю метод публичным, иначе он не вызовится в методе run
		console.log('Coffe is ready');
	};

	this.__getBoilTime = function() {    // метод сделан защищённым, но в решении он вынесен в прототип, я оставил здесь
		return this.__waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}
}

CoffeMashine.prototype.run = function () {  // метод запуска записан в прототип
	setTimeout(this.__readyCoffe, this.__getBoilTime());
};

CoffeMashine.prototype.setWaterAmount = function (amount) {  // установку количества воды тоже вынес в прототип
	this.__waterAmount = amount;
};

var cm = new CoffeMashine(10000);
cm.setWaterAmount(150);
cm.run();
*/

/*
Вы – руководитель команды, которая разрабатывает игру, хомяковую ферму. Один из программистов
получил задание создать класс «хомяк» (англ – "Hamster").
Объекты-хомяки должны иметь массив food для хранения еды и метод found для добавления.
Ниже – его решение. При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
В чём дело? Как поправить?

//исходный код
function Hamster() {

}

Hamster.prototype.food = [];

Hamster.prototype.found = function (something) {
	this.food.push(something);
};

var speedy = new Hamster();
var lazzy = new Hamster();

speedy.found('apple');
lazzy.found('banana');

console.log('speedy - ' + speedy.food);
console.log('lazzy - ' + lazzy.food);


//Решение
function Hamster() {
	this.food = [];                  // *2
}

//Hamster.prototype.food = [];     // *1

Hamster.prototype.found = function (something) {
	this.food.push(something);
};

var speedy = new Hamster();
var lazzy = new Hamster();

speedy.found('apple');
lazzy.found('banana');

console.log('speedy - ' + speedy.food);
console.log('lazzy - ' + lazzy.food);

P.S. отвечаю на вопрос задачи - "При создании двух хомяков, если поел один – почему-то сытым становится и второй тоже.
В чём дело? Как поправить?"

Дело в том что в конструкторе Humster не было пустого массива, что это значит, при записи в прототип массива food
он становился доступен для всех вновь созданных объектов, создавая объект один потом другой потом третий, все правила
одновременно распространялись на данные объекты, т.е. Прототип же распространяется на все объекты независимо сколько
их было создано и каких, так и здесь. Комментим строку *1 далее самому конструктору назначаем пустой массив *2
но с публичным методом, тогда он будет наследоваться только конкретно созданному объекту, который будет брать свойства
при создании из конструктора
*/

/*
function Animal(name) {
	this.name = name;
	this.speed = 0;
}

Animal.prototype.run = function (speed) {
	this.speed += speed;
	console.log('скорость ' + this.speed);
};

Animal.prototype.stop = function () {
	this.speed = 0;
	console.log(this.name + ' стоит ' + 'скорость ' + this.speed);
};


function Rabbit(name) {
	this.name = name;
	this.speed = 0;
}

Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.jump = function () {
	this.speed++;
	console.log(this.name + ' прыгает' + ' скорость ' + this.speed);
};


var krolik = new Rabbit('pushok');
krolik.run(5);
krolik.run(7);
krolik.stop();
*/

/*
function Animal(name) {
	this.name = name;
	this.speed = 0;
}

function Rabbit(name) {
	Animal.apply(this, arguments);
}

var krol = new Rabbit('bunny');
console.log(krol.name);
console.log(krol.speed);
*/

/*
function Animal() {

}

Rabbit.prototype = Object.create(Animal.prototype);

function Rabbit() {

}

var krolik = new Rabbit();
console.log(krolik instanceof Rabbit);
console.log(krolik instanceof Animal);
console.log(krolik instanceof Object);
*/