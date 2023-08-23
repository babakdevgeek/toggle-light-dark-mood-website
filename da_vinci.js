const paints = document.querySelectorAll(".paint");
paints.forEach((paint) => {
  let author = paint.dataset.author;
  if (author === "Leonardo Da Vinci") {
    paint.classList.add("after");
  }
});
function dark_mood(icon) {
  document.body.classList.toggle("dark-mood");
  icon.style.transform = "rotate(360deg)";
  if (document.body.classList.contains("dark-mood")) {
    icon.src = "photos/sun.png";
  } else {
    icon.src = "photos/moon.png";
  }
}
function func() {
  console.log("hi");
}
