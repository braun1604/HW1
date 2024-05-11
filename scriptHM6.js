//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] == 10) {
        break;
    }
}

//Задание 2
console.log([1, 5, 4, 10, 0, 3].indexOf(4));

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
console.log(nameNumbs.push(2, 2, 2));

//Задание 6
const p = [9, 8, 7, 'a', 6, 5];
const f = p.sort();
console.log(f.pop());
console.log(f);

//Задание 7
 const a = [9, 8, 7, 6, 5];
 let user = prompt("Угадай число");
 if (a.includes(Number(user))) {
    alert("Угадал");
 } else {
    alert("Не угадал");
 }

 //Задание 8
 let str = 'abcdef';
 let c = str.split('').reverse().join();
 console.log(c);

  //Задание 9
  const z = [[1, 2, 3], [4, 5, 6]];
  const x = z.flat();
  console.log(x);

 //Задание 10
 const arr10 = [8, 7, 6, 9, 10, 1, 2, 3, 4, 5];
 for (let i = 0; i < arr10.length - 1; i++) {
console.log(arr10[i] + arr10[i + 1]);
 }

 //Задание 11
function u(arr) {
    return arr.map(num => num * num);
}

//Задание 12
function y(array) {
    return array.map(el => el.length);
}

//Задание 13
function r(array) {
    return array.filter(value => value < 0);
}
console.log(r([ -1, 3, 0, -100]));

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
  generateArrays.push(Math.round(Math.random() * 10));
};
console.log(generateArrays);
const t = generateArrays.reduce((a, b) => a + b, 0);
console.log(t);