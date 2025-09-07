/*
기본 요구사항
- 
1. ‘햄버거 주문서’ 를 클릭하면 `classList.toggle()` 메서드를 통해 ‘추가’, ‘제거’ 버튼이 토글 됩니다.
2. 햄버거 아이템 리스트 배열을 생성해줍니다. 
3. 추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
4. 이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
5. 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
6. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
7. 스타일은 마음껏 수정해도 좋습니다.
*/

// 아이템 리스트 배열
/*
TODO:햄버거 아이템 리스트 배열을 생성해줍니다. 

*/

// 아이템 추가 버튼 클릭 시 호출되는 함수
function addItem() {
  /*
TODO:추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
*/
}

// 아이템 제거 버튼 클릭 시 호출되는 함수
function removeItem() {
  /*
TODO: 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
*/
}

// 아이템 리스트 렌더링 함수
function renderItems() {
  /*
TODO: 아이템 리스트 초기화하는 함수를 만들어주세요.
*/

  items.forEach((item) => {
    /*
    TODO: 배열의 각 아이템을 순회하며 리스트에 추가하는 함수를 만들어주세요.
      */
  });
}

//title '햄버거 주문서' 클릭 시 classList.toggle()메서드 실행
const title = document.getElementById("title");
title.addEventListener("click", function () {
  /*
TODO: style.css 파일의 .show class를 이용하여 토글 기능을 만들어주세요!
*/
});

// 아이템 추가 및 제거 버튼 이벤트 핸들러
document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("removeButton").addEventListener("click", removeItem);

// ------
// module이므로 DOM 파싱 후 실행 (defer와 유사)
(() => {
  // 상태
  let items = [];
  let seq = 0; // 추가 클릭 누적 카운터 (삭제해도 감소하지 않음)

  // DOM 캐시
  const title = document.getElementById("title");
  const btnBox = document.getElementById("btnBox");
  const list = document.getElementById("itemList");
  const addBtn = document.getElementById("addButton");
  const removeBtn = document.getElementById("removeButton");

  // 안전성 체크: 필수 엘리먼트 존재 여부
  if (!title || !btnBox || !list || !addBtn || !removeBtn) {
    console.error("필수 DOM 요소가 없습니다. HTML을 확인하세요.");
    return;
  }

  // 렌더링
  function renderItems() {
    // 성능: fragment로 모아서 한번에 붙이기
    list.innerHTML = "";
    const frag = document.createDocumentFragment();
    items.forEach((item) => {
      const li = document.createElement("li");
      li.className = "item";
      li.textContent = item;
      frag.appendChild(li);
    });
    list.appendChild(frag);
  }

  // 버튼 상태 업데이트 (UX)
  function updateButtons() {
    removeBtn.disabled = items.length === 0;
  }

  // 추가 / 제거
  function addItem() {
    seq += 1;
    items.push(`햄버거 ${seq}`);
    renderItems();
    updateButtons();
  }

  function removeItem() {
    if (items.length === 0) return; // 가드
    items.pop();
    renderItems();
    updateButtons();
  }

  // 토글 패널 (접근성 포함)
  function togglePanel() {
    const shown = btnBox.classList.toggle("show");
    title.setAttribute("aria-expanded", String(shown));
  }

  // 초기 접근성 속성 추가
  title.setAttribute("role", "button");
  title.setAttribute("tabindex", "0");
  title.setAttribute("aria-controls", "btnBox");
  title.setAttribute("aria-expanded", "false");

  // 이벤트 바인딩
  title.addEventListener("click", togglePanel);
  title.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      togglePanel();
    }
  });

  addBtn.addEventListener("click", addItem);
  removeBtn.addEventListener("click", removeItem);

  // 초기 UI
  renderItems();
  updateButtons();
})();
