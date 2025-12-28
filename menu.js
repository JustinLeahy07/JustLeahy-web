// Getting hamburguer menu in small screens
const menu = document.getElementById("menu");
const ulMenu = document.getElementById("ulMenu");

function menuToggle() {
  menu.classList.toggle("h-48");
}

// Browser resize listener
window.addEventListener("resize", menuResize);

// Portfolio dropdown toggle for touch devices and keyboard users
const portfolioBox = document.getElementById("portfolioBox");
const portfolioTrigger = document.getElementById("portfolioDropView");
const portfolioDropdown = document.getElementById("portfolioDropdown");

if (portfolioTrigger && portfolioBox && portfolioDropdown) {
  portfolioTrigger.addEventListener("click", (event) => {
    event.preventDefault();
    const isOpen = portfolioBox.classList.toggle("open");
    portfolioTrigger.setAttribute("aria-expanded", isOpen);
  });

  document.addEventListener("click", (event) => {
    if (!portfolioBox.contains(event.target)) {
      portfolioBox.classList.remove("open");
      portfolioTrigger.setAttribute("aria-expanded", "false");
    }
  });

  portfolioTrigger.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      portfolioBox.classList.remove("open");
      portfolioTrigger.setAttribute("aria-expanded", "false");
      portfolioTrigger.focus();
    }
  });
}

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