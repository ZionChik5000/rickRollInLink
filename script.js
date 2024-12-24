const video = document.getElementById("fullscreenVideo");
const button = document.getElementById("startButton");

button.addEventListener("click", () => {
  button.style.display = "none";
  video.style.display = "block";
  video.play();
});
