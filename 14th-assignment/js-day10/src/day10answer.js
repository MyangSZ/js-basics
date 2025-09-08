/* import "./src/js-day10.css";
import WeatherCode from "./WeatherCode.json"; // 날씨 코드 -> 텍스트 매핑 객체

// DOM에 내용을 추가하는 함수
const writeWeatherText = (weather, temperature, windspeed, time) => {
  // #weather 요소가 없으면 만들어줌 (개발 환경에서 빠르게 테스트 가능)
  let weatherContainer = document.querySelector("#weather");
  if (!weatherContainer) {
    weatherContainer = document.createElement("pre"); // 줄바꿈 보존
    weatherContainer.id = "weather";
    weatherContainer.style.whiteSpace = "pre-wrap";
    document.body.appendChild(weatherContainer);
  }

  weatherContainer.innerText = `🌡️ 온도: ${temperature}℃
🌤️ 날씨: ${weather}
💨 풍속: ${typeof windspeed !== "undefined" ? windspeed + " m/s" : "-"}
🕒 관측 시각: ${time ? formatTime(time) : "-"}`;
};

// ISO 문자열(예: "2025-09-08T06:00:00Z")을 사람이 읽기 좋은 형태로 변환
const formatTime = (isoString) => {
  try {
    const d = new Date(isoString);
    // 한국형 표기, 24시간 형식
    return d.toLocaleString("ko-KR", { hour12: false });
  } catch {
    return isoString;
  }
};

async function getWeather() {
  const url =
    "https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true";

  try {
    // 1) API 호출 (fetch는 Promise 반환하므로 await 사용)
    const response = await fetch(url);

    // 2) HTTP 응답 상태 검사
    if (!response.ok) {
      throw new Error(
        `네트워크 응답 오류: ${response.status} ${response.statusText}`
      );
    }

    // 3) JSON 파싱
    const weatherData = await response.json();

    // 4) 필요한 데이터 추출 (API 문서에 따르면 current_weather 객체가 옴)
    const { current_weather } = weatherData;
    if (!current_weather) {
      throw new Error("current_weather 데이터가 없습니다.");
    }

    const { temperature, weathercode, windspeed, time } = current_weather;

    // 5) weathercode 숫자를 텍스트로 변환 (WeatherCode.json에서 불러옴)
    const weatherText =
      WeatherCode[weathercode] ?? `알 수 없음 (code: ${weathercode})`;

    // 6) 화면에 출력
    writeWeatherText(weatherText, temperature, windspeed, time);
  } catch (err) {
    // 에러 처리: 콘솔에 찍고 화면에 에러 메시지 표시
    console.error("날씨 정보 불러오기 실패:", err);
    const weatherContainer =
      document.querySelector("#weather") ||
      document.body.appendChild(document.createElement("pre"));
    weatherContainer.id = "weather";
    weatherContainer.innerText = `날씨 정보를 불러오지 못했습니다.\n오류: ${err.message}`;
  }
}

getWeather(); */

// -------- answer code -up------------------------------

/**
 * JavaScript 11일차
 * 오늘의 날씨
 *
 * 요구사항
 * - fetch()를 사용하여 OPEN API에 GET 요청을 보내주세요.
 * - GET 요청으로 받은 Response를 활용하여 오늘의 날씨 화면을 구성해주세요.
 */

/* 코드 흐름
1. getWeater() 호출
2. fetch(url) api get 요청
3. 받은 응답 response.json() 파싱. weatherData 객체 얻기
4. weatherData.current_weather 안 weathercode와 temperature를 중첩 구조분해 할당으로 꺼내기
5. WeatherCode[weathercode] 숫자코드를 한글 텍스트로 변환
6. writeWeatherText()가 #weather요소의 innerText를 바꿔 화면에 표시
7. 네트워크 에러나 JSON 파싱 에러 등 예외 생기면 catch 블록에서 console.error 에러 출력 */

import "./style.css";
import WeatherCode from "./WeatherCode.json"; // 날씨 코드 변환용 객체

// DOM에 내용을 추가하는 함수
const writeWeatherText = (weather, temperature) => {
  // DOM에 추가하는 코드
  const weatherContainer = document.querySelector("#weather");
  weatherContainer.innerText = `🌡️ 온도: ${temperature}℃
  🌤️ 날씨: ${weather}
  `;
};

async function getWeather() {
  // 1. 여기에 fetch를 사용하여 날씨 정보를 받아아 weatherData 변수에 저장해보세요.
  try {
    // fetch() 네트워크 요청 보내기
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true"
    );
    const weatherData = await response.json(); // json을 js객체로 변환

    /* 중첩 구조분해할당
    weatherData.current_weather가 undefined면 Cannotdestructure property ... of undefined 같은 런탕미 에러 발생 (안전검사 필요)) */
    const {
      current_weather: { weathercode, temperature },
    } = weatherData;
    /* WeatherCode는 JSON객체
    WeatherCode[weathercode]가 undefined면 화면에 undefined or '알수없음' */
    writeWeatherText(WeatherCode[weathercode], temperature);
  } catch (e) {
    // 2. try-catch문을 사용하여 에러 처리를 추가 해보세요.
    console.error("🚨 API 오류 발생!", e);
  }
}

getWeather();
