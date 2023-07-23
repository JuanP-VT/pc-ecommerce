/**
 * The displayFeedbackEffect function is responsible for showing a feedback animation when an item is successfully added to the cart.
 * It manipulates the DOM to apply CSS animations and transitions for the feedback effect.
 *
 * @function
 *
 * @returns {void} This function does not return any value.
 */
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
