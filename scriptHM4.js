// // Задание 1
let i = 0
while (i < 2) {
alert('Привет');
i++ 
}

// Задание 2
let a = 1
while (a <=5) {
    alert (a);
    a++
}

// // Задание 3
for ( b = 7;  b <= 22; b++){
    alert (b);
}    

// Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
};
for (let salary in obj) {
alert(`${salary} - зарплата ${obj[salary]} долларов`);
}

// Задание 5
let n;
let num = 0;
for (n = 1000; n > 50; n = n / 2 ) {
    num = num + 1;
}
    alert (n);
    alert (num);

// Задание 6
for (let number = 1; number <= 31; number += 7) {
    alert(`Сегодня пятница ${number}-е число. Необходимо подготовить отчет. `);
}  


