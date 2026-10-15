
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
