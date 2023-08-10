// // 1   function borrowing

// let name = {
//   firstname: "yash",
//   lastname: "Sahni",
// };

// let printName = function (hometown, state) {
//   console.log(
//     this.firstname + " " + this.lastname + " " + hometown + " " + state
//   );
// };

// printName.call(name, "Gorakhpur", "UP");

// printName.apply(name, ["Gorakhpur", "UP"]);

// //bind

// const printNameBind = printName.bind(name, "Gorakhpur", "UP");
// console.log(printNameBind);

// printNameBind();

// 2   fuction curring using bind method

// let multiply = function (x, y) {
//   console.log(x * y);
// };

// const multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(4);

// // fuction curring using clousure

// let multiply2 = function (x) {
//   return function (y) {
//     console.log(x * y);
//   };
// };

// const multiplyByTwo2 = multiply2(2);

// multiplyByTwo2(4);

// 3  Prototype and Prototypal Inheritance

// let object1 = {
//   name: "Yash",
//   city: "Gorakhpur",
//   getIntro: function () {
//     console.log(this.name + " " + this.city);
//   },
// };

// let object2 = {
//   name: "Joey",
// };

// object2.__proto__ = object1;

// object2.getIntro();
// console.log(object2.__proto__);

// 4  Event Bubbling and Capturing

//bubbling
// document.querySelector("#grandparent").addEventListener("click", () => {
//   console.log("Grandparent");
// });

// document.querySelector("#parent").addEventListener("click", () => {
//   console.log("Parent");
// });

// document.querySelector("#child").addEventListener("click", () => {
//   console.log("Child");
// });

//capturing
// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent");
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child");
//   },
//   true
// );

// to stop the propagation of event use stopPropagation() method

// document.querySelector("#grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grandparent");
//   },
//   true
// );

// document.querySelector("#parent").addEventListener(
//   "click",
//   (e) => {
//     console.log("Parent");
//     e.stopPropagation();
//   },
//   true
// );

// document.querySelector("#child").addEventListener(
//   "click",
//   () => {
//     console.log("Child");
//   },
//   true
// );

// 5.  Event Delegation

// document.querySelector("#category").addEventListener("click", (e) => {
//   console.log(e.target);
//   if (e.target.tagName == "LI") {
//     window.location.href = `/${e.target.id}`;
//   }
// });

// 6. Throttling in JavaScript

// const loggerFunc = () => {
//   console.count("Throttled Function");
// };

// const throttle = (fn, limit) => {
//   let flag = true;
//   return function () {
//     let context = this;
//     let args = arguments;
//     if (flag) {
//       fn.apply(context, args);
//       flag = false;
//       setTimeout(() => {
//         flag = true;
//       }, limit);
//     }
//   };
// };

// const betterLoggerFunction = throttle(loggerFunc, 1000);

// window.addEventListener("resize", betterLoggerFunction);

// // This is the normal Function without Throttling
// //Check the console for the difference between the calls of Normal Function and the Throttled Function
// const normalFunc = () => {
//   console.count("Normal Function");
// };

// window.addEventListener("resize", normalFunc);
