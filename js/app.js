

//******************************************* */
//**************** MOBILE NAV *************** */

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");


navToggle.addEventListener("click", () => {
    if (mobileNav.classList.contains("show-mobile-nav")) {
        mobileNav.classList.remove("show-mobile-nav");
    } else {
        mobileNav.classList.add("show-mobile-nav");
    };
});

window.onclick = (e) => {
    if (e.target.classList.contains("show-mobile-nav")) {
        e.target.classList.remove("show-mobile-nav");
    };
};

//********************************************** */
//************ FLICKETY ************************** */

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true
});

