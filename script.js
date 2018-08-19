/*
Домашнее задание. JS. Урок 11.
*/


/*
+++Задание 1
Вывод чисел каждые 100 мс
Напишите функцию printNumbersInterval(), которая последовательно выводит в консоль числа от 1 до 20,
с интервалом между числами 100 мс.
То есть, весь вывод должен занимать 2000 мс, в течение которых каждые 100 мс в консоли появляется очередное число.
P.S. Функция должна использовать setInterval.
*/
/*
Решение
var x = 0;

var timerId = setInterval(function () {
	if (x <= 20) {
		++x;
	}
	console.log(x);
}, 100);


setTimeout(function () {
	clearInterval(timerId);
}, 2100);
P.S. Основная задача была решена, т.е. Вывод в консоль каждые 100мл нового числа из диапазона от 1 до 20 происходит.
Единственно что, сделано было не через ф-ию printNumbersInterval().
При тестировании, через шторм, выводит от 1 до 20, а через консоль хрома от 1 до 21
*/






/*
Задание 2
Вывод чисел каждые 100 мс, через setTimeout
Сделайте то же самое, что в задаче "Вывод чисел каждые 100 мс", но с использованием
рекурсивного setTimeout вместо setInterval.
*/








/*
Задание 3
Для подсветки setInterval или setTimeout?
важность: 5
Стоит задача: реализовать подсветку синтаксиса в длинном коде при помощи JavaScript, для онлайн-редактора кода. Это требует сложных вычислений, особенно загружает процессор генерация дополнительных элементов страницы, визуально осуществляющих подсветку.

Поэтому решаем обрабатывать не весь код сразу, что привело бы к зависанию скрипта, а разбить работу на части: подсвечивать по 20 строк раз в 10 мс.

Как мы знаем, есть два варианта реализации такой подсветки:

Через setInterval, с остановкой по окончании работы:

timer = setInterval(function() {
  if (есть еще что подсветить) highlight();
  else clearInterval(timer);
}, 10);
Через рекурсивный setTimeout:

setTimeout(function go() {
  highlight();
  if (есть еще что подсветить) setTimeout(go, 10);
}, 10);
Какой из них стоит использовать? Почему?






Задание 4
Что выведет setTimeout?
важность: 5
В коде ниже запланирован запуск setTimeout, а затем запущена тяжёлая функция hardWork, выполнение которой занимает более долгое время, чем интервал до срабатывания таймера.

Когда сработает setTimeout? Выберите нужный вариант:

До выполнения hardWork.
Во время выполнения hardWork.
Сразу же по окончании hardWork.
Через 100 мс после окончания hardWork.
Что выведет alert в коде ниже?

setTimeout(function() {
  alert( i );
}, 100);

var i;

function hardWork() {
  // время выполнения этого кода >100 мс, сам код неважен
  for (i = 0; i < 1e8; i++) hardWork[i % 2] = i;
}

hardWork();
решение





Задание 5
Что выведет после setInterval?
важность: 5
В коде ниже запускается setInterval каждые 10 мс, и через 50 мс запланирована его отмена.

После этого запущена тяжёлая функция f, выполнение которой (мы точно знаем) потребует более 100 мс.

Сработает ли setInterval, как и когда?

Варианты:

Да, несколько раз, в процессе выполнения f.
Да, несколько раз, сразу после выполнения f.
Да, один раз, сразу после выполнения f.
Нет, не сработает.
Может быть по-разному, как повезёт.
Что выведет alert в строке (*)?








Задание 6
var i;
var timer = setInterval(function() { // планируем setInterval каждые 10 мс
  i++;
}, 10);

setTimeout(function() { // через 50 мс - отмена setInterval
  clearInterval(timer);
  alert( i ); // (*)
}, 50);

// и запускаем тяжёлую функцию
function f() {
  // точное время выполнения не играет роли
  // здесь оно заведомо больше 100 мс
  for (i = 0; i < 1e8; i++) f[i % 2] = i;
}

f();






Задание 7
Кто быстрее?
важность: 5
Есть два бегуна:

var runner1 = new Runner();
var runner2 = new Runner();
У каждого есть метод step(), который делает шаг, увеличивая свойство steps.

Конкретный код метода step() не имеет значения, важно лишь что шаг делается не мгновенно, он требует небольшого времени.

Если запустить первого бегуна через setInterval, а второго – через вложенный setTimeout – какой сделает больше шагов за 5 секунд?

// первый?
setInterval(function() {
  runner1.step();
}, 15);

// или второй?
setTimeout(function go() {
  runner2.step();
  setTimeout(go, 15);
}, 15);

setTimeout(function() {
  alert( runner1.steps );
  alert( runner2.steps );
}, 5000);
решение





Задание 8
Функция-задержка
важность: 5
Напишите функцию delay(f, ms), которая возвращает обёртку вокруг f, задерживающую вызов на ms миллисекунд.

Например:

function f(x) {
  alert( x );
}

var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд
Упрощённо можно сказать, что delay возвращает "задержанный на ms" вариант f.

В примере выше у функции только один аргумент, но delay должна быть универсальной: передавать любое количество аргументов и контекст this.

Открыть песочницу с тестами для задачи.

решение






Задание 9
Вызов не чаще чем в N миллисекунд
важность: 5
Напишите функцию debounce(f, ms), которая возвращает обёртку, которая откладывает вызов f на ms миллисекунд.

«Лишние» вызовы перезаписывают предыдущие отложенные задания. Все аргументы и контекст – передаются.

Например:

function f() { ... }

let f = debounce(f, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)

setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)
Упрощённо можно сказать, что debounce возвращает вариант f, срабатывающий не чаще чем раз в ms миллисекунд.

Открыть песочницу с тестами для задачи.

решение






Задание 10
Тормозилка
важность: 5
Напишите функцию throttle(f, ms) – «тормозилку», которая возвращает обёртку, передающую вызов f не чаще, чем раз в ms миллисекунд.

У этой функции должно быть важное существенное отличие от debounce: если игнорируемый вызов оказался последним, т.е. после него до окончания задержки ничего нет – то он выполнится.

Чтобы лучше понять, откуда взялось это требование, и как throttle должна работать – разберём реальное применение, на которое и ориентирована эта задача.

Например, нужно обрабатывать передвижения мыши.

В JavaScript это делается функцией, которая будет запускаться при каждом микро-передвижении мыши и получать координаты курсора. По мере того, как мышь двигается, эта функция может запускаться очень часто, может быть 100 раз в секунду (каждые 10 мс).

Функция обработки передвижения должна обновлять некую информацию на странице.

При этом обновление – слишком «тяжёлый» процесс, чтобы делать его при каждом микро-передвижении. Имеет смысл делать его раз в 100 мс, не чаще.

Пусть функция, которая осуществляет это обновление по передвижению, называется onmousemove.

Вызов throttle(onmousemove, 100), по сути, предназначен для того, чтобы «притормаживать» обработку onmousemove. Технически, он должен возвращать обёртку, которая передаёт все вызовы onmousemove, но не чаще чем раз в 100 мс.

При этом промежуточные движения можно игнорировать, но мышь в конце концов где-то остановится. И это последнее, итоговое положение мыши обязательно нужно обработать!

Визуально это даст следующую картину обработки перемещений мыши:

Первое обновление произойдёт сразу (это важно, посетитель тут же видит реакцию на своё действие).
Дальше может быть много вызовов (микро-передвижений) с разными координатами, но пока не пройдёт 100 мс – ничего не будет.
По истечении 100 мс – опять обновление, с последними координатами. Промежуточные микро-передвижения игнорированы.
В конце концов мышь где-то остановится, обновление по окончании очередной паузы 100 мс сработает с последними координатами.
Ещё раз заметим – задача из реальной жизни, и в ней принципиально важно, что последнее передвижение обрабатывается. Пользователь должен увидеть, где остановил мышь.

Пример использования:

var f = function(a) {
  console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется
Открыть песочницу с тестами для задачи.

решение
*/