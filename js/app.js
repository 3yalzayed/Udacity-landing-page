/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Navigation Global Variables
const navigation = document.getElementById('navbar__list');

// Section Global Variables
const sections = document.querySelectorAll('section');

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

var nav;
function buildNav(){
    nav = 
            '<li> <a href="#section1" class="menu__link">section1</a> </li>' +
            '<li> <a href="#section2" class="menu__link">section2</a> </li>' +
            '<li> <a href="#section3" class="menu__link">section3</a> </li>' +
            '<li> <a href="#section4" class="menu__link">section4</a> </li>' +
            '<li> <a href="#section5" class="menu__link">section5</a> </li>';
    // put the code 
   navigation.innerHTML = nav;       
};
    

// build the nav

buildNav()

// Add class 'active' to section when near top of viewport
// get the largest value 


function isInViewport(el) {

  let rect = el.getBoundingClientRect();
  
  let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  let windowWidth = (window.innerWidth || document.documentElement.clientWidth);

  let topView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  let buttomView = (rect.bottom <= windowWidth) && ((rect.bottom + rect.width) >= 0);
  
  return (topView && buttomView);
}

window.addEventListener("scroll", function (e) {
  for (i = 1; i <= sections.length; i++) {
    const section = document.getElementById("section" + i);
    if (isInViewport(section)) {
      section.classList.add("your-active-class");
      section.style.cssText = "background-color: grey;"
    } else {
      section.classList.remove("your-active-class");
      section.style.removeProperty("background-color");
    }
  };
}, false);
 
// Scroll to anchor ID using scrollTO event

for (i = 0; i <= sections.length ; i++) {
  const sectione = document.getElementById("section" + i);
  const check = sectione.addEventListener("scroll",function(event) {
      if (isInViewport(section)) {
        sectione.style.cssText = "background-color: grey;"
      } else {
        sectione.style.cssText = "background-color: black;"
      }
  },false);
  check.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
};