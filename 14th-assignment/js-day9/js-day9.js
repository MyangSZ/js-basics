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
/*TODO:햄버거 아이템 리스트 배열을 생성해줍니다. */
const burgerItems = [
  "불고기버거",
  "데리버거",
  "새우버거",
  "베이컨토마토디럭스",
  "와퍼주니어",
];
// 화면 출력할 현재 선택된 항목들
const items = [];
// 추가버튼 클릭시 증가할 숫자 +1
let nextNumber = 1;

// DOM 요소 선택
const itemListEl = document.getElementById("itemList");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
// const title = document.getElementById("title");
// 아이템 추가 버튼 클릭 시 호출되는 함수
function addItem() {
  /*TODO:추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
*/
  // 배열에 현재 nextNumber 추가하고 다음번호 증가
  // items.push(nextNumber);
  // nextNumber += 1;

  // 랜덤 메뉴 추가
  const randomIndex = Math.floor(Math.random() * burgerItems.length);
  const randomBurger = burgerItems[randomIndex];

  // 배열에 추가
  items.push(randomBurger);
  // 변경사항 렌더
  renderItems();
}

// 아이템 제거 버튼 클릭 시 호출되는 함수
function removeItem() {
  /* TODO: 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다. */
  if (items.length === 0) {
    // 더이상 없으면 아무동작 하지 않음
    alert("추가된 메뉴가 없습니다!");
    return;
  }
  items.pop();
  renderItems();
}

// 아이템 리스트 렌더링 함수
function renderItems() {
  /* TODO: 아이템 리스트 초기화하는 함수를 만들어주세요. */
  itemListEl.innerHTML = "";

  // 아이템 순회하며 li 생성
  items.forEach((burger) => {
    /* TODO: 배열의 각 아이템을 순회하며 리스트에 추가하는 함수를 만들어주세요. */
    const li = document.createElement("li");
    // 보이는 텍스트
    // li.textContent = num;

    // 햄버거 이름 출력
    li.textContent = burger;

    // 스타일 적용 위한 클래스
    li.classList.add("item", "menu-item");
    // li.classList.add("menu-item");

    itemListEl.appendChild(li);
  });
}

//title '햄버거 주문서' 클릭 시 classList.toggle()메서드 실행
const title = document.getElementById("title");
title.addEventListener("click", function () {
  /* TODO: style.css 파일의 .show class를 이용하여 토글 기능을 만들어주세요! */
  addButton.classList.toggle("show");
  removeButton.classList.toggle("show");
});

// 아이템 추가 및 제거 버튼 이벤트 핸들러
document.getElementById("addButton").addEventListener("click", addItem);
document.getElementById("removeButton").addEventListener("click", removeItem);

// 초기 랜더
// renderItems();
