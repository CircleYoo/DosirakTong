// 이미지 및 리소스 로드 후 코드실행
window.onload = function () {
  let htmlTag = document.querySelector("html");
  // 모바일 메뉴 버튼 처리
  // 1. 모바일 버튼을 찾아서 저장한다.
  let mbBt = document.querySelector(".mb-bt");
  // 2. 모바일 메뉴를 찾아서 저장한다.
  let mbNav = document.querySelector(".mb-nav");
  // 3. 로고를 찾아서 저장한다.
  let logo = document.querySelector(".logo");
  // 4. header 를 찾아서 저장한다.
  let header = document.querySelector(".header");
  // 5. gnb > li > a
  let gnbA = document.querySelectorAll(".gnb>li>a");
  // 6. mb-bt span
  let mbBtSpan = document.querySelectorAll(".mb-bt span");

  // 4. 모바일 버튼 클릭을 하면
  mbBt.addEventListener("click", function () {
    // html scroll 없애기
    htmlTag.classList.toggle("active");
    //  로고에 active 클래스를 추가한다.
    logo.classList.toggle("active-blue");
    //  모바일 버튼에 active 클래스를 추가한다.
    mbBt.classList.toggle("active");
    // 모바일 메뉴에 active 클래스를 추가한다.
    mbNav.classList.toggle("active");
    mbBtSpan.forEach((item) => {
      item.classList.add("active");
    });
  });
  // 화면 리사이징 처리
  window.addEventListener("resize", function () {
    // window 의 화면 안쪽 너비 체크
    // console.log(window.innerWidth);
    let wW = window.innerWidth;
    if (wW > 1080) {
      // html scroll 없애기
      htmlTag.classList.remove("active");

      //  모바일 버튼에 active 클래스를 제거한다.
      mbBt.classList.remove("active");
      // 모바일 메뉴에 active 클래스를 제거한다.
      mbNav.classList.remove("active");

      // 스크롤이 되었는지 안되었는지에 따라서 처리 분리
      let scT = window.document.documentElement.scrollTop;
      if (scT > 100) {
        // 스크롤이 되었으므로
        mbBtSpan.forEach((item) => {
          item.classList.add("active");
        });
      } else {
        // 모바일 버튼 아이콘 색상 짙게(#fff)
        mbBtSpan.forEach((item) => {
          item.classList.remove("active");
        });
      }

      logo.classList.remove("active-blue");
    }
  });
  // window 스크롤 처리
  window.addEventListener("scroll", function () {
    // 스크롤바가 스크롤이 된 픽셀 값을 파악
    let scT = window.document.documentElement.scrollTop;
    // 조금이라도 스크롤을 했다면 처리한다.
    if (scT > 100) {
      header.classList.add("active");
      logo.classList.add("active");
      gnbA.forEach((item) => {
        item.classList.add("active");
      });
      mbBtSpan.forEach((item) => {
        item.classList.add("active");
      });
    } else {
      header.classList.remove("active");
      logo.classList.remove("active");
      gnbA.forEach((item) => {
        item.classList.remove("active");
      });
      mbBtSpan.forEach((item) => {
        item.classList.remove("active");
      });
    }
  });
  // 화면 Reload 시 처리
  let scT = window.document.documentElement.scrollTop;
  if (scT > 100) {
    header.classList.add("active");
    logo.classList.add("active");
    gnbA.forEach((item) => {
      item.classList.add("active");
    });
    mbBtSpan.forEach((item) => {
      item.classList.add("active");
    });
  }

  new Swiper(".swvisual");
};
