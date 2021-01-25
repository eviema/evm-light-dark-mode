const nav = document.getElementById("nav");
const navMobile = document.getElementById("nav-mobile");
const burgerIcon = document.getElementById("burger-icon");
const navLinks = document.getElementById("nav-links");
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById("toggle-icon");
const textBox = document.getElementById("text-box");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function setImageByTheme(theme) {
  image1.src = `img/undraw_proud_coder_${theme}.svg`;
  image2.src = `img/undraw_feeling_proud_${theme}.svg`;
  image3.src = `img/undraw_conceptual_idea_${theme}.svg`;
}

function toggleDarkLightMode(theme) {
  const isDark = theme === DARK_THEME;
  const navBar = nav.hidden ? navMobile : nav;
  navBar.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 50%)"
    : "rgb(255 255 255 / 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255 / 50%)"
    : "rgb(0 0 0 / 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? setImageByTheme(DARK_THEME) : setImageByTheme(LIGHT_THEME);
}

function switchTheme(event) {
  const nextTheme = event.target.checked ? DARK_THEME : LIGHT_THEME;
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  toggleDarkLightMode(nextTheme);
}

toggleSwitch.addEventListener("change", switchTheme);

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(DARK_THEME);
  }
}

function toggleBurgerIcon() {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

burgerIcon.addEventListener("click", toggleBurgerIcon);
