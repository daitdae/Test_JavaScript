const person = {
    name:"Junhyung"
};
const copyPerson = person; // 변수 person에 할당된 객체를 변수 copyPerson에 복사
person.name = "Park"; // 변수 person에 할당된 객체의 값을 변경
console.log(person.name); // Park
console.log(copyPerson.name); // Park
