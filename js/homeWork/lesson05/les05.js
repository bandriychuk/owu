console.log('\n');
console.log('Task №1');
// ======№1 - Створити функцію конструктор для обєкту який описує теги
// 	'Властивості'
// 	' -назва тегу'
// 	' - опис його дій'
// 	' - масив з атрибутами (2-3 атрибути максимум)'
// 	' Кожен атрибут описати як окремий який буде містити'
// 	' -назву атрибуту'
// 	' -опис дії атрибуту'
// ==============================================

// function getTagInfo(titleOfTag, action, attrs, attrValueFn){
// 	this.titleOfTag = titleOfTag;
// 	this.action =  action;
// 	this.attrs = attrs;
// 	this.attrValueFn = attrValueFn;
// }
//
// function attributes(titleOfAttr, actionOfAttr){
// 	this.titleOfAttr = titleOfAttr;
// 	this.actionOfAttr =actionOfAttr;
//
// }
//
// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let attribute = [
// 	{
// 		titleOfAttr: 'accesskey',
// 		actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.',
// 	},
// 	{
// 		titleOfAttr: 'coords',
// 		actionOfAttr: 'Устанавливает координаты активной области.',
// 	},
// 	{
// 		titleOfAttr: 'download',
// 		actionOfAttr: 'Предлагает скачать указанный по ссылке файл.',
// 	},
// ];
//
// let aTag = new getTagInfo(title, action, attribute);
// console.log(aTag);

console.log('\n');
console.log('Task №2');

// ===№2 - Створити класс  для об\'єкту який описує теги'
// 'Властивості:'
// ' -назва тегу'
// ' - опис його дій'
// ' - масив з атрибутами (2-3 атрибути максимум)'
// ' Кожен атрибут описати як окремий який буде містити'
// ' -назву атрибуту'
// ' -опис дії атрибуту'
// ==============================================

// class TagInfo{
// 	constructor(titleOfTag, action, attrs) {
// 		this.titleOfTag = titleOfTag;
// 		this.action = action;
// 		this.attrs = attrs;
// 	}
// }
//
// let titleForDiv = '<div>';
// let actionForDiv = 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let attributeForDiv = [
// 	{
// 		titleOfAttr: 'align',
// 		actionOfAttr: 'Задает выравнивание содержимого тега <div>.',
// 	},
// 	{
// 		titleOfAttr: 'title',
// 		actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.',
// 	},
// ];
//
// let titleForH1 = '<h1>';
// let actionForH1 = 'Тег <h1> представляет собой наиболее важный заголовок первого уровня';
// let attributeForH1 = [
// 	{
// 		titleOfAttr: 'align',
// 		actionOfAttr: 'Определяет выравнивание заголовка.',
// 	},
// ];
//
// let titleForInput = '<input>';
// let actionForInput = 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// let attributeForInput = [
// 	{
// 		titleOfAttr: 'accept',
// 		actionOfAttr: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
// 	},
// 	{
// 		titleOfAttr: 'accessKey',
// 		actionOfAttr: 'Переход к элементу с помощью комбинации клавиш',
// 	},
// 	{
// 		titleOfAttr: 'alt',
// 		actionOfAttr: 'Альтернативный текст для кнопки с изображением.',
// 	},
// ];
//
// let titleForForm = '<form>';
// let actionForForm = 'Тег <form> устанавливает форму на веб-странице.';
// let attributeForForm = [
// 	{
// 		titleOfAttr: 'action',
// 		actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.',
// 	},
// 	{
// 		titleOfAttr: 'enctype',
// 		actionOfAttr: 'Способ кодирования данных формы.',
// 	},
// 	{
// 		titleOfAttr: 'method',
// 		actionOfAttr: 'Метод протокола HTTP.',
// 	},
// ];
//
// let titleForOption = '<option>';
// let actionForOption = 'Тег <option> определяет отдельные пункты списка';
// let attributeForOption = [
// 	{
// 		titleOfAttr: 'disabled',
// 		actionOfAttr: 'Заблокировать для доступа элемент списка',
// 	},
// 	{
// 		titleOfAttr: 'label',
// 		actionOfAttr: 'Указание метки пункта списка.',
// 	},
// 	{
// 		titleOfAttr: 'selected',
// 		actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.',
// 	},
// ];
//
// let titleForSelect = '<select>';
// let actionForSelect = 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let attributeForSelect = [
// 	{
// 		titleOfAttr: 'form',
// 		actionOfAttr: 'Связывает список с формой.',
// 	},
// 	{
// 		titleOfAttr: 'multiple',
// 		actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.',
// 	},
// 	{
// 		titleOfAttr: 'size',
// 		actionOfAttr: 'Количество отображаемых строк списка.',
// 	},
// ];
//
//
// let divElement = new TagInfo(titleForDiv,actionForDiv,attributeForDiv);
// console.log(divElement);
//
// let h1Element = new TagInfo(titleForH1,actionForH1,attributeForH1);
// console.log(h1Element);
//
// let inputElement = new TagInfo(titleForInput,actionForInput,attributeForInput);
// console.log(inputElement);
//
// let formElement = new TagInfo(titleForForm,actionForForm,attributeForForm);
// console.log(formElement);
//
// let optionElement = new TagInfo(titleForOption,actionForOption,attributeForOption);
// console.log(optionElement);
//
// let selectElement = new TagInfo(titleForSelect,actionForSelect,attributeForSelect);
// console.log(selectElement);

console.log('\n');
console.log('Task №3');
console.log('\n');

// ===№3 - Створити обєкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, обєм двигуна. додати в обєкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає обєкт який "водій" з довільним набором полів, і доавляет його в поточний обєкт car
// ==============================================

// let car = {
// 	manufactured: 'Ford',
// 	model: 'Edge Sport',
// 	year: 2016,
// 	maxSpeed: 260,
// 	engine: 2.7,
// 	driver: '',
//
// 	info: function() {
// 		if (this.driver) {
// 			console.log(
// 					`${this.manufactured}`,
// 					`${this.model}`,
// 					`${this.year}`,
// 					`${this.maxSpeed}`,
// 					`${this.engine}`,
// 					`${this.driver}`,
// 			);
// 		} else {
// 			console.log(
// 				this.manufactured = `${this.manufactured}`,
// 				this.model = `${this.model}`,
// 				this.year = `${this.year}`,
// 				this.maxSpeed = `${this.maxSpeed}`,
// 				this.engine = `${this.engine}`,
// 			);
// 		}
// 	},
//
// 	drive: function() {
// 		console.log('їдемо зі швидкістю ' + `${this.maxSpeed}` + ' за годину');
// 	},
//
// 	increaseMaxSpeed: function(newMaxSpeed) {
// 		this.maxSpeed = newMaxSpeed;
// 		console.log('Нова максимальрна швидкість ' + newMaxSpeed);
// 	},
//
// 	changeYear: function(newYear) {
// 		this.year = newYear;
// 		console.log('Рік змінений на ' + newYear);
// 	},
//
// 	addDriver: function(newDriver) {
// 		this.driver = newDriver;
// 	},
//
// };
// car.info();
// car.drive();
// car.increaseMaxSpeed(1);
// car.changeYear(2020);
// car.addDriver('Vasya');
// car.info();

// CLASS

console.log('\n');
console.log('Task №4');

// ====№4 - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// function Car(name, model, year, maxSpeed, engine) {
// 	this.name = name;
// 	this.model = model;
// 	this.year = year;
// 	this.maxSpeed = maxSpeed;
// 	this.engine = engine;
//
// 	this.info = function() {
// 		console.log("Інформація про авто");
// 		if (this.driver) {
// 			console.log(
// 				"Name:" + `${this.name}`+"\n",
// 				"Model:" + `${this.model}`+"\n",
// 				"Year:" + `${this.year}`+"\n",
// 				"Max Speed:" + `${this.maxSpeed}`+"\n",
// 				"Engine:" + `${this.engine}`+"\n",
// 				"Driver:" + `${this.driver}`+"\n",
// 			);
// 		} else {
// 			console.log(
// 				"Name:" + `${this.name}`+"\n",
// 				"Model:" + `${this.model}`+"\n",
// 				"Year:" + `${this.year}`+"\n",
// 				"Max Speed:" + `${this.maxSpeed}`+"\n",
// 				"Engine:" + `${this.engine}`+"\n",
// 			);
// 		}
// 	};
//
// 	this.drive = function() {
// 		console.log('їдемо зі швидкістю ' + `${this.maxSpeed}` + ' на годину');
// 	};
//
// 	this.increaseMaxSpeed = function(newMaxSpeed) {
// 		this.maxSpeed = newMaxSpeed;
// 		console.log('Нова максимальна швидкість ' + newMaxSpeed);
// 	};
//
// 	this.changeYear = function(newYear) {
// 		this.year = newYear;
// 		console.log('Рік змінений на ' + newYear);
// 	},
//
// 		this.addDriver = function(driverName, driverExp) {
// 			this.driverName = driverName;
// 			this.driverExp = driverExp;
// 			this.driver = `${this.driverName} ${this.driverExp}`;
// 			console.log("Додано водія з іменем: " + driverName + " та досвідом в " + driverExp + " років");
// 		};
//
// }
//
//
// let car = new Car('Ford', "Edge Sport",2016,260,2.7);
// car.info()
// car.drive()
// car.addDriver("Vova",10,)
// car.changeYear(2020);
// car.increaseMaxSpeed(299);
// car.info()
//
// console.log('\n');
// console.log('Task №6');

console.log('\n');
console.log('Task №5');

// ===№5 - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// class Car {
//
// 	constructor(name, model, year, maxSpeed, engine) {
// 		this.name = name;
// 		this.model = model;
// 		this.year = year;
// 		this.maxSpeed = maxSpeed;
// 		this.engine = engine;
// 	}
//
//
// 	info() {
// 		console.log('Інформація про авто');
// 		if (this.driver) {
// 			console.log(
// 				"Name:" + `${this.name}`+"\n",
// 				"Model:" + `${this.model}`+"\n",
// 				"Year:" + `${this.year}`+"\n",
// 				"Max Speed:" + `${this.maxSpeed}`+"\n",
// 				"Engine:" + `${this.engine}`+"\n",
// 				"Driver:" + `${this.driver}`+"\n",
// 			);
// 		} else {
// 			console.log(
// 				"Name:" + `${this.name}`+"\n",
// 				"Model:" + `${this.model}`+"\n",
// 				"Year:" + `${this.year}`+"\n",
// 				"Max Speed:" + `${this.maxSpeed}`+"\n",
// 				"Engine:" + `${this.engine}`+"\n",
// 			);
// 		}
// 	};
//
//
// 	drive() {
// 		console.log('їдемо зі швидкістю ' + `${this.maxSpeed}` + ' на годину');
// 	};
//
//
// 	increaseMaxSpeed(newMaxSpeed) {
// 		this.maxSpeed = newMaxSpeed;
// 		console.log('Нова максимальна швидкість ' + newMaxSpeed);
// 	};
//
//
// 	changeYear(newYear) {
// 		this.year = newYear;
// 		console.log('Рік змінений на ' + newYear);
// 	};
//
//
// 	addDriver(driverName, driverExp) {
// 		this.driverName = driverName;
// 		this.driverExp = driverExp;
// 		this.driver = `${this.driverName} ${this.driverExp}`;
// 		console.log('Додано водія з іменем: ' + driverName + ' та досвідом в ' +
// 			driverExp + ' років');
// 	};
//
// }
//
// let car = new Car('Ford', "Edge Sport",2016,260,2.7);
// car.info()

console.log('\n');
console.log('Task №6');

// === №6 -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
// 	constructor(name, age, footSize) {
// 		this.name = name;
// 		this.age = age;
// 		this.footSize = footSize;
// 	}
// }
//
// class Prince {
// 	constructor(name, age, shoe) {
// 		this.name = name;
// 		this.age = age;
// 		this.shoe = shoe;
// 	}
// }
//
// let cinderella1 = new Cinderella('cinderella1', 1, 1);
// let cinderella2 = new Cinderella('cinderella2', 2, 2);
// let cinderella3 = new Cinderella('cinderella3', 3, 3);
// let cinderella4 = new Cinderella('cinderella3', 4, 3);
// let cinderella5 = new Cinderella('cinderella3', 5, 3);
// let cinderella6 = new Cinderella('cinderella3', 6, 3);
// let cinderella7 = new Cinderella('cinderella3', 7, 3);
// let cinderella8 = new Cinderella('cinderella3', 8, 3);
// let cinderella9 = new Cinderella('cinderella3', 9, 3);
// let cinderella10 = new Cinderella('cinderella3', 10, 3);
//
// let arrWithGirls = [
// 	cinderella1,
// 	cinderella2,
// 	cinderella3,
// 	cinderella4,
// 	cinderella5,
// 	cinderella6,
// 	cinderella7,
// 	cinderella8,
// 	cinderella9,
// 	cinderella10];
// let pri = new Prince('Valera', 17, 2);
// for (const arrWithGirl of arrWithGirls) {
// 	if (arrWithGirl.footSize === pri.shoe)
// 		console.log(
// 			'Winner is = ' + arrWithGirl.name + ' ' + arrWithGirl.age + ' ' +
// 			arrWithGirl.footSize);
// }

console.log('\n');
console.log('Task №7');

// ===№7 -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name, age, footSize) {
// 	this.name = name;
// 	this.age = age;
// 	this.footSize = footSize;
// }
//
//
// function Prince(name, age, shoe) {
// 	this.name = name;
// 	this.age = age;
// 	this.shoe = shoe;
//
// 	this.getCinderella = function(arrWithCinderellas) {
// 		for (const arrWithGirl of arrWithCinderellas) {
// 			if (arrWithGirl.footSize === this.shoe)
// 				console.log(
// 					'Winner is = ' + arrWithGirl.name + ' ' + arrWithGirl.age +
// 					' ' +
// 					arrWithGirl.footSize);
// 		}
// 	};
// }
//
//
// let cinderella1 = new Cinderella('cinderella1', 1, 1);
// let cinderella2 = new Cinderella('cinderella2', 2, 2);
// let cinderella3 = new Cinderella('cinderella3', 3, 3);
// let cinderella4 = new Cinderella('cinderella4', 4, 4);
// let cinderella5 = new Cinderella('cinderella5', 5, 5);
// let cinderella6 = new Cinderella('cinderella6', 6, 6);
// let cinderella7 = new Cinderella('cinderella7', 7, 7);
// let cinderella8 = new Cinderella('cinderella8', 8, 8);
// let cinderella9 = new Cinderella('cinderella9', 9, 9);
// let cinderella10 = new Cinderella('cinderella10', 10, 10);
//
// let arrWithGirls = [
// 	cinderella1,
// 	cinderella2,
// 	cinderella3,
// 	cinderella4,
// 	cinderella5,
// 	cinderella6,
// 	cinderella7,
// 	cinderella8,
// 	cinderella9,
// 	cinderella10];
//
// let prince = new Prince('va',1,8);
// prince.getCinderella(arrWithGirls)

