/**
 * JavaScript 11일차
 * 오늘의 날씨
 *
 * 요구사항
 * - fetch()를 사용하여 OPEN API에 GET 요청을 보내주세요.
 * - GET 요청으로 받은 Response를 활용하여 오늘의 날씨 화면을 구성해주세요.
 */

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
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=37.5665&longitude=126.9780&current_weather=true"
    );
    const weatherData = await response.json();
    const {
      current_weather: { weathercode, temperature },
    } = weatherData;
    writeWeatherText(WeatherCode[weathercode], temperature);
  } catch (e) {
    // 2. try-catch문을 사용하여 에러 처리를 추가 해보세요.
    console.error("🚨 API 오류 발생!", e);
  }
}

getWeather();
