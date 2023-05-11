//  Task1  use || or ?

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

//type1

function checkAge1(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}

//type2

function checkAge2(age) {
	return (age > 18) || confirm('Родители разрешили?');
}

// Task 2

function min(a, b){
	return (a < b) ? a : b;
}

// Task3 

function pow(x,n){
	let result = x;
	for (i = 1; i <= n; i++){
		result = result * x
	}
	return result;
}
let firstNumb = prompt ('First number?','');
let secondNumb = prompt ('Second number?','');

if (firstNumb >= 1 && secondNumb >= 1){
	alert(pow(firstNumb, secondNumb));
} else {
	alert('Числа должны быть больше 0');
}

