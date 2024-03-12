// Задание 1
let password = 'пароль';
let input = prompt('Введите пароль?')
if (input === password) {alert ('Пароль введен верно'); }
else {alert ('Пароль введен неправильно'); }

// Задание 2
let c = 0;
if (c > 0 && c < 10){
    alert('Верно')
} else {
    alert('Неверно')
}

// Задание 3
let d = 50
let e = 150
if ( d > 100 || e < 100){
    alert('Верно')
} else {
    alert('Неверно')
}

// Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = 12
switch(monthNumber){
    case 12:
    case 1:
    case 2:      
        alert('Зима')
        break;
    case 3:
    case 4:
    case 5:      
        alert('Весна')
        break;  
    case 6:
    case 7:
    case 8:      
        alert('Лето')
        break;
    case 9:
    case 10:
    case 11:      
        alert('Осень')
        break;  
    default:
    alert('Неверно')
}

// Задание 7 (дополнительно)
let userInput = prompt('Пожалуйста, введите любое число');
if (!isNaN(Number(userInput))) {
    if (userInput % 2 === 0) {
        alert('Число четное')    
    } else {
        alert('Число нечетное')    
    }
} else {
    alert('Не число')
}

// Задание 8 (дополнительно)
let clientOs; 
if (clientOs == 1) {
    alert ('Установите версию приложения для Android по ссылке.')
}
    else if (clientOs == 0) {
        alert ('Установите версию приложения для iOS по ссылке.')
    } else {
        alert('Ошибка.')
    }

// Задание 9 (дополнительно)    
let clientOS = 0;
let clientDeviceYear = 2015;
if (clientDeviceYear >= 2015) {
    switch (clientOS) {
        case 1:
            alert('Установите версию приложения для Android по ссылке')
            break;
        case 0:
            alert('Установите версию приложения для iOS по ссылке') 
            break;   
    }
} else {
    switch (clientOS) {
        case 1:
            alert('Установите облегченную версию приложения для Android по ссылке')
            break;
        case 0:  
            alert('Установите облегченную версию приложения для iOS по ссылке')
            break;  
    }
}







