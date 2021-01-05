// Задача 17.2

// Создайте объект с ключами a, b и c
// и значениями 1, 2 и 3. Найдите сумму его элементов.

// let obj = {a: 1, b: 2, c: 3};
// let result = 0
// for (let key in obj) {
// 	result += obj[key];
// }

// console.log(result)

// Задача 17.7

// Создайте объект user с ключами name (имя), surname (фамилия), patronymic (отчество) и какими-то произвольными значениями.
// Выведите на экран фамилию, имя и отчество через пробел.

// let user = {name: 'Николай', surname : 'Никалов', patronymic : 'Николаевич'};
// console.log(user.name + ' ' + user.surname + ' ' + user.patronymic)

// Задача 51.1

// Переберите циклом числа от 10 до 1000 и выведите на экран те числа,
// сумма двух первых цифр которых равна 5.

// for (let i = 10; i <= 1000; i++) {
// 	let str = String(i); // преобразуем число в строку

// 	if (+str[0] + +str[1] === 5) {
// 		console.log(i);
// 	}
// }

// Задача 51.2

// Переберите циклом числа от 1 до 30 и сложите их как строки.

// let result = '';

// for (let i = 1; i <= 30; i++) {
// 	result += i;
// }

// console.log(result);

// Задача 52.2

// С помощью двух вложенных циклов выведите на экран
//  следующую строку:
// 11 12 13 21 22 23 31 32 33

// for (let i = 11; i <= 33; i += 10) {
//     for (let j = 0; j < 3; j++) {
//     let num = i + j;
//     document.write(num + " ");
//     }
// }

// Задача 58.2

// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам,
// у которых она меньше или равна 400.

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700
// 	};

// 	for (let key in obj) {
// 		if(obj[key] <= 400) {
// 	obj[key] += (obj[key] / 100) * 10;
// 	}}

// 	console.log(obj);

// Задача 58.3

// С помощью этих массивов создайте новый объект
//  сделав его ключами элементы первого массива, а значениями - элементы второго.

// let keys = [1, 2, 3, 4, 5];
// let values = [6, 7, 8, 9, 10];
// let obj = {};

// for (let i = 0; i <= keys.length - 1; i++) {
// 	let key = keys[i];
// 	let value = values[i];

// 	obj[key] = value;
// }

// console.log(obj);

// Задача 58.4

// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let result = 0
// let sumKeys = 0
// let sumValues = 0

// for (let key in obj) {
// 	sumKeys += +key
// 	sumValues += obj[key]
// 	result = sumKeys/sumValues
// 	}

// console.log(result)

// Задача 58.5

// Запишите ключи этого объекта в один массив, а значения - в другой.

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let keys = []
// let values = []
// for (let key in obj) {
//     keys.push(key)
//     values.push(obj[key])
// }

// console.log(keys)
// console.log(values)

// Задача 58.6

// Запишите в новый массив элементы, значение которых начинается с
// цифры 1 или цифры 2.

// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };

// let arr = []

// for (let key in obj) {}

// Задача 59.1

// Дан следующий массив:

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 и 2 в этом массиве.

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;

// for (let elem of arr) {
// 	if (elem == 3 || elem == 2) {
// 		counter++;
// 	}
// }

// console.log(counter);

// Задача 60.1

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i + 1]);
// }

// Задача 60.2

// Модифицируйте предыдущую задачу так, чтобы в
//  каждой итерации цикла выводилась сумма текущего и следующего элемента массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i] + arr[i + 1]);
// }

// Задача 60.3

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 2; i < arr.length; i++) {
//   console.log(arr[i - 2], arr[i - 1]);
// }

// Задача 60.4

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 2; i < arr.length; i++) {
//   console.log(arr[i - 2] + arr[i - 1] + arr[i]);
// }

// Задача 60.5

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.

// let arr = [1, 2, 3, 4, 5];

// for (let i = 1; i < arr.length - 1; i++) {
//   console.log(arr[i - 1] + arr[i] + arr[i + 1]);
// }

// Задача 62.2

// Выведите на экран следующую пирамидку:

// 1
// 333
// 55555
// 7777777
// 999999999

// for (let i = 1; i <= 9; i++) {
//     let str = ''; // каждый раз зачищаем строку
//     if (i % 2 == 1) {
// 	for (let j = 1; j <= i; j++) {
// 		str += i;
//     }
//     document.write(str + '<br>');
// }
// }

// Задача 62.3

// Выведите на экран следующую пирамидку:

// xxxxxxxxxx
// xxxxxxxx
// xxxxxx
// xxxx
// xx

// for (let i = 10; i >= 1; i--) {
// 	let str = '';
// 	if (i % 2 == 0) {
// 	for (let j = 0; j < i; j++) {
// 		str += 'x';
// 	}

// 	document.write(str + '<br>');
// }
// }

// Задача 62.4

// Выведите на экран следующую пирамидку:

// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1

// for (let i = 9; i >= 1; i--) {
//     let str = ''; // каждый раз зачищаем строку
// 	for (let j = 1; j <= i; j++) {
// 		str += i;
//     }
//     document.write(str + '<br>');
// }

// Задача 63.1

// С помощью цикла сформируйте следующий массив:

// ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

// let arr = [];
// let str = '';

// for (let i = 0; i < 5; i++) {
// 	str += 'xx';
// 	arr.push(str);
// }

// console.log(arr);

// Задача 63.2

// С помощью цикла сформируйте следующий массив:

// ['11111', '22222', '33333', '44444', '55555']

// let arr = [];

// for (let i = 1; i < 6; i++) {
// 	let str = '';

// 	for (let j = 0; j < 4; j++) {
// 		str += i;
// 	}

// 	arr.push(str);
// }

// console.log(arr);

// Задача 64.10

// Дан массив с числами. Найдите среднее арифметическое его
// элементов (сумма элементов, делить на количество).
// 1111111111111111111111

// let arr = [1,2,3,4,5]

// let result = 0
// let averege = 0;
// for(let i = 0; i < arr.length; i++) {
// 	if (i < arr.length) {
// 		result +=(arr[i])

// 	}
// 	averege = result / arr.length;
// }

// console.log(averege);

// Задача 64.11

// Напишите скрипт, который будет находить факториал числа.
// Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

// let fact = 0;
// let res = 1;

// if(fact >= 1) {

// for(let i = 1; i <= fact; i ++) {
// res *= i;
// }
// } else if (fact == 0) {
// res = 1;
// } else {
// res = 'Введите положительное число';
// }
// console.log(res);

// Задача 72.1

// Дан следующий массив работников:
// Выведите на экран данные каждого работника в формате имя - зарплата.

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// for (let employe of employees) {
//   document.write(employe.name + "-" + employe.salary + "<br>");
// }

// Задача 72.2

// Выведите на экран сумму зарплат всех работников

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//   },
//   {
//     name: "name2",
//     salary: 400,
//   },
//   {
//     name: "name3",
//     salary: 500,
//   },
// ];

// let sum = 0;

// for (let user of employees) {
//   sum += user.salary;
// }

// document.write(sum);

// Задача 72.3
// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     age: 28,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     age: 29,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     age: 30,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     age: 31,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     age: 32,
//   },
// ];

// let sum = 0;

// for (let user of employees) {
//   if (user.age >= 30) {
//     sum += user.salary;
//   }
// }

// document.write(sum);

// Задача 72.4

// Дан следующий массив работников, в котором поле dismissed хранит в себе информацию о том, уволен работник или нет (true - уволен):
// Выведите на экран имена и зарплаты неуволенных работников.

// let employees = [
//   {
//     name: "name1",
//     salary: 300,
//     dismissed: false,
//   },
//   {
//     name: "name2",
//     salary: 400,
//     dismissed: true,
//   },
//   {
//     name: "name3",
//     salary: 500,
//     dismissed: false,
//   },
//   {
//     name: "name4",
//     salary: 600,
//     dismissed: true,
//   },
//   {
//     name: "name5",
//     salary: 700,
//     dismissed: false,
//   },
// ];

// for (let employe of employees) {
//   if (employe.dismissed !== true) {
//     document.write(employe.name + "-" + employe.salary + "<br>");
//   }
// }

// Задача 72.5

// С помощью вложенных циклов выведите на экран все строки с данными.

// let data = {
//   1: ["data11", "data12", "data13"],
//   2: ["data21", "data22", "data23"],
//   3: ["data31", "data32", "data33", "data34", "data35"],
//   4: ["data41", "data42"],
// };

// for (let key in data) {
//   for (let elem of data[key]) {
//     console.log(elem);
//   }
// }

// Задача 72.6

// Количество объектов в массиве и количество элементов в объекте может быть произвольным.
// С помощью вложенных циклов выведите на экран все строки с данными.

// let data = [
//   {
//     1: "data11",
//     2: "data12",
//     3: "data13",
//     4: "data14",
//   },
//   {
//     1: "data21",
//     2: "data22",
//     3: "data33",
//   },
//   {
//     1: "data31",
//     2: "data32",
//   },
// ];

// for (let elem of data) {
//   for (let key in elem) {
//     document.write(elem[key] + "<br>");
//   }
// }

// Задача 72.7

// Дана следующая структура с данными:

// let data = [
//   {
//     1: ["data111", "data112", "data113"],
//     2: ["data121", "data122", "data123"],
//   },
//   {
//     1: ["data211", "data212", "data213"],
//     2: ["data221", "data222", "data223", "data224"],
//     3: ["data231", "data232", "data233", "data234", "data235"],
//   },
//   {
//     1: ["data411", "data412", "data413"],
//     2: ["data421"],
//   },
// ];

// for (let elem of data) {
//   for (let key in elem) {
//     for (let elem2 of elem[key]) {
//       document.write(elem2 + "<br>");
//     }
//   }
// }

// let students = {
//   group1: ["student11", "student12", "student13"],
//   group2: ["student21", "student22", "student23"],
//   group3: ["student31", "student32"],
// };
// students.group4 = [];
// students.group4.push("student41");

// Задача 74.2

// Добавьте нового студента в подгруппу 'subgroup11'.

// let students = {
//   group1: {
//     subgroup11: ["student111", "student112", "student113"],
//     subgroup12: ["student121", "student122", "student123"],
//   },
//   group2: {
//     subgroup21: ["student211", "student212", "student213"],
//     subgroup22: ["student221", "student222", "student223"],
//   },
//   group3: {
//     subgroup31: ["student311", "student312", "student313"],
//     subgroup32: ["student321", "student322", "student323"],
//   },
// };

// students.group1.subgroup11.push("student14");
// console.log(students);

// Задача 74.4
// Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.

// let students = {
//   group1: {
//     subgroup11: ["student111", "student112", "student113"],
//     subgroup12: ["student121", "student122", "student123"],
//   },
//   group2: {
//     subgroup21: ["student211", "student212", "student213"],
//     subgroup22: ["student221", "student222", "student223"],
//   },
//   group3: {
//     subgroup31: ["student311", "student312", "student313"],
//     subgroup32: ["student321", "student322", "student323"],
//   },
// };

// students.group4 = { subgroup41: [] };

// students.group4.subgroup41.push("student411");
// students.group4.subgroup41.push("student412");
// console.log(students);

// Задача 74.5

// Дана вот такая структура для хранения списка дел за определенные даты:
// Сделайте функцию addAffair, которая будет добавлять новое дело в заданную дату.
//  Пусть функция первым параметром принимает дату, а вторым - дело.

// let affairs = {
//   "2019-12-28": ["дело11", "дело12", "дело13"],
//   "2019-12-29": ["дело21", "дело22", "дело23"],
//   "2019-12-30": ["дело31", "дело32", "дело33"],
// };

// addAffair("2019-12-30", "дело14");
// addAffair("2019-12-31", "дело41");

// function addAffair(date, affair) {
//   if (affairs[date] === undefined) {
//     affairs[date] = [];
//   }

//   affairs[date].push(affair);
// }

// console.log(affairs);

// Задача 74.6

// Дана вот такая структура для хранения студентов:
// Сделайте функцию addStudent, которая будет добавлять нового студента.
//  Пусть функция первым параметром принимает группу, а вторым - подгруппу, а третьим - имя студента.

// let students = {
//   group1: {
//     subgroup11: ["student111", "student112", "student113"],
//     subgroup12: ["student121", "student122", "student123"],
//   },
//   group2: {
//     subgroup21: ["student211", "student212", "student213"],
//     subgroup22: ["student221", "student222", "student223"],
//   },
//   group3: {
//     subgroup31: ["student311", "student312", "student313"],
//     subgroup32: ["student321", "student322", "student323"],
//   },
// };

// function addStudent(group, subgroup, name) {
//   if (students[group] === undefined) {
//     students[group] = [];
//   }
//   if (students[group][subgroup] === undefined) {
//     students[group][subgroup] = [];
//   }

//   students[group][subgroup].push(name);
// }

// addStudent("group1", "subgroup12", "student124");
// addStudent("group4", "subgroup41", "student411");

// console.log(students);

// Задача 74.7

// Дана вот такая структура для хранения списка дел за года, месяцы и дни:
// Сделайте функцию addAffair, которая будет добавлять новое дело в заданную дату.
// Пусть функция первым параметром принимает год, вторым - месяц, третьим - день, а четвертым - дело.

// let affairs = {
//   2018: {
//     11: {
//       29: ["дело111", "дело112", "дело113"],
//       30: ["дело121", "дело122", "дело123"],
//     },
//     12: {
//       30: ["дело211", "дело212", "дело213"],
//       31: ["дело221", "дело222", "дело223"],
//     },
//   },
//   2019: {
//     12: {
//       29: ["дело311", "дело312", "дело313"],
//       30: ["дело321", "дело322", "дело323"],
//       31: ["дело331", "дело332", "дело333"],
//     },
//   },
// };

// function addAffair(year, month, day, affair) {
//   if (affairs[year] === undefined) {
//     affairs[year] = {};
//   }
//   if (affairs[year][month] === undefined) {
//     affairs[year][month] = {};
//   }

//   if (affairs[year][month][day] === undefined) {
//     affairs[year][month][day] = [];
//   }

//   affairs[year][month][day].push(affair);
// }

// addAffair(2018, 11, 29, "дело124");
// addAffair(2017, 11, 30, "дело411");

// console.log(affairs);

// Задача 75.1

// Запишите все элементы этого объекта в какой-нибудь массив,
// вот так:
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let data = {
//   2018: {
//     11: {
//       29: [1, 2, 3],
//       30: [4, 5],
//     },
//     12: {
//       30: [6, 7],
//       31: [8, 9],
//     },
//   },
//   2019: {
//     12: {
//       29: [10, 11],
//       30: [12, 13],
//       31: [14, 15],
//     },
//   },
// };

// let arr = [];
// for (let user in data) {
//   for (let user1 in data[user]) {
//     for (let user2 in data[user][user1]) {
//       for (let user3 of data[user][user1][user2]) {
//         arr.push(user3);
//       }
//     }
//   }
// }
// console.log(arr);

// Задача 75.3

// Выведите на экран тех юзеров, значение ключа active для которых равно true.

// let users = [
//   {
//     name: "name1",
//     age: 31,
//     active: true,
//   },
//   {
//     name: "name2",
//     age: 32,
//     active: false,
//   },
//   {
//     name: "name3",
//     age: 33,
//     active: true,
//   },
//   {
//     name: "name4",
//     age: 34,
//     active: false,
//   },
//   {
//     name: "name5",
//     age: 35,
//     active: true,
//   },
// ];

// let arr = [];
// for (let user of users) {
//   if (user.active === true) {
//     arr.push(user);
//   }
// }

// console.log(arr);

// Задача 75.4
// Подсчитайте количество стран.

// let data = [
//   {
//     country: "Россия",
//     city: "Москва",
//   },
//   {
//     country: "Беларусь",
//     city: "Минск",
//   },
//   {
//     country: "Россия",
//     city: "Питер",
//   },
//   {
//     country: "Россия",
//     city: "Владивосток",
//   },
//   {
//     country: "Украина",
//     city: "Львов",
//   },
//   {
//     country: "Беларусь",
//     city: "Могилев",
//   },
//   {
//     country: "Украина",
//     city: "Киев",
//   },
// ];

// arr = [];
// obj = {};
// arr1 = [];
// for (let elem of data) {
//   arr.push(elem["country"]);
// }
// for (let elem1 of arr) {
//   if (obj[elem1] === undefined) {
//     obj[elem1]++;
//   }
// }
// for (let key in obj) {
//   arr1.push(key);
// }

// console.log(`Всего стран: ${arr1.length}`);

// Задача 75.5
// Выведите на экран все дела за 2018 год.
// Выведите на экран все дела за 12 месяц 2018 года.

// let affairs = {
//   "2019-12-31": ["массив дел"],
//   "2018-11-29": ["массив дел"],
//   "2018-11-30": ["массив дел"],
//   "2018-12-27": ["массив дел"],
//   "2019-12-29": ["массив дел"],
//   "2019-12-30": ["массив дел"],
//   "2018-12-30": ["массив дел"],
//   "2018-12-31": ["массив дел"],
// };

// for (let date in affairs) {
//   if (
//     date[0] == "2" &&
//     date[1] == "0" &&
//     date[2] == "1" &&
//     date[3] == "8" &&
//     date[5] == "1" &&
//     date[6] == "2"
//   ) {
//     console.log(date);
//   }
// }

// Задача 75.6

// Сделайте две функции, которые будут менять значение поля active: первая функция пусть меняет на true, а вторая - на false.
// Пусть наши функции параметрами принимают данный массив и номер юзера, над которым следует произвести изменения.
// Пусть функции возвращают измененный массив.

// let arr = [
//   {
//     name: "name1",
//     active: true,
//   },
//   {
//     name: "name2",
//     active: false,
//   },
//   {
//     name: "name3",
//     active: true,
//   },
//   {
//     name: "name4",
//     active: false,
//   },
//   {
//     name: "name5",
//     active: true,
//   },
// ];

// getTrue(arr, 1);
// function getTrue(arr, numUser) {
//   {
//     if (arr[numUser]["active"] === false) {
//       arr[numUser]["active"] = true;
//     }
//   }
//   return arr;
// }

// getFalse(arr, 0);
// function getFalse(arr, numUser) {
//   {
//     if (arr[numUser]["active"] === true) {
//       arr[numUser]["active"] = false;
//     }
//   }
//   return arr;
// }

// console.log(arr);

// Задача 76.1
// Вам известно, что вам нужно будет получать массивы городов определенных стран. К примеру, нужно будет
// получить все города России, либо все города Беларуси.
// Также необходимо будет находить количество городов в определенной стране.

// let data = {
//   Россия: ["Москва", "Питер", "Владивосток"],
//   Беларусь: ["Минск", "Могилев"],
//   Украина: ["Львов", "Киев"],
// };
// let city = [];
// function map(data, country) {
//   for (let key in data) {
//     if (country === key) {
//       city.push(data[key]);
//     }
//   }
// }
// map(data, "Беларусь");
// console.log(city);

// Задача 76.2
// Пусть вам нужно будет получать данные за определенный день, за определенный месяц, и за определенный год.
// Удобна ли текущая структура хранения данных для этого?
// Если да, оставьте все как есть, если нет, переделайте структуру на более удобную. Получите затем все данные за 2020 год.

// let data = [
//   {
//     year: 2019,
//     month: 11,
//     day: 20,
//     data: ["массив с данными"],
//   },
//   {
//     year: 2019,
//     month: 11,
//     day: 21,
//     data: ["массив с данными"],
//   },
//   {
//     year: 2019,
//     month: 12,
//     day: 25,
//     data: ["массив с данными"],
//   },
//   {
//     year: 2019,
//     month: 12,
//     day: 26,
//     data: ["массив с данными"],
//   },
//   {
//     year: 2020,
//     month: 10,
//     day: 29,
//     data: ["массив с данными"],
//   },
//   {
//     year: 2020,
//     month: 10,
//     day: 30,
//     data: ["массив с данными"],
//   },
//   {
//     year: 2020,
//     month: 11,
//     day: 19,
//     data: ["массив с данными"],
//   },
// ];

// let arr = [];
// function map(data, year) {
//   for (let key of data) {
//     if (year === key.year) {
//       arr.push(key.data);
//     }
//   }
// }
// map(data, 2020);
// console.log(arr);

// Задача 76.3

// Пусть вам нужно будет получать список событий за определенную дату. Удобна ли текущая структура хранения данных для этого?
// Если да, оставьте все как есть, если нет, переделайте структуру на более удобную. Получите затем список событий за '2019-12-30'.

// let affairs = {
//   2019: {
//     12: {
//       29: ["массив дел 29"],
//       31: ["массив дел 31"],
//       30: ["массив дел 30"],
//     },
//   },
// };
// let arr = [];
// for (let elem in affairs) {
//   for (let elem2 in affairs[elem]) {
//     for (let elem3 in affairs[elem][elem2]) {
//       for (let elem4 of affairs[elem][elem2][elem3]) {
//         if (elem == 2019 && elem2 == 12 && elem3 == 30) {
//           arr.push(elem4);
//         }
//       }
//     }
//   }
// }
// console.log(arr);

// Задача 76.4

// Пусть перед вами стоит задача хранения гороскопов для знаков зодиака. Гороскопы хранятся на несколько месяцев вперед.
// Необходимо будет получать гороскопы всех знаков зодиака за определенный день,
// а также гороскоп конкретного знака зодиака за определенный день.
// Продумайте удобную структуру хранения данных. Укажите ее преимущества и недостатки.
// Поясните, для решения каких задач придуманная вами структура будет неудобна.

// let gor = {
//   jan: {
//     "Дева - гороскоп: нормально": [1, 2, 3, 15],
//     "Весы - гороскоп: все наперекосяк ": [16, 17, 30, 31],
//   },
//   fev: {
//     "Телец - гороскоп:неплохо": [1, 2, 3, 15],
//     "Рак - гороскоп: все будет прикольно": [16, 17, 27, 28],
//   },
//   mar: {
//     "Овен - гороскоп: вас ждет светлое будущее": [1, 2, 3, 15],
//     "Стрелец - гороскоп: все очень плохо": [16, 17, 30, 31],
//   },
// };
// let data = 15;
// for (let key in gor) {
//   for (let key1 in gor[key]) {
//     if (gor[key][key1].includes(data)) {
//       console.log(key1);
//     }
//   }
// }

// let data = [
//   {
//     country: "Россия",
//     city: "Москва",
//   },
//   {
//     country: "Беларусь",
//     city: "Минск",
//   },
//   {
//     country: "Россия",
//     city: "Питер",
//   },
//   {
//     country: "Россия",
//     city: "Владивосток",
//   },
//   {
//     country: "Украина",
//     city: "Львов",
//   },
//   {
//     country: "Беларусь",
//     city: "Могилев",
//   },
//   {
//     country: "Украина",
//     city: "Киев",
//   },
// ];

// let res = {};
// for (let element of data) {
//   if (res[element.country] === undefined) {
//     res[element.country] = [element.city];
//   } else {
//     res[element.country].push(element.city);
//   }
// }

// console.log(res);

// Задача 78.3

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10.
// Найдите квадратный корень из суммы кубов его элементов.
//  Для решения воспользуйтесь циклом for.

// let result = 0

// let arr = [4, 2, 5, 19, 13, 0, 10.]
// for(let i = 0; i < arr.length; i++) {
// 	result +=arr[i]
// }
// console.log(Math.sqrt(result))

// Задача 78.5

// Найдите квадратный корень из 587. Округлите результат в
// большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// let num = 587

// let obj = {};

// obj['ceil'] = Math.ceil(Math.sqrt(num));
// obj['floor'] = Math.floor(Math.sqrt(num));

// console.log(obj)

// Задача 82.2

// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

// let result = 0

// function func(result) {
// 	for(let i = 0; i <= 100; i++) {
// 		result += i
// 	}
// 	return alert(result)
// }

// func(result)

// let num = 100
// let result

// function func (num,result) {
// 	for(let i = 0; i < num;i++)	{
// 		if(num >= 10) {
// 		 result = num/2
// 		}
// 	} return result
// }

// console.log(func(result))

// Задача 84.10

// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций,
//  которое потребовалось для достижения результата.

// function func(num) {

// 	let i = 0;

// 	if (num >= 20) {
// 	while (true) { // бесконечный цикл
// 	num /= 2;
// 	if (num < 10) {
// 	return i; // цикл крутится пока не выйдет тут
// 	}

// 	i++;
// 	}
// 	}
// 	}

// 	alert( func(100) );

// Задача 85.1

// Напишите функцию, которая будет находить сумму квадратов элементов массива.

// let arr = [2,3,4]
// let result = 0
// function squareValues (arr) {
//         for (let i = 0; i <= arr.length - 1; i++) {
//         result += arr[i] ** 2
//         }
//       return result
// }

// console.log(squareValues(arr))

// Задача 85.2

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром будет
// принимать целое число и возвращать сумму его цифр.

// let digit = 123
// let sum = 0

// function getDigitsSum(digit) {
//     digit = String(digit)
//     for (let i = 0; i <= digit.length - 1; i++) {
//         sum += Number(digit[i])
//     }
//     return sum
// }

// console.log(getDigitsSum(digit))

// Задача 85.3

// Реализуйте функцию getDivisors, которая параметром будет принимать число и
// возвращать массив его делителей, то есть чисел, на которое делится наше число.
// К примеру, если мы передадим число 24 -
// мы должны получить массив [1, 2, 3, 4, 6, 8, 12, 24].

// let digit = 24;
// let arr = [];

// function getDivisors(digit) {
//   for (let i = 0; i <= digit; i++) {
//     if (digit % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// console.log(getDivisors(digit));

// Задача 85.4

// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

// let str = "Hello, I am hungry";
// function reverseStr(str) {
//   str = str.split("").reverse().join("");
//   return str;
// }
// console.log(reverseStr(str));

// Задача 85.5

// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.

// let value = "a";
// let arr = ["a", "v", "b", "n", "a"];
// function delElem(value, arr) {
//   let result = [];
//   for (let elem of arr) {
//     if (elem !== value) {
//       result.push(elem);
//     }
//   }
//   return result;
// }

// console.log(delElem(value, arr));

// Задача 85.6

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// function alt(maxNum) {
//   let arr = [];
//   for (let i = 1; i <= maxNum; i++) {
//     arr.push(i);
//   }
//   return arr;
// }

// console.log(alt(5));

// Задача 85.7

// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел.

// function alt(a, b) {
//   let arr = [];
//   for (let i = a; i <= b; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(alt(-1, 3));

// Задача 86.1

// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все
// элементы в этом массиве являются четными числами.

// function func(arr) {
//     for(let elem of arr) {
// 		if (elem % 2 === 1) {
//             return 'НеЧётная';
// 		}
// 	}

// 	return 'Чётная';
// }

// console.log(func([3, 3]))

// Задача 86.2

// Сделайте функцию, которая параметром будет принимать число и проверять,
// что все цифры это числа являются нечетными.

// function func(num) {
//     let arr = String(num).split('');
//     for(let elem of arr){
//     if(elem % 2 !== 0){
//     return true;}}
//     return false;}
//     console.log(func(333))

// Задача 86.3

// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли
// в этом массиве два одинаковых элемента подряд.

// function func(arr) {
//     for (let i = 1,j = 1; i < arr.length; i++,j++) {
//     if((arr[i] === j && arr[i] === j)){
//     return true}}
//     return false;}
//     console.log(func([1,2,2,3,4,5,6]))

// Задача 88.1

//  функция, проверяющая числа на простоту:

// let arr = [];
//     for(let i = 1; i <=100;i++) {
//         if(isPrime(i)) {
//         arr.push(i);
//         }
//     }
// console.log(arr);

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// Задача 88.2

// Дана функция getDigitsSum, которая параметром принимает
// целое число и возвращает сумму его цифр:

// let arr = [];
//     for(let i = 1; i <=2030;i++) {
//         if(getDigitsSum(i) === 13) {
//         arr.push(i);
//         }
//     }
// console.log(arr);

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');

// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}

// 	return sum;
// }

// let nums = [123, 456, 789];

// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }

// console.log(result); // выведет [321, 654, 987]

// Задача 88.3 Reverse

// let nums = [123, 456, 789];
// let result = [];
// for (let elem of nums) {
//     if(Digitsrevers(elem));}
// console.log(result)
// function Digitsrevers(elem) {
//     let arr = result.push(String(elem).split('').reverse().join(''));
// return arr;
// }

// Задача 88.4(Сделать код читабельным)

// function checkDigitsSum(num1, num2) {
//     let digits1 = String(num1).split('');
//     let digits2 = String(num2).split('');
//     let digitsSum1 = 0;
//     let digitsSum2 = 0;
//     for (let elem of digits1) {
//     for (let elem1 of digits2){
//     digitsSum1 += Number(elem);
//     digitsSum2 += Number(elem1);}}
//     return digitsSum1 === digitsSum2;}
//     console.log(checkDigitsSum(234,531));

// Задача 88.5

// Дан массив с числами. Необходимо перебрать этот массив с
// числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число).

// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}

// 	return result;
// }

// Задача 89.1
// Используя комбинацию приведенных функций найдите сумму цифр числа 12345.

// let num = 12345

// function getDigits(num) {
// 	return String(num).split('');
// }

// function getSum(num) {
// 	let sum = 0;

// 	for (let elem of num) {
// 		sum += Number(elem);
// 	}

// 	return sum;
// }

// console.log(getSum(getDigits(num)))

// Задача 89.2

// Дано число. Нужно найти его делители (без 1 и самого числа),
// а затем найти среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран.

// Нахождение среднего арифметического:

// function getAvg(result) {
// 	let sum = 0;

// 	for (let elem of result) {
// 		sum += elem;
// 	}

// 	return sum / result.length;
// }

// // Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];

// 	for (let i = 2; i < num; i++) {
// 		if (num % i === 0) {
// 			result.push(i);
// 		}
//     }
//     return result;
// }

// console.log(getAvg(getDivisors(100)))

// Задача 90.1 запишем в новый массив только те элементы,
// сумма цифр в которых от 1 до 9.
// let arr = [12, 19, 28, 13, 14, 111];
// let result = [];
// //3диапазон
// function inRange(num) {
// 	let sum = getSum(getDigits(num));
// 	return sum >= 1 && sum <= 9;
// }
// //2сумма цифр
// function getSum(arr) {
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}

// 	return sum;
// }

// //1разбивание числа
// function getDigits(num) {
// 	return String(num).split('');
// }
// //4добавление в новый массив
// for (let elem of arr) {
// 	if (inRange(elem)) {
// 		result.push(elem);
// 	}
// }

// console.log(result);

// Задача 91.1

// Реализуйте функцию getOwnDivisors. Потестируйте ее работу

// function getOwnDivisors(num) {
//   let divisors = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       divisors.push(i);
//     }
//   }
//   return divisors;
// }

// console.log(getOwnDivisors(220));

// Задача 91.2

// Реализуйте функцию getSum. Потестируйте ее работу.

// function getSum(divisors) {
//   let sumDivisors = 0;
//   for (let i = 0; i < divisors.length; i++) {
//     sumDivisors += divisors[i];
//   }
//   return sumDivisors;
// }

// function getSum(divisors) {
//   let sum = 0;
//   for (let elem of divisors) {
//     sum += Number(elem);
//   }
//   return sum;
// }

// console.log(getSum(getOwnDivisors(220)));

// Задача 91.3

// Проверьте работу функции isFreindly.

// function isFreindly(num1, num2) {

//     for (let i = 1; i < num; i++) {
//   let sum1 = getSum(getOwnDivisors(num1));
//   let sum2 = getSum(getOwnDivisors(num2));

//   if (sum1 == num2 && sum2 == num1) {
//     return true;
//   } else {
//     return false;
//   }}
// }

// console.log(isFreindly(100, 111));

// Задача 91.4

// Сделайте функцию getFreindly, которая будет находить пары дружественных чисел в заданном промежутке и возвращать
// их в виде двухмерного массива вида [ [220, 284], [1184, 1210], [2620, 2924] ]. С помощью созданной функции найдите
// все пары дружественных чисел на промежутке от 1 до 9000.

// function getOwnDivisors(num) {
//   let arr = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// function getSum(num) {
//   let sum = 0;
//   for (let elem of num) {
//     sum += elem;
//   }
//   return sum;
// }
// function getFreindly(a, b) {
//   let arr = [];

//   for (; a < b; a++) {
//     let sum = getSum(getOwnDivisors(a));
//     let compare = getSum(getOwnDivisors(sum));
//     if (a === compare && a !== sum) {
//       let tempArr = [];
//       tempArr.push(a, sum);
//       arr.push(tempArr);
//     }
//   }
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i][0] === arr[i + 1].reverse()[0]) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// console.log(getFreindly(1, 9000));

// Задача 91.5

// Совершенное число - целое число, равное сумме всех своих собственных делителей (то есть всех положительных делителей,
// отличных от самого числа). Сделайте функцию getPerfect, которая будет находить совершенные числа в заданном диапазоне.
// Проверьте работу функции в промежутке от 1 до 1000.

// function getPerfect(a, b) {
//   let arr = [];
//   for (; a < b; a++) {
//     if (getSum(a) === a) {
//       arr.push(a);
//     }
//   }
//   return arr;
// }

// function getSum(num) {
//   let sum = 0;
//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(getPerfect(1, 10000));

// Задача 91.6

// Сделайте функцию getSimpleDivisors, которая будет принимать параметром целое число и находить все делители
// этого числа, являющиеся простыми числами.

// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }

//     return true;
//   }

//   // делители числа

//   function getDivisors(num) {
//     let result = [];

//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         result.push(i);
//       }
//     }

//     return result;
//   }

//   // сама функция
//   function getSimpleDivisors(num) {
//     let result = [];

//     for (let elem of getDivisors(num)) {
//       if (isPrime(elem)) {
//         result.push(elem);
//       }
//     }

//     return result;
//   }

//   console.log(getSimpleDivisors(1003));

// function getInt(arr1, arr2) {
//   let result = [];

//   for (let elem of arr1) {
//     if (inArray(elem, arr2)) {
//       result.push(elem);
//     }
//   }

//   return result;
// }

// function inArray(elem, arr) {
//   return arr.indexOf(elem) !== -1;
// }
// console.log(getInt([1, 2, 3], [2, 3, 4, 5]));

// function getDiff(arr1, arr2) {
//   let diff1 = getFirstDiff(arr1, arr2);
//   let diff2 = getFirstDiff(arr2, arr1);

//   return [].concat(diff1, diff2);
// }

// function getFirstDiff(arr1, arr2) {
//   let result = [];

//   for (let elem of arr1) {
//     if (!inArray(elem, arr2)) {
//       result.push(elem);
//     }
//   }

//   return result;
// }

// function inArray(elem, arr) {
//   return arr.indexOf(elem) !== -1;
// }
// console.log(getDiff([1, 2, 3], [2, 3, 4, 5])); // выведет [1, 4, 5]

// Задача 94.1

// Реализуйте функцию getGreatestCommonDivisor, которая параметрами будет принимать два числа и возвращать НОД этих двух чисел.
// При решении задачи старайтесь использовать вспомогательные функции, в том числе полученные нами ранее в теоретической части.
// Обязательно тестируйте каждую вспомогательную функцию перед использованием.

let num1 = 12;
let num2 = 18;

function getGreatestCommonDivisor(num1, num2) {}

function getInt(arr1, arr2) {
  let result = [];

  for (let elem of arr1) {
    if (inArray(elem, arr2)) {
      result.push(elem);
    }
  }

  return result;
}

function getOwnDivisors(num) {
  let divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return divisors;
}

// 3333333Пишем функцию решения квадратного уравнения через дискриминант:
// ax² + bx + c = 0 (общий вид уравнения)

// D = b**2 – 4ac
// D > 0
// x1 = (-b + √D ) / 2a
// x2 = (-b – √D ) / 2a
// D = 0
// x = -b / 2a

// function equation(a = 1, b = -2, c = -3) {
//   let D = b ** 2 - 4 * a * c;
//   if (D > 0) {
//     let x1 = (-b + Math.sqrt(D)) / (2 * a);
//     let x2 = (-b - Math.sqrt(D)) / (2 * a);
//     return console.log(`Ответ: x1 = ${x1}
//   x2 = ${x2}`);
//   } else if (D === 0) {
//     let x = (-b / 2) * a;
//     return console.log(`Ответ: x = ${x}`);
//   } else if (D < 0) {
//     return console.log("Ответ: нет действительных корней");
//   }
// }

// equation(-1, -2, -3);
