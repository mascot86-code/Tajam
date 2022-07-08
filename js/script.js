document.addEventListener("DOMContentLoaded", () => {
  let burger = document.querySelector(".burger");
  let canvas = document.querySelector(".off-canvas");
  let close = document.querySelector(".close");

  burger.addEventListener("click", () => {
    canvas.style.display = "block";
  });

  close.addEventListener("click", () => {
    canvas.style.display = "none";
  });
});
