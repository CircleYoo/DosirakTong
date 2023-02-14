// 이미지 및 리소스 로드 후, 코드 실행
window.onload = function () {
  // 모바일 메뉴 버튼 처리
  // 1. 모바일 버튼을 찾아서 저장한다.
  let mbBtn = document.querySelector(".mb-bt");

  // 2. 모바일 메뉴를 찾아서 저장한다.
  let mbNav = document.querySelector(".mb-nav");

  // 3. 로고를 찾아서 저장한다.
  let logo = document.querySelector(".logo");

  // 4. 헤더를 찾아서 저장한다.
  let header = document.querySelector(".header");

  // 5. .gnb > li > a
  let $gnbA = document.querySelectorAll(".gnb>li>a");

  // 6. 모바일 버튼 클릭을 하면 모바일 메뉴에 active 클래스를 추가한다.
  mbBtn.addEventListener("click", function () {
    // 모바일 버튼, 메뉴에 acitve 클래스를 추가한다.
    mbBtn.classList.toggle("active");
    mbNav.classList.toggle("active");
    logo.classList.toggle("active-blue");
  });

  // 화면 리사이징 처리
  window.addEventListener("resize", function () {
    // 윈도우의 화면 안쪽 너비 체크
    let wWidth = window.innerWidth;
    if (wWidth > 1080) {
      // 모바일 버튼, 메뉴에 acitve 클래스를 제거한다.
      mbBtn.classList.remove("active");
      mbNav.classList.remove("active");
    }
  });
  // 윈도우 스크롤 처리
  window.addEventListener("scroll", function () {
    // 스크롤바가 스크롤이 된 픽셀 값을 파악
    let $scrollTop = this.document.documentElement.scrollTop;
    // 조금이라도 스크롤을 했다면 처리한다.
    if ($scrollTop > 100) {
      header.classList.add("active");
      logo.classList.add("active");
      $gnbA.forEach((item, idx, arr) => {
        item.classList.add("active");
      });
    } else {
      header.classList.remove("active");
      logo.classList.remove("active");
      $gnbA.forEach((item, idx, arr) => {
        item.classList.remove("active");
      });
    }
  });
};
