//- присвоить каждому из следующих значений свою переменную:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write

// console.log('<=========== Task 1 ===========>')
// var a = 'hello';
// var b = 'owu';
// var c = 'ua';
// var d = 1;
// var e = 10;
// var f = -999;
// var g = 123;
// var h = 3.14;
// var i = 2.7;
// var j = 16;
// var k = true;
// var m = false
// console.log(b, c,e,f);
// alert(d);
//
// document.write(a);
// console.log(g, h, i, j, k, m);

// переопределить каждую переменную из задания 1 дав им произвольные значения.
// Вывести каждую при помощи console.log , alert, document.write
// console.log('<=========== Task 2 ===========>')
//
// a = 1;
// b = 2;
// c = 3;
// k = false;
// m = true;
//
// console.log(a, b, c, k, m);

// Создать 3 числовых и 3 стринговых константы.
// Вывести каждую при помощи console.log , alert, document.write
// console.log('<=========== Task 3 ===========>')
//
// const numberA = 1;
// const numberB = 2;
// const numberC = 3;
//
// const stringD = 'd';
// const stringE = 'e';
// const stringF = 'f';
//
// console.log(numberA, numberB);
//
// // alert(numberC)
//
// document.write(stringD, " ",stringE, " ",stringF, " ");

// - при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
// Для фамилии имени и отчества создать разные переменные.
// Вывести каждую при помощи console.log , alert, document.write
// console.log('<=========== Task 4 ===========>')
// let firstName = prompt('Enter Name');
// let lastName = prompt('Enter Lastname');
// let surName = prompt('Enter Surname');
//
// console.log(firstName);
// alert(surName);
// document.write(lastName);
//
// console.log(surName);
// console.log(lastName);
//


// - Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
// console.log('<=========== Task 5 ===========>')
// let person = firstName + lastName + surName;
// console.log(person);
//

// - при помощи prompt() получить 3 числа.
// Привести их к числовому типу при помощи +. вывести их в консоль.
// console.log('<=========== Task 6 ===========>');
// let a = +prompt('Enter the number ');
// let b = +prompt('Enter the number ');
// let c = +prompt('Enter the number ');
//
// console.log(a,b,c);

// console.log('<=========== Task 6 ===========>');
// - при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера


// console.log('<=========== Task 7 ===========>');

// - при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
//     Сложить их между собой записав результат в переменную result и вывести в консоль браузера
// let a = parseFloat(+prompt('Enter a number'));
// let b = parseFloat(+prompt('Enter b number'));
// let c = parseFloat(+prompt('Enter c number'));
//
// let result = a+b+c;
//
// console.log(result)


console.log('<=========== Task 8 ===========>');

// - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
// Сложить их между собой записав результат в переменную  и вывести в консоль браузера


// console.log('<=========== Task 9 ===========>');
// - При помощи оператора опредеоения типа typeof
// определить типы следующих переменных и вывести их в консоль
// let a = 100; let b = '100'; let c = true; let d = undefined;
//
// let a = 100; let b = '100'; let c = true; let d = undefined;
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));

// console.log('<=========== Task 10 ===========>');
// - Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
//     В одинаковых выражениях в задании не использовать два одинаковых оператора.
//
// Каждое выражение вложить в свою переменную
// 5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

// let a = 5 < 6;
// let b = 5 > 6;
// let c = 5 == 6;
// let d = 5 === 6;
// let f = 10 === 10;
// let g = 10 == 10;
// let h = 10 <= 10;
// let s = 10 != 10;
// let w = 10 > 10;
// let q = 123 === '123';
// let t = 123 == '123';
//
// console.log('\n'+ a + '\n'+ b +'\n'+ c +'\n'+ d, +'\n'+ f +'\n' +'\n'+ g +'\n'+ h+'\n'+s +'\n'+ w +'\n'+ q +'\n'+ t +'\n')

console.log('<=========== Class ===========>');
// console.log('<=========== Task 1 ===========>');

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
// При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.
//
// let str = '«Привет»';
// let num = 123;
// let flag = true;
// let txt = '«true»'
//
// let a = typeof (str);
// console.log(a);
// let b = typeof (num);
// console.log(b);
// let c = typeof (flag);
// console.log(c);
// let d = typeof (txt);
// console.log(d);


// console.log('<=========== Task 2 ===========>');
// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
//     5 + 3,
//     5 - 3,
//     5 * 3,
//     5 / 3,
//     5 % 3
// поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
//
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);


// console.log('<=========== Task 3 ===========>');
// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     5 % 3,
//     3 % 5,
//     5 + '3',
//     '5' - 3,
//     75 + 'кг'

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
//
// console.log(a6);
// console.log(a7);
// console.log(a8);
// console.log(a9);
// console.log(a10);


// console.log('<=========== Task 4 ===========>');

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
// шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.

// let height = 23;
// let width = 10;
// let s = width * height;
//
// console.log(s);


// console.log('<=========== Task 5 ===========>');

// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
//     результат поместите в переменную v.
//
// let hC = +prompt('Enter hC');
// let dC = +prompt('Enter dC');


// console.log('<=========== Task 7 ===========>');
// 7. Напишите скрипт, который выводит "Hello world",
// создавши переменную str и выводить спомощью document.write, alert и console.log

// let str = "Hello world";
//
// document.write(str);
// console.log(str);
// alert(str);

// console.log('<=========== Task 8 ===========>');

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).
//
// let borys = {firstName: 'Borys', lastName: 'Andriychuk', surname: 'Romanovych', age: '26', hobby: 'boxing'};
//
// alert('\n' + borys.firstName + '\n' + borys.lastName + '\n' + borys.surname + '\n' + borys.age + '\n' + borys.hobby);

// console.log('<=========== Task 9 ===========>');

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//     Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//     Вывести в документ содержимое переменной concatenation спомощью document.write
//
// let str1 = "Кто ";
// let str2 = "ты ";
// let str3 ="такой ?";
// let concatenation = str1 + str2 + str3;
//
// document.write(concatenation)

// console.log('<=========== Task 12 ===========>');

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные,
// которые будут использоваться далее, повторите код ниже

// let str = prompt("Enter something", "some text")
// console.log(str);

// console.log('<=========== Task 13 ===========>');
// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert

// alert(+prompt("enter 1 number ") + +prompt("enter 2 number"));

// console.log('<=========== Task 14 ===========>');

// 14. С помощью окна ввода, вызываемого методом prompt,
// пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
// Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert

// alert("Доброго вечера " + " " +prompt('Enter firstname') + " " +prompt('Enter lastname')+ " мои поздравления что вам " + +prompt('Enter age'));

// console.log('<=========== Додаткове завдання 1 ===========>');
// 1. Три різних числа вводяться через prompt().
//     За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = +prompt('Enter number a');
// let b = +prompt('Enter number b')
// let c = +prompt('Enter number c')
//
// if (a > b && a > c) {
//     if (b > c) {
//         console.log(a, b, c)
//     } else {
//         console.log(a, c, b);
//     }
// } else if (b > a && b > c) {
//     if (a > c) {
//         console.log(b, a, c)
//     } else {
//         {
//             console.log(b, c, a)
//         }
//     }
//
// } else if (c > a && c > b) {
//     if (b > a) {
//         console.log(c, b, a)
//     } else {
//         console.log(c,a,b)
//     }
// } else {
//     console.log("asdfsadfas");
// }


// console.log('<=========== Додаткове завдання 2 ===========>');
// 2.
// Все параматры получаем с клавиатуры!!!!
//     Имитируем поведение пешехода на перекстке.
//     Если светофор зеленый - вывести "иди".
//     Если светофор желтый - вывести "подожди".
//     Если светофор красный - вывести "стой".
//     Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt("Enter color: ")
//
// if (color === "green"){
//     console.log('Go !')
// }else if (color === "yellow"){
//     console.log('wait !')
// }else if (color === "red"){
//     console.log("stop !")
// } else {
//     console.log("Go where you want!")
// }


// console.log('<=========== Додаткове завдання 3 ===========>');
// 3. Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt("Enter color: ")
// let isRoadClear = confirm('Is Road Clear ?')
//
// if (color === "green" && isRoadClear) {
//     console.log('Go !')
// }
// else if (color === "green" && !isRoadClear) {
//     console.log('Wait until the road is clear!')//
// }
// else if (color === "yellow" && !isRoadClear) {
//     console.log('wait !')
//
// } else if (color === "yellow" && isRoadClear) {
//     console.log('wait !')
// }
// else if (color === "red" && !isRoadClear) {
//     console.log("stop !")
// }
// else if (color === "red" && isRoadClear){
//     console.log('Stop and wait!')
// }
// else {
//     console.log("Go where you want!")
// }