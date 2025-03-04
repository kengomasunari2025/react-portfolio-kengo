// document.addEventListener("DOMContentLoaded", function() {
//   $("#videoPlay").YTPlayer();
// });

document.addEventListener("DOMContentLoaded", function() {
  $("#videoPlay").YTPlayer();
});

setTimeout(function () {
  $(".script-youtube").fadeOut(2000, function () {
    $(".mainSite").css("display", "flex");
  });
}, 6000);

let isTyping = false;
const typing = (element, sentence) => {
  if (isTyping) return;
  isTyping = true;

  document.querySelector(element).textContent = "";
  [...sentence].forEach((character, index) => {
    setTimeout(() => {
      document.querySelector(element).textContent += character;
      if (index === sentence.length - 1) {
        setTimeout(() => {
          isTyping = false;
        }, 500);
      }
    }, 80 * index);
  });
};
typing("#typing", "Open My Portfolio");
