
const cakeButton = document.getElementById("candleButton");
const candleHint = document.getElementById("candleHint");
const wishMessage = document.getElementById("wishMessage");

cakeButton.addEventListener("click", () => {
  const alreadyBlownOut = cakeButton.classList.contains("blown-out");

  if (alreadyBlownOut) {
    return;
  }

  cakeButton.classList.add("blown-out");

  candleHint.textContent = "wish made ♡";
  wishMessage.hidden = false;

  // Tiny smoke wisps appear where the flames were.
  document.querySelectorAll(".candle").forEach((candle, index) => {
    const smoke = document.createElement("span");

    smoke.className = "smoke";
    smoke.setAttribute("aria-hidden", "true");
    smoke.textContent = "〰";

    smoke.style.left = "50%";
    smoke.style.animationDelay = `${index * 0.12}s`;

    candle.appendChild(smoke);
  });
});

const spotifyLink = document.getElementById("spotifyLink");

spotifyLink.addEventListener("click", () => {
  spotifyLink.classList.add("playing");
});

/* POLAROID CAMERA INTERACTION */

const polaroidButton = document.getElementById("polaroidButton");
const polaroidPhoto = document.getElementById("polaroidPhoto");
const polaroidHint = document.getElementById("polaroidHint");

if (polaroidButton && polaroidPhoto && polaroidHint) {
polaroidButton.addEventListener("click", () => {
polaroidPhoto.classList.remove("printed");

polaroidHint.textContent = "printing a little memory... ♡";

window.setTimeout(() => {
  polaroidPhoto.classList.add("printed");
  polaroidHint.textContent =
    "one little memory at a time ♡";
}, 250);

});
}
