/**
 * JavaScript 8일차 과제
 * 템플릿 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 신입 객체는 다음과 같습니다.
  {
    name: '정디버그',
    position: '주니어 프론트엔드 개발자',
    department: '기술개발실',
    contact: {
      email: 'debug@example.com',
      phone: '010-1234-5678',
    },
    mentor: {
      name: '김개발',
      position: '시니어 프론트엔드 개발자',
      contact: {
        email: 'dev@example.com',
        phone: '010-4242-8811',
      },
    },
  }
 * - 신입 객체를 받아 안내 문구를 반환하는 함수를 만들어주세요.
  [Welcome, 정디버그님 👋]

  기술개발실의 주니어 프론트엔드 개발자로 입사하신 것을 진심으로 환영합니다!

  문의 사항이 있을 경우, 멘토 김개발(시니어 프론트엔드 개발자)에게 편하게 연락 주세요.
  📧 이메일: dev@example.com
  📱 연락처: 010-4242-8811
 */

const newEmployee = {
  name: "정디버그",
  position: "주니어 프론트엔드 개발자",
  department: "기술개발실",
  contact: {
    email: "debug@example.com",
    phone: "010-1234-5678",
  },
  mentor: {
    name: "김개발",
    position: "시니어 프론트엔드 개발자",
    contact: {
      email: "dev@example.com",
      phone: "010-4242-8811",
    },
  },
};

// 구조분해할당을 활용하여 매개변수에 전달된 객체에서 필요한 정보를 꺼내주세요.
const createWelcomeMessage = ({
  name,
  department,
  position,
  mentor: {
    name: mentorName,
    position: mentorPosition,
    contact: { email: mentorEmail = "이메일 없음", phone: mentorPhone },
  },
}) => {
  // 여기에 코드를 작성해주세요.
  return `
  [Welcome, ${name}님 👋]

 ${department}의 ${position}로 입사하신 것을 진심으로 환영합니다!

 문의 사항이 있을 경우, 멘토 ${mentorName}(${mentorPosition})에게 편하게 연락 주세요.
 📧 이메일: ${mentorEmail}
 📱 연락처: ${mentorPhone}`;
};

console.log(createWelcomeMessage(newEmployee));
// 기대 출력
// [Welcome, 정디버그님 👋]
//
// 기술개발실의 주니어 프론트엔드 개발자로 입사하신 것을 진심으로 환영합니다!
//
// 문의 사항이 있을 경우, 멘토 김개발(시니어 프론트엔드 개발자)에게 편하게 연락 주세요.
// 📧 이메일: dev@example.com
// 📱 연락처: 010-4242-8811

// -------------------------------------
/* 
1. contact: { email: mentorEmail, phone: mentorPhone }처럼 멘토 전용 변수명으로 매핑한 건 명확성·충돌 회피
2. 구조분해할당 : 객체나 배열에서 원하는 속성(property)이나 요소(element)를 꺼내 새로운 변수로 쉽게 할당할 수 있는 JavaScript의 문법
- 객체 구조분해할당 기본 문법 : {속성명1, 속성명2} = 객체
- 배열 구조분해할당 기본 문법 : [요소1, 요소2] = 배열

왜 구조분해할당을 사용해야 하나요?
- 코드 간결성: 객체나 배열의 속성에 접근하기 위해 객체.속성을 반복해서 쓰는 대신, 변수로 바로 접근할 수 있어 코드가 훨씬 깔끔해집니다.
- 가독성: 변수 이름만 봐도 어떤 값이 담겨 있는지 쉽게 파악할 수 있어 코드를 읽기 편해집니다.
- 유지보수 용이성: 객체나 배열의 구조가 변경되어도 필요한 부분만 수정하면 되므로 유지보수가 쉽습니다
*/
