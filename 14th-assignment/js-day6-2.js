/**
 * JavaScript 6일차 과제
 * 할 일 목록 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - Todos는 할 일들이 들어가는 객체입니다.
 * - Todos에는 다음과 같은 형태로 할 일들이 들어갑니다.
  {
    '첫번째': { todo: '운동하기', finished: false },
    '두번째': { todo: '청소하기', finished: false },
    '세번째': { todo: 'JavaScript 공부하기', finished: false },
    '네번째': { todo: 'HTML/CSS 복습하기', finished: false }
  }
 * - 함수를 활용하여 할 일 목록 관리 함수를 만듭니다.
 *    - 할 일 목록 추가 함수
 *    - 할 일 목록 삭제 함수
 *    - 할 일 목록 완료 함수
 */

// 정답코드
const Todos = {};

function addTodo(todoId, todo) {
  Todos[todoId] = { todo: todo, finished: false };
}
function deleteTodo(todoId) {
  delete Todos[todoId];
}
function finishTodo(todoId) {
  Todos[todoId].finished = true;
}

console.log(Todos);
addTodo("첫번째", "운동하기");
console.log(Todos);
addTodo("두번째", "청소하기");
console.log(Todos);
addTodo("세번째", "JavaScript 공부하기");
console.log(Todos);
addTodo("네번째", "HTML/CSS 복습하기");
console.log(Todos);
deleteTodo("첫번째");
console.log(Todos);
finishTodo("네번째");
console.log(Todos);
finishTodo("세번째");
console.log(Todos);

// 다른 코드
/**
 * JavaScript 6일차 과제
 * 할 일 목록 만들기
 * node main
 */

// ✅ Todos: 할 일 저장소 (문제에서 제시한 형태)
/* const Todos = {}; */

/* ---------------------------------------
 * 🔢 한글 순서 라벨 생성기
 *    - 키를 '첫번째', '두번째', ... 로 자동 생성
 *    - 1~10까지는 한글 포맷, 그 외는 `${n}번째`로 처리
 * -------------------------------------*/
/* function koreanOrdinal(n) {
  const map = {
    1: "첫번째",
    2: "두번째",
    3: "세번째",
    4: "네번째",
    5: "다섯번째",
    6: "여섯번째",
    7: "일곱번째",
    8: "여덟번째",
    9: "아홉번째",
    10: "열번째",
  };
  return map[n] ?? `${n}번째`;
} */

/* ---------------------------------------
 * 🗝️ 다음으로 사용할 키 찾기
 *    - 삭제가 있어도 "비어 있는 가장 앞 순번"을 찾아 사용
 * -------------------------------------*/
/* function nextKey() {
  let i = 1;
  while (Todos.hasOwnProperty(koreanOrdinal(i))) i++;
  return koreanOrdinal(i);
} */

/* ---------------------------------------
 * ➕ 할 일 추가
 *    - 입력 검증(빈 문자열 방지)
 *    - 자동 생성된 키에 { todo, finished:false } 저장
 *    - 생성된 키 반환
 * -------------------------------------*/
/* function addTodo(text) {
  if (typeof text !== "string" || text.trim() === "") {
    console.log("❗️할 일 내용이 비어 있습니다.");
    return null;
  }
  const key = nextKey();
  Todos[key] = { todo: text.trim(), finished: false };
  return key;
} */

/* ---------------------------------------
 * 🗑️ 할 일 삭제
 *    - 키가 존재하면 삭제하고 true, 없으면 false
 * -------------------------------------*/
/* function deleteTodo(key) {
  if (!Todos.hasOwnProperty(key)) {
    console.log(`❗️'${key}' 키가 없습니다.`);
    return false;
  }
  delete Todos[key];
  return true;
} */

/* ---------------------------------------
 * ✅ 할 일 완료 처리
 *    - 키가 존재하면 finished=true 로 표시하고 true 반환
 * -------------------------------------*/
/* function finishTodo(key) {
  if (!Todos.hasOwnProperty(key)) {
    console.log(`❗️'${key}' 키가 없습니다.`);
    return false;
  }
  Todos[key].finished = true;
  return true;
} */

/* ---------------------------------------
 * 👀 보기 좋게 출력 (보조 함수)
 *    - 요구사항엔 없지만 테스트/확인에 유용
 * -------------------------------------*/
/* function listTodos() {
  const keys = Object.keys(Todos);
  if (keys.length === 0) {
    console.log("📭 할 일이 비어 있습니다.");
    return;
  }
  keys.forEach((key) => {
    const { todo, finished } = Todos[key];
    console.log(`${key}: ${finished ? "[완료]" : "[미완료]"} ${todo}`);
  });
}
 */
/* ---------------------------------------
 * 🧪 동작 테스트
 * -------------------------------------*/
/* const k1 = addTodo("운동하기");
const k2 = addTodo("청소하기");
const k3 = addTodo("JavaScript 공부하기");
const k4 = addTodo("HTML/CSS 복습하기");

console.log("\n--- 추가 후 ---");
listTodos();

finishTodo(k3); // "세번째"를 완료 처리 (키는 실제 생성된 값 기준)
deleteTodo(k2); // "두번째" 삭제

console.log("\n--- 완료/삭제 후 ---");
listTodos();

const k5 = addTodo("알고리즘 문제 풀기"); // 삭제로 빈 자리(두번째)를 다시 채움
console.log("\n--- 새 항목 추가 후 ---");
listTodos();
 */
