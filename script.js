// Задание 1
/*
function CoffeMashine(power) {
	this.waterAmount = 0;

	var self = this;
	var timerId;
	var WATER_HEAT_CAPACITY = 4200;

	function getBoilTime() {
		return WATER_HEAT_CAPACITY * self.waterAmount * 80 / power;
	}
	
	function onReady() {
		console.log('Кофе готов');
	}

	this.run = function () {
		timerId = setTimeout(onReady, getBoilTime());
	};

	this.stop = function () {
		setTimeout(function () {
			clearTimeout(timerId);
		}, 2000);
	};
}

var cm = new CoffeMashine(30000);
cm.waterAmount = 300;
cm.run();
cm.stop();
*/


// Задание 2
/*
function CoffeMashine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;

	function getBoilTime() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.waterAmount = function (amount) {
		if (!arguments.length) {
			return waterAmount;
		}
		if (amount < 0) {
			throw new Error('Объем не может быть отрицательным');
		}
		if (amount > capacity) {
			throw new Error('Объем не может быть больше ' + capacity);
		}
		waterAmount = amount;
	};

	function onReady() {
		console.log('Кофе готов');
	}
	
	this.run = function () {
		setTimeout(onReady, getBoilTime());
	};
}

var cm = new CoffeMashine(55000, 500);
cm.waterAmount(100);
cm.run();
*/


// Задание 3
/*
Напишите конструктор User для создания объектов:
С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя.

function User() {

	this.setFirstName = function (firstName) {
		this.firstName = firstName;
	};

	this.setSurName = function (surName) {
		this.surName = surName;
	};

	this.getFullName = function () {
		return this.firstName + ' ' + this.surName;
	}
}

var user = new User();
user.setFirstName('Semen');
user.setSurName('Petrov');
console.log(user.getFullName());
user.setFirstName('Zinoviy');
console.log(user.getFullName());
user.setSurName('Kolobanov');
console.log(user.getFullName());
*/


// Задание 4
/*
Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

function CoffeeMachine(power, capacity) {
	//...
	this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Значение должно быть положительным");
		}

		if (amount > capacity) {
			throw new Error("Нельзя залить воды больше, чем " + capacity);
		}

		waterAmount = amount;
	};

	this.getWaterAmount = function() {
		return 'Объем залитой воды ' + waterAmount + ' Полный объем ' + capacity;
	};

	this.getPower = function () {
		return 'Мощность кофеварки ' + power;
	}

}

var cm = new CoffeeMachine(2575, 3753);
console.log(cm.getPower());
cm.setWaterAmount(2000);
console.log(cm.getWaterAmount());
*/


// Задание 5
/*
Добавьте кофеварке публичный метод addWater(amount), который будет добавлять воду.
При этом, конечно же, должны происходить все необходимые проверки – на положительность и превышение ёмкости.
Исходный код:

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;
  var volumeWater = 0;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }

    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }
    waterAmount = amount;
  };

  function onReady() {
    console.log('Кофе готов!');
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

  this.addWater = function (volumeWater) {
    if (volumeWater < 0) {
      throw new Error('Объем не может быть отрицательным');
    }

    volumeWater += volumeWater;

    if (volumeWater > capacity) {
      throw new Error('Превышен допустимый объем');
    }

    console.log(volumeWater);
  };
}

var cm = new CoffeeMachine(75000, 400);
cm.addWater(200);
cm.addWater(100);
cm.addWater(300);
cm.run();
*/


// Задание 6
/*
Создать сеттер для onReady
Обычно когда кофе готов, мы хотим что-то сделать, например выпить его.
Сейчас при готовности срабатывает функция onReady, но она жёстко задана в коде

function CoffeeMachine(power, capacity) {
  var waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
     console.log('Кофе сварился!');
    }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

  this.setOnReady = function (func) {
    onReady = func;
  };

}


//Создайте сеттер setOnReady, чтобы код снаружи мог назначить свой onReady, вот так:

var cm = new CoffeeMachine(20000, 500);
cm.setWaterAmount(150);

cm.run();

cm.setOnReady(function () {
  var amount = cm.getWaterAmount();
  console.log('Кофе готов ' + amount + ' мл');
});

cm.run();


P.S. Значение onReady по умолчанию должно быть таким же, как и раньше.
P.P.S. Постарайтесь сделать так, чтобы setOnReady можно было вызвать не только до, но и после запуска
кофеварки, то есть чтобы функцию onReady можно было изменить в любой момент до её срабатывания.
 */


// Задание 7
/*
Из внешнего кода мы хотели бы иметь возможность понять – запущена кофеварка или нет.
Для этого добавьте кофеварке публичный метод isRunning(), который будет возвращать true, если она запущена и false, если нет.
Нужно, чтобы такой код работал:

function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
  var timerId;

	function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	this.setWaterAmount = function(amount) {
		// ... проверки пропущены для краткости
		waterAmount = amount;
	};

	this.getWaterAmount = function(amount) {
		return waterAmount;
	};

	function onReady() {
		console.log('Кофе готов!');
	}

	this.setOnReady = function(newOnReady) {
		onReady = newOnReady;
	};

	this.run = function() {
		timerId = setTimeout(function() {
			onReady();
		}, getTimeToBoil());
	};

	this.isRunning = function() {
	  var x;

    if (timerId) {
      return true;
    }

    setTimeout(function () {
      timerId = x;
    }, getTimeToBoil());

    if (!timerId) {
      return  false;
    }
	};

}


var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.run();

coffeeMachine.setOnReady(function() {
	var amount = coffeeMachine.getWaterAmount();
	console.log('Кофе приготовлен: ' + amount + ' мл'); // Готов кофе: 150 мл
});



var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log('До: ' + coffeeMachine.isRunning()); // До: false

coffeeMachine.run();
console.log('В процессе: ' + coffeeMachine.isRunning()); // В процессе: true

coffeeMachine.setOnReady(function() {
	console.log("После: " + coffeeMachine.isRunning()); // После: false
});
*/


// Задание 8
/*
В коде CoffeeMachine сделайте так, чтобы метод run выводил ошибку, если кофеварка выключена.

function Mashine() {
	this.onOff = false;

	this.onSwitch = function () {
		this.onOff = true;
	};

	this.offSwitch = function () {
		this.onOff = false;
	};
}



function CoffeMashine(power) {
  Mashine.call(this);

  this.waterAmount = 0;
  var WATER_HEAT_CAPACITY = 4200;

  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    console.log('Кофе готов');
  }

  this.run = function () {
    if (this.onOff) {
	    setTimeout(onReady, getBoilTime.call(this));
    } else {
	    console.log('Кофеварка выключена');
    }
  };
}

var cm = new CoffeMashine(35000);
cm.waterAmount = 200;
cm.onSwitch();
cm.run();
*/


// Задание 9
/*
Когда кофеварку выключают – текущая варка кофе должна останавливаться.

		function Mashine(power) {
	this.__onOff = false;

	this.onSwitch = function () {
		this.__onOff = true;
	};

	this.offSwitch = function () {
		this.__onOff = false;
	};
}

function CoffeMashine(power) {
	Mashine.apply(this, arguments);
	var timerId;
	var WATER_HEAT_CAPACITY = 4200;
	this.waterAmount = 0;
	this.offSwitch();


	function getBoilTime() {
		return WATER_HEAT_CAPACITY * 80 * this.waterAmount / power;
	}

	function onReady() {
		console.log('Кофе готов');
	}

	var parentDisable = this.offSwitch;
	this.offSwitch = function () {
		parentDisable.call(this);
		clearTimeout(timerId);
	};

	this.run = function () {
		if (this.__onOff) {
			var timerId = setTimeout(onReady, getBoilTime.call(this));
		} else {
			console.log('Кофеварка выключена');
		}
	};

}

var cm = new CoffeMashine(50000);
cm.waterAmount = 300;
cm.onSwitch();
cm.run();
cm.offSwitch();
*/


// Задание 10
/*
Создайте класс для холодильника Fridge(power), наследующий от Machine, с приватным свойством
food и методами addFood(...), getFood():
Приватное свойство food хранит массив еды.
Публичный метод addFood(item) добавляет в массив food новую еду, доступен вызов с несколькими аргументами
addFood(item1, item2...) для добавления нескольких элементов сразу.
Если холодильник выключен, то добавить еду нельзя, будет ошибка.
Максимальное количество еды ограничено power/100, где power – мощность холодильника, указывается в конструкторе.
При попытке добавить больше – будет ошибка
Публичный метод getFood() возвращает еду в виде массива, добавление или удаление элементов из которого
не должно влиять на свойство food холодильника.

Решение.
function Mashine(power) {
	this.__power = power;
	this.__enabled = false;
	var self = this;

	this.onSwitch = function () {
		self.__enabled = true;
	};

	this.offSwitch = function () {
		self.__enabled = false;
	};
}


function Fridge(power) {
	Mashine.apply(this, arguments);
	var food = [];

	this.addFood = function (item) {
		if (this.__enabled === false) {
			throw new Error('Добавить еду нельзя, холодильник выключен');
		}

		for (var i = 0; i < arguments.length; i++) {
			food.push(arguments[i]);
		}

		if (food.length > power/100) {
			throw new Error('Нельзя добавить еды больше чем - ' + power/100);
		}
	};

	this.getFood = function () {
		return food;
	};
}

var frdg = new Fridge(500);
frdg.onSwitch();
frdg.addFood('apple', 'ananas', 'kokos');
frdg.addFood('strawbery', 'chery');
//frdg.addFood('semki');
console.log(frdg.getFood());

var fridgeFood = frdg.getFood();
fridgeFood.push('vilka', 'lozka');
console.log(fridgeFood);

P.S. К сожалению я так и не додумался как решить последнее условие:
 - "возвращает еду в виде массива, добавление или удаление элементов из которого
 не должно влиять на свойство food холодильника."
*/


// Задание 11
/*
Добавьте в холодильник методы:
Публичный метод filterFood(func), который возвращает всю еду, для которой func(item) == true
Публичный метод removeFood(item), который удаляет еду item из холодильника.


function Mashine(power) {
	this.__power = power;
	this.__enabled = false;
	var self = this;

	this.onSwitch = function () {
		self.__enabled = true;
	};

	this.offSwitch = function () {
		self.__enabled = false;
	};
}


function Fridge(power) {
	Mashine.apply(this, arguments);
	var food = [];

	this.addFood = function (item) {
		if (this.__enabled === false) {
			throw new Error('Добавить еду нельзя, холодильник выключен');
		}

		for (var i = 0; i < arguments.length; i++) {
			food.push(arguments[i]);
		}

		if (food.length > power/100) {
			throw new Error('Нельзя добавить еды больше чем - ' + power/100);
		}
	};

	this.getFood = function () {
		return food;
	};

	this.filterFood = function (func) {
		for (var key in food) {

		}
	};

	this.removeFood = function (item) {
		console.log(item);
		//food.length = 0;
	};
}


//Код для проверки:

var fridge = new Fridge(500);
fridge.onSwitch();

fridge.addFood({
	title: "котлета",
	calories: 100
});

fridge.addFood({
	title: "сок",
	calories: 30
});

fridge.addFood({
	title: "зелень",
	calories: 10
});

fridge.addFood({
	title: "варенье",
	calories: 150
});



fridge.removeFood("нет такой еды"); // без эффекта

console.log(fridge.getFood().length); // 4

var dietItems = fridge.filterFood(function(item) {
	return item.calories < 50;
});

dietItems.forEach(function(item) {
	console.log(item.title); // сок, зелень
	fridge.removeFood(item);
});

console.log(fridge.getFood().length); // 2
*/


// Задание 12
/*
Переопределите метод disable холодильника, чтобы при наличии в нём еды он выдавал ошибку.
*/

function Machine(power) {
	//здесь делаем и публичные и защищенные методы
	this._power = power;
	this._enabled = false;
	var self = this;

	this.enable = function() {
		self._enabled = true;
	};

	this.disable = function() {
		self._enabled = false;
	};
}



function Fridge(power) {
	// наследуем методы от ф-ии Machine в свой контекст
	Machine.apply(this, arguments);

	var food = []; // приватное свойство food

	this.addFood = function() {
		// В этом методе проверяем включен/выключен холодильник, если соответсвует можности, то на эту
		// можность добавляем еды и здесь ещё пробегаемся по всем аргументам массива и пушим их в массив food
		if (!this._enabled) {
			throw new Error("Холодильник выключен");
		}

		if (food.length + arguments.length >= this._power / 100) {
			throw new Error("Нельзя добавить, не хватает мощности");
		}

		for (var i = 0; i < arguments.length; i++) {
			food.push(arguments[i]); // добавить всё из arguments
		}
	};

	this.getFood = function() {
		// копируем еду в новый массив, чтобы манипуляции с ним не меняли food
		return food.slice();
	};

	/*
	// эти методы не нужны нам здесь в этом решении
	// они остались от прошлого решения
	this.filterFood = function(filter) {
		return food.filter(filter);
	};

	this.removeFood = function(item) {
		var idx = food.indexOf(item);
		if (idx != -1) food.splice(idx, 1);
	};
	*/

	var parentDisable = this.disable; // Вот тут то и есть само решение с переопределением метода. Сначала метод родителя записываем в переменную
	this.disable = function () {      // далее в родительский метод записываем новую функцию, в которой делаем проверку
		if (food.length > 0) {          // если есть еда, то пробрасываем ошибку
			throw new Error('Холодильник выключить нельзя, т.к. в нём есть еда: ' + food);
		}
	};
}


/*
// Здесь эти добавления не нужны нам для нашего решения
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
	title: "котлета",
	calories: 100
});
fridge.addFood({
	title: "сок",
	calories: 30
});
fridge.addFood({
	title: "зелень",
	calories: 10
});
fridge.addFood({
	title: "варенье",
	calories: 150
});



var dietItems = fridge.filterFood(function(item) {
	return item.calories < 50;
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log(fridge.getFood().length); // 4

dietItems.forEach(function(item) {
	console.log(item.title); // сок, зелень
	fridge.removeFood(item);
});

console.log(fridge.getFood().length); // 2
*/

var fridge = new Fridge(500);
fridge.enable();                 // включаем холодильник
fridge.addFood("кус-кус");       // добавляем еду
console.log(fridge.getFood());   // получаем еду
fridge.disable();                // ошибка, в холодильнике есть еда