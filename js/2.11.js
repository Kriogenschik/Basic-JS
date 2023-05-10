// Task 1

let age = prompt('Ваш возраст?', '');

if (14 <= age && age <= 90){
	alert('Возраст подходит!')
} else {
	alert('Возраст НЕ подходит!')
}

// Task 2

//--type1
let newAge = prompt('Проверка2. Ваш возраст?', '');

if (newAge < 14 || age >90){
	alert('Возраст подходит!')
} else {
	alert('Возраст НЕ подходит!')
}

//--type2
let thirdAge = prompt('Проверка3. Ваш возраст?', '');

if (!(14 <= thirdAge && thirdAge <= 90)){
	alert('Возраст подходит!')
} else {
	alert('Возраст НЕ подходит!')
}

// Task 3

let login = prompt('Кто там?','');

if (login === 'admin'){
	let password = prompt('Пароль?','');
	if (password === 'password'){
		alert('Здравствуйте!')
	} else if(password){
		alert('Неверный пароль')
	} else {
		alert('Отменено')
	}
} else if(login){
	alert('Я вас не знаю')
} else {
	alert('Отменено')
}