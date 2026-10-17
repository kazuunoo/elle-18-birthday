
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

const memoryPhotos = [
  "photos/photo1.jpeg",
  "photos/photo2.jpeg",
  "photos/photo3.jpeg",
  "photos/photo4.jpeg"
];

let currentPhoto = 0;

if (polaroidButton && polaroidPhoto && polaroidHint) {
  polaroidButton.addEventListener("click", () => {
    const placeholder = polaroidPhoto.querySelector(".photo-placeholder");
    const caption = polaroidPhoto.querySelector(".polaroid-caption");

    polaroidPhoto.classList.remove("printed");
    polaroidHint.textContent = "printing your memory... ♡";

    window.setTimeout(() => {
      if (placeholder) {
        placeholder.style.display = "none";
      }

      let photo = polaroidPhoto.querySelector(".memory-image");

      if (!photo) {
        photo = document.createElement("img");
        photo.className = "memory-image";
        photo.alt = "A little memory with Elle";
        photo.style.width = "100%";
        photo.style.aspectRatio = "1 / 1";
        photo.style.objectFit = "cover";
        photo.style.display = "block";

        polaroidPhoto.insertBefore(photo, caption);
      }

      photo.onload = () => {
        polaroidPhoto.classList.add("printed");
        polaroidHint.textContent = "a little memory with you ♡";
      };

      photo.onerror = () => {
        polaroidHint.textContent =
          "oops! check the photo filename in GitHub ♡";
      };

      photo.src = memoryPhotos[currentPhoto];

      currentPhoto = (currentPhoto + 1) % memoryPhotos.length;
    }, 250);
  });
}
