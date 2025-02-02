[크롬 익스텐션]
- 네이버에서 기자가 받은 리액션 표시
- contens.js에서 크롬 local로 정보 수집
- popup.js 에서 크롬 local 값 정보 사용

popup.html
- 요청과 동시에 content.js 수행
- 팝업 창 클릭 시 popup.js 수행

content.js
- 리액션 local로 key:value 저장

popup.js
- local에 정상 저장된 result에서 key:value 수집
- 표 그리는 chart.js 활용
