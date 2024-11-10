const person = {
    name:{
        firstName: "Junhyung"
        , lastName: "Park"
    },
    likes:["apple","banana"]
    , printHello:function (){
        return "hello";
    }
};

console.log(person["name"]) // { firstName: 'Junhyung', lastName: 'Park' }

//person 객체의 name 속성에 값으로 할당된 객체의 firstName 속성에 접근
console.log(person["name"]["firstName"]); //Junhyung

console.log(person["likes"]); //[ 'apple', 'banana' ]

console.log(person["likes"][0]); //apple
console.log(person["likes"][1]); //banana

console.log(person["printHello"]); //[Function: printHello]
console.log(person["printHello"]()); //hello



