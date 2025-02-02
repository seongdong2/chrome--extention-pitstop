const journalistNameElement = document.querySelector('.media_end_head_journalist_name');

/**
 1. 기자 uri parsing
 2. api 호출로 uri가 등록된 데이터인지 검증
 2-1. 등록되지 않은 기자면 > 3번 > 4번
 2-2. 등록된 기자면 > 3번 스킵 > 사번
 3. (선택) uri를 데이터에 삽입
 4. 기사의 기자 평가 parsing
 5. 평가가 모두 0이 아니면 > 7번 > 8번
 6. 평가가 모두 0이면 > 7번 스킵 > 8번
 7. uri로 평가 추가
 8. uri로 평가 평균 조회
 9. 조회된 평균이 모두 0이면 > 12번
 10. 조회된 평균이 모두 0이 아니면 > 11번
 11. 평균을 chrome storage로 set
 12. "부족한 데이터로 조회가 어렵습니다." 표시
**/

function updateLikeCount() {
  const likeCountElement = document.querySelectorAll('div._reactionModule.u_likeit.nv_notrans span.u_likeit_list_count._count');
  const usefultext = likeCountElement[0].textContent;
  const wowtext = likeCountElement[1].textContent;
  const touchedtext = likeCountElement[2].textContent;
  const analyticaltext = likeCountElement[3].textContent;
  const recommendtext = likeCountElement[4].textContent;

  const usefulcount = parseInt(usefultext);
  const wowcount = parseInt(wowtext);
  const touchedcount = parseInt(touchedtext);
  const analyticalcount = parseInt(analyticaltext);
  const recommendcount = parseInt(recommendtext);

  chrome.storage.local.set({ useful: usefulcount, wow: wowcount, touched: touchedcount, analytical: analyticalcount, recommend: recommendcount }, function(){
  });
}

setTimeout(function() {
    updateLikeCount();
}, 1000); // 1000ms (1초) 후에 실행

if (journalistNameElement) {
  const journalistName = journalistNameElement.innerText.trim();
  chrome.storage.local.set({ journalist: journalistName }, function() {
    console.log("Journalist name saved:", journalistName);
  });
}

