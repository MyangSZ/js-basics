// 요소 선택 및 배열 선언
const todoList = document.getElementById("todo-list");
const todoForm = document.getElementById("todo-form");
let todoArr = [];

// 할일 추가, 할일 보여주기, 할일 수정하기, 할일 삭제

// 로컬 저장소에 저장히기
function saveTodos() {
  const todoString = JSON.stringify(todoArr);
  localStorage.setItem("myTodos", todoString);
}
// 로컬 저장소에서 가져오기
function loadTodos() {
  const myTodos = localStorage.getItem("myTodos");
  // mytodos 가 없을 때 대비
  if (myTodos !== null) {
    todoArr = JSON.parse(myTodos);
    displayTodos();
  }
}
loadTodos(); // page 열렸을 때 한번 호출

// 할일 삭제하기
function handleTodoDelBtnClick(clickedId) {
  todoArr = todoArr.filter(function (aTodo) {
    return aTodo.todoId !== clickedId;
  });
  displayTodos();
  saveTodos();
}

// 할일 수정하기
// 할일 클릭 시 할일의 id를 받아서 클래스 수정
function handleTodoItemClick(clickedId) {
  todoArr = todoArr.map(function (aTodo) {
    /* todo id값이 클릭 id와 같으면 id값 변경 */
    if (aTodo.todoId === clickedId) {
      return {
        /* 클릭한 todo id가 map에서 나왔을 때 기존 todo내용에 todoDone 반전하여 적용추가 */
        ...aTodo,
        todoDone: !aTodo.todoDone,
      };
    } else {
      return aTodo;
    }
  });
  console.log(todoArr);
  displayTodos();
  saveTodos();
}

// 보여주기
function displayTodos() {
  todoList.innerHTML = ""; //원래 써져있던 내용 지우고 시작.원래 내용 지운후 배열에 새로 추가
  todoArr.forEach(function (aTodo) {
    const todoItem = document.createElement("li");

    // 삭제하기 장치 추가
    const todoDelBtn = document.createElement("span");
    todoDelBtn.textContent = "X";

    todoItem.textContent = aTodo.todoText;

    // X버튼과 li에 대한 title
    todoItem.title = "클릭하면 완료";
    if (aTodo.todoDone) {
      /* todoItem class 주기 
          모든 할일은 처음에 yet class 가짐*/
      todoItem.classList.add("done");
    } else {
      todoItem.classList.add("yet");
    }
    todoDelBtn.title = "클릭하면 삭제";

    // 이벤트 핸들러 등록
    todoItem.addEventListener("click", function () {
      handleTodoItemClick(aTodo.todoId);
    });
    todoDelBtn.addEventListener("click", function () {
      handleTodoDelBtnClick(aTodo.todoId);
    });

    todoItem.appendChild(todoDelBtn);
    todoList.appendChild(todoItem);
  });
}
// 할일 추가
todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 기존기능차단
  const toBeAdded = {
    todoText: todoForm.todo.value,
    todoId: new Date().getTime(),
    todoDone: false,
  };
  todoForm.todo.value = ""; // 벨류 비우기. 추가버튼 누른 후 input 지워짐
  todoArr.push(toBeAdded);
  displayTodos(); // 할일 추가 될 시 보여주기에 호출
  // console.log(todoArr);

  // 로컬스토리지 저장 시 호출
  saveTodos();
});
