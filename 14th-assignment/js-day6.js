/**
 * JavaScript 6일차 과제
 * 계산기 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 사칙연산이 가능한 계산기 함수를 만들어주세요.
 *  - num1, num2, operator 매개변수를 받아 다음과 같이 계산해주세요.
 *    - operator: `+`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 + num2`
 *    - operator: `-`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 - num2`
 *    - operator: `*`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 * num2`
 *    - operator: `/`
 *      - calculateData.history: calculateData.view
 *      - calculateData.view: `num1 / num2`
 *      - 0으로 나눌 경우는 0이 저장되게 해주세요.
 */

const calculateData = {
  view: 0, // 최근 연산 결과
  history: 0, // 연산 직전의 view값 (이전결과)
};

function calculator(num1, num2, operator) {
  // 1) 숫자 보정: "2" 같은 문자열이 들어와도 안전하게 처리
  const a = Number(num1);
  const b = Number(num2);

  // 2) 연산 전 view 값을 history에 저장
  calculateData.history = calculateData.view;

  // 3) 연산 수행
  switch (operator) {
    case "+":
      calculateData.view = a + b;
      break;
    case "-":
      calculateData.view = a - b;
      break;
    case "*":
      calculateData.view = a * b;
      break;
    case "/":
      // 0으로 나누면 0 저장
      calculateData.view = b === 0 ? 0 : a / b;
      break;
    default:
      // 정의되지 않은 연산자일 때는 원상복구(요구사항엔 없지만 안전장치)
      calculateData.view = calculateData.history;
      console.warn(`지원하지 않는 연산자입니다: ${operator}`);
  }

  // 필요시 반환(체이닝/검증용)
  return calculateData.view;
}

// 계산기 테스트용 출력 코드
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}` // 0, 0
);
calculator(1, 2, "+");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}` // 3, 0
);
calculator(2, 1, "-");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}` // 1, 3
);
calculator(2, 2, "*");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}` // 4, 1
);
calculator(2, 2, "/");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}` // 1, 4
);

// -----------------------

// const calculateData = {
//   view: 0, // 현재 결과를 저장하는 값
//   history: 0, // 이전 결과를 저장하는 값
// };

function calculator(num1, num2, operator) {
  // 1. 연산하기 전에, 현재 view 값을 history에 저장
  calculateData.history = calculateData.view;

  // 2. 연산자(operator)에 따라 계산 수행
  if (operator === "+") {
    calculateData.view = num1 + num2;
  } else if (operator === "-") {
    calculateData.view = num1 - num2;
  } else if (operator === "*") {
    calculateData.view = num1 * num2;
  } else if (operator === "/") {
    // 나누기에서 0으로 나누면 결과는 0
    if (num2 === 0) {
      calculateData.view = 0;
    } else {
      calculateData.view = num1 / num2;
    }
  } else {
    console.log("지원하지 않는 연산자입니다.");
  }
}

// 테스트 출력
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(1, 2, "+");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 1, "-");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 2, "*");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
calculator(2, 2, "/");
console.log(
  `view is ${calculateData.view}, history is ${calculateData.history}`
);
