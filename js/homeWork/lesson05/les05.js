console.log("№1 - Створити функцію конструктор для об'єкту який описує теги\n" +
	"Властивості\n" +
	" -назва тегу\n" +
	" - опис його дій\n" +
	" - масив з атрибутами (2-3 атрибути максимум)\n" +
	" Кожен атрибут описати як окремий який буде містити\n" +
	" -назву атрибуту\n" +
	" -опис дії атрибуту");

function getTagInfo(titleOfTag, action, attrs, attrValueFn){
	this.titleOfTag = titleOfTag;
	this.action =  action;
	this.attrs = attrs;
	this.attrValueFn = attrValueFn;
}

function attributes(titleOfAttr, actionOfAttr){
	this.titleOfAttr = titleOfAttr;
	this.actionOfAttr =actionOfAttr;

}

let title = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
let attribute = [
	{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
	{titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
	{titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
	]

let aTag = new getTagInfo(title,action,attribute);

console.log(aTag);

// -div



// -h1
// -span
// -input
// -form
// -option
// -select
