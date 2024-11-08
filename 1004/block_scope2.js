var a = 10;
{
    var b = 20;
    console.log(`코드 블록 내부 a : ${a}`); // 코드 블록 내부 a : 10
    console.log(`코드 블록 내부 b : ${b}`); //코드 블록 내부 b : 20
}
console.log(`코드 블록 외부 a : ${a}`); // 코드 블록 외부 a : 10
console.log(`코드 블록 외부 b : ${b}`); // 코드 블록 외부 b : 20
