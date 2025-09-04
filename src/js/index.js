const nameEl = document.getElementById("name");
const imgEl = document.getElementById("profileImg");
const bioEl = document.getElementById("bio");
const cardEl = document.getElementById("profileCard");

nameEl.addEventListener("click", () => {
    bioEl.style.display = "none";
  });
  
// Show bio when clicking on the image
imgEl.addEventListener("click", () => {
bioEl.style.display = "block";
});

document.getElementById("redBtn").addEventListener("click", () => {
  cardEl.style.backgroundColor = "red";
});

document.getElementById("blueBtn").addEventListener("click", () => {
  cardEl.style.backgroundColor = "blue";
});

document.getElementById("greenBtn").addEventListener("click", () => {
  cardEl.style.backgroundColor = "green";
});