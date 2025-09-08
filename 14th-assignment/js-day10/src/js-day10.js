/** JavaScript 10일차 순간 포착
 *
 *  요구사항
 * - 페이지에 현재 시간이 나오게 구현해주세요.
 * - 버튼을 구성하고, 버튼을 누르면 현재 시간이 멈추는 기능을 구현해주세요.
 * - 아래 순서에 맞춰 코드를 완성해주세요.
 * */

// 1. id 선택자를 활용하여 HTML '#stop' 버튼을 선택하기
// 1. #timer 태그 id 선택자를 활용하여 가져오기
const stopButton = document.getElementById("stop");
const timer = document.getElementById("timer");

// setInterval 내에 콜백함수 구성하기
const callback = () => {
  // 2. 현재 시간 가져오기
  let now = new Date();
  //   const now = padStart(2, 0);
  // 3. 현재 시간을 년/월/일 시:분:초 형태로 나타내기
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  // 배열 + map으로 한 줄 처리
  // map로 각 값을 문자열로 변환후 2자리로 맞추기
  [month, day, hour, minute, second] = [month, day, hour, minute, second].map(
    (num) => String(num).padStart(2, "0")
    // padStart(2,"0") : 두자리 숫자로 표기
  );

  const formatDate = `${year} / ${month} / ${day}\n${hour}:${minute}:${second}`;

  // 4. #timer 태그에 표시하기
  timer.innerText = formatDate;
};

// 5. setInterval 함수에 콜백함수와 시간 전달하여 1초마다 화면 업데이트하고, 반환된 id를 timeId 변수에 저장하기
const timeId = setInterval(callback, 1000);

// #stop 버튼에 클릭 시에 시간 기록 이벤트 추가하기
stopButton.addEventListener("click", () => {
  // 콜백함수 구성하여 클릭 시 시간 기록 이벤트 구성하기
  // 6. createElement를 활용하여 p 태그 생성하기
  const p = document.createElement("p");
  // 7. p 태그에 timer의 텍스트(textContent) 저장하기
  p.textContent = `그대로 멈춰라! ${timer.textContent}`;
  // 8. record id로 요소 가져와 record 변수에 저장하기
  const record = document.getElementById("record");
  // 9. record 요소에 p 태그 자식 요소로 넣기
  record.appendChild(p);
});

// ------------------------------------------------
/*
 const stopButton = document.getElementById('stop');
const timer = document.getElementById('timer');

const callback = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  const formatDate = `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
  timer.innerText = formatDate; // 화면에 표시
};

const timeId = setInterval(callback, 1000);

stopButton.addEventListener("click", () => {
  clearInterval(timeId); // 시간 멈추기

  const p = document.createElement('p'); // p태그 생성
  p.textContent = timer.textContent; // 현재 timer 텍스트 복사

  const record = document.getElementById('record'); // 기록영역
  record.appendChild(p); // 기록 추가
});

 
 */
