

//******************************************* */
//**************** MOBILE NAV *************** */

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

navToggle.addEventListener('click', () => {
    window.addEventListener('click', (e) => {
        e.bubbles
        e.target !== navToggle && mobileNav.classList.contains('show-mobile-nav') ?
        mobileNav.classList.remove('show-mobile-nav') : null
    })
    if (mobileNav.classList.contains('show-mobile-nav')) {
        mobileNav.classList.remove('show-mobile-nav')
    } else if (!mobileNav.classList.contains('show-mobile-nav')) {
        mobileNav.classList.add('show-mobile-nav')
    } else {
        null
    }
})

// window.onclick = (e) => {
//     if (e.target.classList.contains("show-mobile-nav")) {
//         e.target.classList.remove("show-mobile-nav");
//     };
// };

// window.addEventListener("click", () => {
//     if (window.classList.contains("show-mobile-nav")) {
//         window.classList.remove("show-mobile-nav");
//     };
// });

//********************************************** */
//************ FLICKETY ************************** */

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true
});

