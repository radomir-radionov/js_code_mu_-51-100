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

let students = {
  group1: {
    subgroup11: ["student111", "student112", "student113"],
    subgroup12: ["student121", "student122", "student123"],
  },
  group2: {
    subgroup21: ["student211", "student212", "student213"],
    subgroup22: ["student221", "student222", "student223"],
  },
  group3: {
    subgroup31: ["student311", "student312", "student313"],
    subgroup32: ["student321", "student322", "student323"],
  },
};

students.group1.push("student14");

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

// Задача 95.2

// Используя созданную функцию, найдите сумму трех случайных элементов из массива.

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function random(arr) {
// 	let sum = 0;
// 	let key = getRandomInt(0, arr.length - 1 );
// 	for(let i = 0; i < arr.length - 1 ; i++){
// 	sum += arr[key];}
// 	return sum;
// }

// 	let arr = [1, 3,4];
// 	console.log(random(arr));

//
