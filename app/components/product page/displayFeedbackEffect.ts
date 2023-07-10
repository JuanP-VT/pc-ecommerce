export default function displayFeedbackEffect() {
  const target = document.querySelector("#feedback");
  if (target) {
    target.textContent = "Added To Cart";
    target.classList.add("animate-bounce");
    setTimeout(() => {
      target.classList.remove("animate-bounce");
    }, 1500);

    setTimeout(() => {
      target.classList.add("translate-x-full");
    }, 2500);
    setTimeout(() => {
      target.textContent = "";
      target.classList.remove("translate-x-full");
    }, 2800);
  }
}
