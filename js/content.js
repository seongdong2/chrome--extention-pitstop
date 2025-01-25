const journalistNameElement = document.querySelector('.media_end_head_journalist_name');

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
    console.log('쓸쓸정보:', usefulcount);
    console.log('흥미진진:', wowcount);
    console.log('공감백배:', touchedcount);
    console.log('분석탁월:', analyticalcount);
    console.log('후속강추:', recommendcount);
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

