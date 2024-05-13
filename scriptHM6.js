//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break;
    }
}

//Задание 2
console.log(arr.indexOf(4));

//Задание 3
const numbs = [1, 3, 5, 10, 20];
console.log(numbs.join(" "));

//Задание 4
const newNumbs = [];
for (let i = 0; i < 3; i++) {
    let newArr = [];
    for (let j = 0; j < 3; j++) {
        newArr.push(1);
    }
    newNumbs.push(newArr);
}
console.log(newNumbs);

//Задание 5
const nameNumbs = [1, 1, 1];
nameNumbs.push(2, 2, 2);

//Задание 6
const sortArr = [9, 8, 7, 'a', 6, 5].sort();
sortArr.pop();
console.log(sortArr);

//Задание 7
 const a = [9, 8, 7, 6, 5];
 let userNumber = prompt("Угадай число");
 if (a.includes(Number(userNumber))) {
    alert("Угадал");
 } else {
    alert("Не угадал");
 }

 //Задание 8
 let str = 'abcdef';
 let line = str.split('').reverse().join('');
 console.log(line);

  //Задание 9
  const task9 = [[1, 2, 3], [4, 5, 6]];
  const job9 = task9.flat();
  console.log(job9);

 //Задание 10
 const task10 = [8, 7, 6, 9, 10, 1, 2, 3, 4, 5];
 for (let i = 0; i < task10.length - 1; i++) {
console.log(task10[i] + task10[i + 1]);
 }

 //Задание 11
function task11(arr) {
    return arr.map(num => num * num);
}

//Задание 12
function task12(array) {
    return array.map(el => el.length);
}

//Задание 13
function task13(array) {
    return array.filter(value => value < 0);
}
console.log(task13([ -1, 3, 0, -100]));

//Задание 14
  const generateArray = [];
  for (let i = 0; i < 10; i++) {
    generateArray.push(Math.round(Math.random() * 10));
  };
  console.log(generateArray);
  const filt = generateArray.filter(max => max  % 2 === 0);
console.log(filt);

//Задание 15
const generateArrays = [];
for (let i = 0; i < 6; i++) {
 const min = 1;
 const max = 10;
  generateArrays.push(Math.floor(Math.random() * (max - min + 1)) + min);
};
console.log(generateArrays);
const t = generateArrays.reduce((a, b) => a + b, 0);
console.log(t);