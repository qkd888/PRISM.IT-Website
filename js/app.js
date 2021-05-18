

//******************************************* */
//**************** MOBILE NAV *************** */

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

navToggle.addEventListener("click", () => {
    window.addEventListener("click", (e) => {
        e.target !== navToggle && mobileNav.classList.contains("show-mobile-nav") ?
        mobileNav.classList.remove("show-mobile-nav") : null
    })
    if (
        mobileNav.classList.contains("show-mobile-nav")) {
        mobileNav.classList.remove("show-mobile-nav")    
        } else if (!mobileNav.classList.contains("show-mobile-nav")) {
            mobileNav.classList.add("show-mobile-nav")
        } else {
            null
        }
})

//********************************************** */
//************ FLICKETY ************************** */

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'center',
  contain: true
});



// navToggle.addEventListener('click', () => {
//     window.addEventListener('click', (e) => {
//         e.target !== navToggle && mobileNav.classList.contains('show-mobile-nav') ?
//         mobileNav.classList.remove('show-mobile-nav') : null
//     })
//     if (mobileNav.classList.contains('show-mobile-nav')) {
//         mobileNav.classList.remove('show-mobile-nav')
//     } else if (!mobileNav.classList.contains('show-mobile-nav')) {
//         mobileNav.classList.add('show-mobile-nav')
//     } else {
//         null
//     }
// })