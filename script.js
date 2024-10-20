window.addEventListener("scroll", function() {
  const rows = document.querySelectorAll(".row");
  for (let row of rows) {
    const rect = row.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (isVisible) {
      row.classList.add("fade-in");
    }
  }
});
