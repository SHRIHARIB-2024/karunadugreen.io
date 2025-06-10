// gotop.js
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".backToTop");

  window.addEventListener("scroll", () => {
    buttons.forEach(btn => {
      if (window.scrollY > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
  });

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
});
