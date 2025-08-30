/**
 * JavaScript 5일차 과제
 * 윤년 구하기 2
 *
 * 출력 확인법
 * year 변수 값을 원하는 값으로 변경 후, Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * year를 매개변수로 받아 윤년인지 확인하는 함수를 만들어주세요.
 * - 윤년인 경우 출력 값
 *  "(연도)년은 윤년입니다."
 * - 윤년이 아닌 경우 출력 값
 *  "(연도)년은 윤년이 아닙니다."
 * 함수를 호출하여 결과를 확인해주세요.
 */

// 여기에 작성해주세요.
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year}년은 윤년입니다.`);
  } else {
    console.log(`${year}년은 윤년이 아닙니다.`);
  }
}

isLeapYear(2021);
isLeapYear(2000);
isLeapYear(2014);
isLeapYear(2113);

// boolean 반환하는 함수 (재사용성 높음))

// function isLeapYear(year) {
//   return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
// }

// // 사용
// console.log(isLeapYear(3131)); // true

// 년도, 참 또는 거짓
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return `${year}년은 윤년입니다.`;
  } else {
    return `${year}년은 윤년이 아닙니다.`;
  }
}

// 사용
console.log(isLeapYear(3131)); // true
