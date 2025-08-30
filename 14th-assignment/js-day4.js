/**
 * JavaScript 4일차 과제
 * 주간 독서 이벤트 준비
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 주어진 중첩 배열을 순회하며 주차별 독서 목록을 출력해주세요.
 */

// 주차별 독서 목록
const weeklyReadingList = [
  ["자바스크립트 입문", "HTML 마스터", "CSS 레이아웃"],
  ["프론트엔드 면접", "웹 보안 입문", "알고리즘 기초"],
  ["Git 사용법", "리액트 기초", "비동기 처리"],
  ["Next.js 개념", "TypeScript 시작", "상태관리 패턴"],
];

// 여기에 코드를 작성해주세요.

for (let week = 0; week < weeklyReadingList.length; week++) {
  for (let day = 0; day < weeklyReadingList[week].length; day++) {
    console.log(
      `${week + 1}주차 ${day + 1}일차 책 : ${weeklyReadingList[week][day]}`
    );
  }
}

/** 출력 예시
1주차 1일차 책: 자바스크립트 입문
1주차 2일차 책: HTML 마스터
1주차 3일차 책: CSS 레이아웃
2주차 1일차 책: 프론트엔드 면접
2주차 2일차 책: 웹 보안 입문
2주차 3일차 책: 알고리즘 기초
3주차 1일차 책: Git 사용법
3주차 2일차 책: 리액트 기초
3주차 3일차 책: 비동기 처리
4주차 1일차 책: Next.js 개념
4주차 2일차 책: TypeScript 시작
4주차 3일차 책: 상태관리 패턴 
 */
