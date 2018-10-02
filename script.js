/*
Домашнее задание. JS. Урок 16.
*/

/*
Задание 1
Для страницы:

<body>

	<div>Пользователи:</div>
	<ul>
		<li>Маша</li>
		<li>Вовочка</li>
	</ul>

<script src="script.js"></script>

</body>

Решение
1) Напишите код, который получит элемент HEAD.
	console.log(document.documentElement.firstElementChild);

2) Напишите код, который получит UL.
	console.log(document.body.children[1]);

3) Напишите код, который получит второй LI. Будет ли ваш код работать в IE8-, если комментарий переместить между элементами LI?
	console.log(document.body.children[1].children[1]);
	console.log(document.body.children[1].lastElementChild);
*/





/*
Задание 2
Придумайте самый короткий код для проверки, пуст ли элемент elem.
«Пустой» – значит нет дочерних узлов, даже текстовых.

Решение
var elem = document.body.childNodes;

for (var i = 0; i < elem.length; i++) {
	if (!elem) {
		console.log('Узел ' + elem + ' пуст ');
	} else {
		console.log(elem[i]);
	}
}
*/

