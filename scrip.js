const photos = [
  "photos/IMG_7847.jpg",
  "photos/photo2.jpg",
  "photos/photo3.jpg",
  "photos/photo4.jpg"
];

let photoIndex = 0;

const photoElement = document.getElementById("photo");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const responseText = document.getElementById("response-text");
const mainText = document.getElementById("main-text");
const subText = document.getElementById("sub-text");
const questionText = document.getElementById("question-text");

// Auto-cycle photos every 3 seconds
setInterval(() => {
  photoIndex = (photoIndex + 1) % photos.length;
  photoElement.src = photos[photoIndex];
}, 3000);

// YES button
yesBtn.addEventListener("click", () => {
  mainText.textContent = "You said yes!!! 🌸💖";
  subText.textContent = "My love for you blooms stronger every day — just like lilies.";
  questionText.textContent = "Happy Valentine’s Day, my beautiful lily 🌸";
  responseText.textContent = "I can’t wait to give you real flowers instead of virtual ones 😘💐";

  yesBtn.style.display = "none";
  noBtn.style.display = "none";
});

// NO button runs away 😏
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// If she somehow clicks no 😂
noBtn.addEventListener("click", () => {
  responseText.textContent = "Nice try 😏 You’re my Valentine, lily lover 💖🌸";
});

