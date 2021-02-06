console.log("<======== РОБОТА В АУДИТОРІЇ - 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) ========>")
// console.log("<======== Task - 1 ========>")
//
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = ['string1', 'string2', 'string3', 'string4', 'string5',];
// let arr3 = [1, 'String1', true, 2, false, 'String2', 3, true, 'String2', 4, false, 'String3', 5];
//
// for (const arrElement of arr1) {
//     console.log(arrElement);
// }
//
// console.log('========== Reverse === === === === =');
// for (const arrElement of arr1.reverse()) {
//     console.log(arrElement);
// }
//
// console.log('=======================');
//
// for (const arrElement of arr2) {
//     console.log(arrElement);
// }
//
// console.log('========== Reverse =============');
// for (const arrElement of arr2.reverse()) {
//     console.log(arrElement);
// }
//
//
// console.log('=======================');
//
// for (const arrElement of arr3) {
//     console.log(arrElement);
// }
//
// console.log('========== Reverse =============');
//
// for (const arrElement of arr3.reverse()) {
//     console.log(arrElement);
// }

// console.log("<======== Task - 2 ========>")
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = [];
// arr[0]='f';
// arr[1]=1;
// arr[2]=true;
// console.log(arr)
// console.log('========== Reverse =============');
// console.log(arr.reverse())
//
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// let title = 'text'
// for (let i = 0; i < 10; i++) {
//    document.write(`<h1>${title}</h1>`);
// }
//
// for (let i = 1 ; i < 10; i++) {
//     document.write('<div>text '  + i + '</div>');
// }
//
// console.log('========== Reverse =============')
// for (let i = 10; i > 0; i--) {
//     document.write(`<h1>${i}</h1>`);
// }
//
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let title = 'text'
// let index = 1;
// while (index <= 20) {
//     document.write(`<h1>${title + index}</h1>`);
//     index++;
// }
//
// console.log('========== Reverse =============')
// let index1 = 20;
// while (index1 >= 1) {
//     document.write(`<h1>${title + index1}</h1>`);
//     index1--;
// }

// console.log("<======== Task - 3 ========>")
// let arr1 = [1, 2, 3, 4, 5,6,7,8,9,10]
// let arr2 = ['string1', 'string2', 'string3', 'string4', 'string5',  'string6',  'string7',  'string8',  'string9',  'string10']
// let arr3 = [
//     'string1', 'string2', 'string3',
//     'string4', 'string5', 'string6',
//     'string7', 'string8', 'string9',
//     'string10', 1, 2, 3, 4, 5, 6, 7,
//     8, 9, 10, true, false, true, false,
//     true, false, true, false, true, false]
//
// console.log('========== Reverse =============');
//
// for (const arrElement of arr1.reverse()) {
//     console.log(arrElement);
// }
//
// console.log('========== Reverse =============');
//
// for (const arrElement of arr2.reverse()) {
//     console.log(arrElement);
// }
//
//
// console.log('========== Reverse =============');
//
// for (const arrElement of arr3.reverse()) {
//     if (typeof arrElement === 'boolean') {
//         console.log(arrElement);
//         console.log("===============boolean")
//     } else if (typeof arrElement === 'string') {
//         console.log(arrElement);
//         console.log("===============string")
//     } else if (typeof (arrElement) === "number") {
//         console.log(arrElement);
//         console.log("===============number")
//     }
// }

// console.log("<======== Task - 4 - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.========>")
// let someArr = [];
// someArr[0] = 1;
// someArr[1] = 'a';
// someArr[2] = true;
// someArr[3] = 12;
// someArr[4] = 'ddd';
// someArr[5] = false;
// someArr[6] = 19;
// someArr[7] = 3;
// someArr[8] = 4;
//
// for (const someArrElement of someArr.reverse()) {
//     console.log(someArrElement)
// }

// console.log("<======== Task - 5 - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write========>")
//
// for (let i = 10; i > 0; i--) {
//     document.write('Крок ' + i);
//     document.write('<hr>');
//     console.log(i);
// }

// console.log("<======== Task - 6 " + '\n' + "- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write" +
// '\n'+
//  "- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write ========>")
//
// for (let i = 100; i > 0; i--) {
//     for (let j = 100; j > 0; j--) {
//         document.write(`${'Крок 1 = '  + i + ' Крок 2 = ' + j}`);
//         document.write('<hr>');
//         console.log(i, j);
//     }
// }

// console.log("<======== Task - 7  - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write========>")
//
// for (i = 100; i >0; i--) {
//     if (i % 2 === 0) {
//         document.write(i);
//         document.write('<hr>');
//         console.log(i)
//     }
// }

// console.log("<======== Task - 8 - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write========>")
//
// for (i = 100; i > 0; i--) {
//     if (i % 2 !== 0) {
//         document.write(i);
//         document.write('<hr>');
//         console.log(i)
//     }
// }

// console.log("<======== Task - 9/10 - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)========>")
//
// for (let hour = 2; hour > -1; hour--) {
//
//     for (let min = 20; min > -1; min--) {
//
//         for (let sec = 59; sec > -1; sec--) {
//
//             console.log(`${hour}:${min}:${sec}`);
//
//             if (hour === 2 && min === 20 && sec === 0) {
//                 min = 20;
//                 hour = 2
//                 break;
//             }
//         }
//     }
// }

console.log("<========  РОБОТА В АУДИТОРІЇ ========>");

// console.log("<======== РОБОТА В АУДИТОРІЇ - 1 - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.========>")
//
// let arr1 = ['a', 'b', 'c'];
// for (let i = 1; i < 4; i++) {
//     arr1.push(i)
// }
// console.log(arr1)
// console.log(arr1.reverse())

// console.log("<======== РОБОТА В АУДИТОРІЇ - 2 - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].========>")
//
// let arr2 = [1, 2, 3];
// arr2.reverse()
// console.log(arr2)
// console.log(arr2.reverse())

// console.log("<======== РОБОТА В АУДИТОРІЇ - 3 - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.========>")
//
// let arr3 = [1, 2, 3];
// for (let i = 4; i < 7; i++) {
//     arr3.push(i)
// }
// console.log(arr3);
// console.log(arr3.reverse());

// console.log("<======== РОБОТА В АУДИТОРІЇ - 4 - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.========>")
//
// let arr4 = [1, 2, 3];
// arr4.unshift(6);
// arr4.unshift(5);
// arr4.unshift(4);
// console.log(arr4)
// console.log(arr4.reverse())

// console.log("<======== РОБОТА В АУДИТОРІЇ - 5 - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift() ========>")
//
// let ar1 = ['js', 'css', 'jq'];
// console.log(ar1.shift());
// console.log(ar1.pop());

// console.log("<======== РОБОТА В АУДИТОРІЇ - 6 - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()========>")
//
// let ar2 = ['js', 'css', 'jq'];
// console.log(ar2.pop());
// console.log(ar2.shift());

// console.log("<======== РОБОТА В АУДИТОРІЇ - 7 - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]. ========>")
//
// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1.slice(3,5));
// console.log(arr1.slice(3,5).reverse());
//
// console.log("<======== РОБОТА В АУДИТОРІЇ - 8 - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].========>")
//
// let arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.slice(0,2));
// console.log(arr2.slice(0,2).reverse());
//
// console.log("<======== РОБОТА В АУДИТОРІЇ - 9 - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5]. ========>")
//
// const arr3 = [1, 2, 3, 4, 5];
// arr3.splice(1,2);
// console.log(arr3);
// console.log(arr3.reverse());
//
// console.log("<======== РОБОТА В АУДИТОРІЇ - 10 - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].========>")
//
// const arr4 = [1, 2, 3, 4, 5];
// arr4.splice(3, 0, 'a', 'b', 'c');
// console.log(arr4);
// console.log(arr4.reverse());
//
//
// console.log("<======== РОБОТА В АУДИТОРІЇ - 11 - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']. ========>")
// let arr5 = [1, 2, 3, 4, 5];
// arr5.splice(1, 0, 'a', 'b');
// arr5.splice(6, 0, 'c');
// arr5.splice(8, 0, 'e');
// console.log(arr5);
// console.log(arr5.reverse());

// console.log("<======== РОБОТА В АУДИТОРІЇ 10 - Створити пустий масив та :" +
//     '\n' + "a. заповнити його 50 парними числами за допомоги циклу." + '\n' +
//     '\n' + " b. заповнити його 50 непарними числами за допомоги циклу." + '\n' +
//     '\n' + " используя Math.random заполнить массив из ???(сколько хотите) элементов.\n" +
//     "//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)" + '\n' +
//     " ========>");
//
// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < 50; i++) {
//     arr1[i] = i * 2;
//     arr2[i] = i * 2+1;
// }
// console.log(arr1)
// console.log(arr1.reverse())
// console.log(arr2)
// console.log(arr2.reverse())

// console.log("<======== РОБОТА В АУДИТОРІЇ - 11. Вивести за допомогою console.log кожен третій елемен ========>")
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i += 2) {
//     console.log(arr[i]);
// }
//
// console.log('========== Revers =========')
// for (let i = arr.length; i > -1; i -= 2) {
//     console.log(arr[i]);
// }

// console.log("<======== РОБОТА В АУДИТОРІЇ - 11.3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.");
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i]%2 ===0){
//         console.log(arr[i])
//     }
// }
//
// for (let i = arr.length-1; i > -1 ; i -= 3) {
//     if (arr[i]%2 ===0){
//         console.log(arr[i])
//     }
// }

// console.log("<======== РОБОТА В АУДИТОРІЇ - 11.4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив");
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let arr2 = [];
// for (let i = 0; i < arr.length; i += 3) {
//     if (arr[i]%2 ===0){
//         arr2 = arr[i];
//     }
//
//     console.log(arr2)
// }
//
// for (let i = arr.length-1; i > -1;  i -= 3) {
//     if (arr[i]%2 ===0){
//         arr2 = arr[i];
//     }
//
//     console.log(arr2)
// }

// console.log("<======== РОБОТА В АУДИТОРІЇ - 11.5. Вивести кожен елемент масиву, сусід зпарва якого є парним");
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length; i +=1) {
//     if (arr[i+1] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
//
// for (let i = arr.length -1; i > -1 ; i -=1) {
//     if (arr[i+1] % 2 === 0){
//         console.log(arr[i]);
//     }
// }


console.log("<======== РОБОТА В АУДИТОРІЇ - 11.6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.");
let arr = [100,250,50,168,1201,345,188];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum+=arr[i];
}
console.log(sum)
let arrSum=[sum];

console.log(arrSum.reverse());



// console.log("<======== РОБОТА В АУДИТОРІЇ - 11.7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.");
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = Math.floor(Math.random()*235-8);
// }
// console.log(arr);
// console.log("====== Reverse ======");
// console.log(arr);
//
// console.log("======")
//
// let arr2 = [];
// for (let i = 0; i < 10; i++) {
//     arr2[i] = arr[i] * 5;
// }
//
// console.log(arr2);
//
// console.log("====== Reverse ======")
// console.log(arr2.reverse());


console.log("<======== РОБОТА В АУДИТОРІЇ - 11.8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.");

// let arr = ["String1", "String2", 1, 2, 3, "String3", 5, 7, true, false, 9, 56, 8, 67];
// let arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         arr2 = arr[i];
//     }
//     console.log(arr2);
// }
