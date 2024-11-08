let a = 10; // 전역스코프
function sum(){
    console.log(`함수 내부: ${a}`);
}
sum();
console.log(`함수 외부: ${a}`);
// 함수외부: 10
// 함수외부: 10

// function sum2(){
//     let b = 10; // 지역스코프
//     console.log(`함수내부: ${b}`); // 함수 내부: 10
// }
// sum();
// console.log(`함수외부: ${b}`) // ReferenceError: b is not defined
