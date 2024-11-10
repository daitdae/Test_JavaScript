const person = {
    name:{
        firstName: "Junhyung"
        , lastName: "Park"
    }
    ,age : 35
    ,likes:["apple","banana"]
    , printHello:function (){
        return "hello";
    }
};

console.log(person.name.firstName); //Junhyung
console.log(person.age); //35
console.log(person.likes[0]); //apple
console.log(person.printHello()); //hello




