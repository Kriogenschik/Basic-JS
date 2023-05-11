// Task1

for (i=1; i <= 10; i++){
	if (!(i % 2)){
		alert(i);
	}
	
}

// Task2 repalce "for" with "while"

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
let x = 0
while (x < 3){
	alert(`number ${x++}!`)
}

// Task3

let num;

do {
	num = prompt ("Введите число больше 100", '');
	console.log(num);
} while(!(num == null) && num < 100)

// Task4

let n = 15;

detector: for (y = 2; y <= n; y++){

	for (z = 2; z < y; z++){
		
		if( y % z == 0 ){
			continue detector;
		}
	}
	alert (`${y} - простое число!`)
}