// 화살표 함수
//dan = 매개변수
const gugudan1st = (dan) => {
  for (let i=1; i <= 9; i++){
      console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

// 함수 선언문
function gugudan2nd(dan){
    for (let i = 1; i <= 9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}

// ()안에 3,6,9가 인수
gugudan1st(3); // 3단 출력
gugudan2nd(6); // 6단 출력
gugudan2nd(9); // 9단 출력