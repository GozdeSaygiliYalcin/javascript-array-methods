//map metodu
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}
//------------------------//

//filter metodu
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
//ES6- filter methodunun daha güncel kullanımı
const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultFilter = numbersFilter.filter(number => number > 5);
console.log(resultFilter);
//------------------------//

//find metodu
let numbersFind = [1, 2, 3, 4, 5];
console.log(numbersFind.find(e => e % 2 == 0));
//------------------------//
//findIndex metodu

//------------------------//
//fill metodu
const arrayFill = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(arrayFill.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(arrayFill.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(arrayFill.fill(6));
// expected output: [6, 6, 6, 6]
//------------------------//

//copy with in metodu
//------------------------//
//some
//------------------------//
//every
//------------------------//
//reduce
//------------------------//
//foreach
const arrayForEach = ['a', 'b', 'c'];
arrayForEach.forEach(element => console.log(element));
// expected output: "a"
// expected output: "b"
// expected output: "c"
//------------------------//

//splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
//------------------------//

//slice
const fruitsSlice = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
const citrus = fruitsSlice.slice(1, 3);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
//------------------------//
//unshift
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
// expected output: 5
console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
//------------------------//
//shift
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();