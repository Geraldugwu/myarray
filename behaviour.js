
const fruits = ["banana", "apple", "orange", "mango"];
fruits.push("kiwi, chair" );
document.getElementById("demo").innerHTML = fruits;
const names = ["ezeh", "chibuike", "chisom", "onyeka"];
names.pop();
document.getElementById("me").innerHTML = names
const fruit = ["banana", "orange", "apple", "mango"];
fruit.unshift("lemon", "pineapple");
document.getElementById("oku").innerHTML = fruit
const name = ["jude", "juli", "ify", "dike"];
name.shift();
document.getElementById("you").innerHTML = name; 
const cars = ["benz", "bmw", "toyota", "lexus"];
cars.splice(2, 0, "mazda", "acura");
document.getElementById("lol").innerHTML = cars;
const foods = ["banana", "orange", "lemon", "apple", "mango",];
const citrus = foods.slice(1, 3);
document.getElementById("jun").innerHTML = citrus;
const streets = ["eke", "owa", "nza", "mission"];
let text = streets.join();
document.getElementById("ken").innerHTML = text;
const arr1 = ["choma", "ifeoma"];
const arr2 = ["ike", "chukwu", "buike"];
const children = arr1.concat(arr2);
document.getElementById("may").innerHTML = children;
const villages = ["opi", "orba", "obollo", "ezimo"];
document.getElementById("isi").innerHTML = villages.reverse();
const tvs = ["samsung", "lg", "panasonic", "sharp"];
document.getElementById("end").innerHTML = tvs.sort();