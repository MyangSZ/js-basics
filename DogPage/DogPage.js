const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/50";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

// id 선택 해두기
const header = document.getElementById("header");
const main = document.getElementById("main");
const input = document.getElementById("filter-text");
const button = document.getElementById("filter-button");
const select = document.getElementById("filter-select");

// 현재 화면에 표시되는 강이지 배열
const currentDogs = [];

// 웹브라우저 로드 시 동작
window.addEventListener("load", function () {
  // 강아지 사진 뿌리기
  request1.open("get", apiRandomDogs);
  request1.addEventListener("load", function () {
    const response = JSON.parse(request1.response);
    // 배열 내용을 화면에 뿌리는 작업
    response.message.forEach(function (item) {
      // 강이지 소스 추가
      currentDogs.push(item);
      // div 만들어서 메인에 추가
      const dogImgDiv = document.createElement("div");
      dogImgDiv.classList.add("flex-item");
      dogImgDiv.innerHTML = ` 
        <img src=${item}>`;
      main.appendChild(dogImgDiv);
    });
  });
  request1.send();

  // 견종 정보 뿌리기
  request2.open("get", apiAllBreeds);
  request2.addEventListener("load", function () {
    const response = JSON.parse(request2.response);
    // 견종정보 key값 받아와서 배열 반환
    // console.log(Object.keys(response.message));

    //forEach문 활용하여 견졍배열 select에 뿌려주기
    Object.keys(response.message).forEach(function (item) {
      const option = document.createElement("option");
      option.textContent = item;
      option.value = item;
      select.appendChild(option);
    });
  });
  request2.send();
});

// 필터링 버튼 클릭시 작동
button.addEventListener("click", function () {
  // 필터링 버튼 클릭 시 메인영역 초기화
  main.innerHTML = "";
  // input 적흰 내용 기반. indexOf : 문자열메소드. 주어진 문자가 포함되면 반환, 포함하지 않으면 -1반환
  // 견종 정보안에 input쓰여진 내용이 포함되어 있으면 필터링, 포함되어 있지 않으면 제외
  // filterDogs로 저장
  let filterDogs = currentDogs.filter(function (item) {
    return item.indexOf(input.value) !== -1;
  });

  filterDogs.forEach(function (item) {
    const option = document.createElement("option");
    option.textContent = item;
    option.value = item;
    select.appendChild(option);
  });
});
