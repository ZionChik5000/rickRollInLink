const video = document.getElementById("fullscreenVideo");
const button = document.getElementById("startButton");
const overlay = document.getElementById("overlay");

document.body.addEventListener("click", () => {
  overlay.style.display = "none";
  video.style.display = "block";
  video.play();
});
