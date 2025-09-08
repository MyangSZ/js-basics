- 요구사항 :

  - fetch()를 완성하여 OPEN API에 GET 요청을 보내주세요.
  - GET 요청으로 받은 Response를 활용하여 weatherData에 응답 바디에서 값을 가져와 JavaScript 객체로 만들어주세요.
  - `writeWeatherText` 함수를 활용하여 오늘의 날씨 화면을 구성해주세요.
  - <details><summary> 제공 코드 설명 </summary>

  - WeatherCode
    - 내용: 날씨 코드를 날씨 텍스트로 바꿔주는 객체입니다.
    - 구성
      ```json
      {
        "0": "맑음",
        "1": "부분적으로 흐림",
        "2": "흐림",
        "3": "구름 낀 흐림",
        "45": "엷은 안개",
        "48": "서리 끼는 안개",
        "51": "약한 이슬비",
        "53": "보통 이슬비",
        "55": "강한 이슬비",
        "56": "어는 약한 이슬비",
        "57": "어는 강한 이슬비",
        "61": "약한 비",
        "63": "보통 비",
        "65": "강한 비",
        "66": "어는 약한 비",
        "67": "어는 강한 비",
        "71": "약한 눈",
        "73": "보통 눈",
        "75": "강한 눈",
        "77": "소량의 눈송이",
        "80": "약한 소나기",
        "81": "보통 소나기",
        "82": "강한 소나기",
        "85": "약한 눈 소나기",
        "86": "강한 눈 소나기",
        "95": "약한~보통 천둥번개",
        "96": "약한 천둥번개 + 약한 우박",
        "99": "강한 천둥번개 + 강한 우박"
      }
      ```
    - 예시
      ```jsx
      WeatherCode[0] = "맑음";
      ```
  - writeWeatherText
    - 전달인자: 날씨(string), 온도(string 혹은 number)
    - 내용: weather id를 갖는 요소에 내용을 구성하여 화면을 구성합니다.
  - getWeather
    - 전달인자: 없음
    - 내용: fetch를 활용하여 데이터를 받아와 weatherData 변수에 저장합니다.

  ```jsx
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
      fetch();
      let weatherData;
      const {
        current_weather: { weathercode, temperature },
      } = weatherData;
      writeWeatherText(WeatherCode[weathercode], temperature);
    } catch (e) {
      // 2. try-catch문을 사용하여 에러 처리를 추가 해보세요.
    }
  }

  getWeather();
  ```

  </details>

- 복습할 개념 체크 리스트
  - [ ] fetch()
  - [ ] async/await
  - [ ] Promise
  - [ ] try-catch
  - [ ] HTTP 메서드 GET
  - [ ] HTTP 요청/응답
  - [ ] DOM 메서드
