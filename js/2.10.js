// Task 1

let userAnswer = prompt('Какое «официальное» название JavaScript?', '');

if (userAnswer == 'ECMAScript'){
	alert('Верно!');
} else {
	alert('Не знаете? ECMAScript!');
}

// Task 2

let userNumber = prompt('Введи любое число', '');

if (userNumber > 0){
	alert('1');
} else if(userNumber < 0){
	alert('-1');
} else {
	alert('0');
}

// Task 3

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result = (a + b < 4) ? 'Мало' : 'Много';

// Task 4

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let message = (login == 'Сотрудник') ? 'Привет' : 
	(login == 'Директор') ? 'Здравствуйте' :
	(login == '') ? 'Нет логина' : '';