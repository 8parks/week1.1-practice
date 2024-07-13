// function setupHideFunction() {
//     const closeButton = document.querySelector(".xbox"); //<div class="xbox">X</div>
//     closeButton.addEventListener("click", function () {
//       const mainBox = document.querySelector(".mainbox");
//       mainBox.style.display = "none";
//     });
// }
   
// setupHideFunction();

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton"); //document.querySelector(#toggleButton")
    const mainBox = document.querySelector(".mainbox"); //document.getElementsByClassName("mainbox")
   
    toggleButton.addEventListener("click", function () {
      // mainbox의 표시 상태를 토글
        if (mainBox.style.display === "flex") {
        mainBox.style.display = "none"; // mainbox를 보이게 설정
        toggleButton.textContent = "보임"; // 버튼 텍스트를 '숨김'으로 변경
        } else {
        mainBox.style.display = "flex"; // mainbox를 숨기기
        toggleButton.textContent = "숨김"; // 버튼 텍스트를 '보임'으로 변경
        }
    });
});
   