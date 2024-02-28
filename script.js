// /* Задание 1 */
let a = 10
alert (a)
 a =20
alert (a)

// /* Задание 2 */
const releaseIphone = 2007
alert (releaseIphone)

// /* Задание 3 */
const jsCreator = 'Brendan Eich'
alert (jsCreator)

// /* Задание 4 */
let x = 10
let y = 2
let sum = x + y
let difference = x - y
let product = x * y
let quotient = x / y
alert (sum)
alert (difference)
alert (product)
alert (quotient)

// /* Задание 5 */
let result = (2 ** 5)
alert (result)

// /* Задание 6 */
let c = 9
let b = 2
let remainder = c % b
alert (remainder)

// /* Задание 7 */
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// /* Задание 8 */
let age = prompt('Сколько вам лет?'); 
alert(age); 

/* Задание 9 */
const user = {
    name: 'Dmitriy',
    age: 26,
    isAdmin: true,
};
user['city of residence'] = 'Surgut'
user.age = 27;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?')
alert(user[info])

/* Задание 10 */
let userName = prompt('Ваше имя?')
alert(`Привет, ${userName}!`)
