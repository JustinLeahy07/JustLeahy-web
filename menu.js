// Getting hamburguer menu in small screens
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
  menu.classList.toggle("h-48");
}

// Browser resize listener
window.addEventListener("resize", menuResize);

// Resize menu if user changing the width with responsive menu opened
function menuResize() {
  // First get the size from the window
  const window_size = window.innerWidth || document.body.clientWidth;
  if (window_size > 640) {
    menu.classList.remove("h-48");
	
	document.querySelector("#nav > div > div.ml-auto.md\\:hidden.flex.items-center.justify-start > button > div > span:nth-child(1)").className = "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5";
	document.querySelector("#nav > div > div.ml-auto.md\\:hidden.flex.items-center.justify-start > button > div > span:nth-child(2)").className = "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
	document.querySelector("#nav > div > div.ml-auto.md\\:hidden.flex.items-center.justify-start > button > div > span:nth-child(3)").className = "block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out translate-y-1.5";

  }
}