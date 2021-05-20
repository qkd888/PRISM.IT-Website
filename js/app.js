

//******************************************* */
//**************** MOBILE NAV *************** */

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

// Listen for a click event on the navToggle
// When navToggle is clicked. - if mobileNav is showing, hide it. if mobileNav is hidden, show it.
// Listen for a click event on the navToggle & Body
// Remove show-mobile-nav class when clicked on the navToggle or Body

navToggle.addEventListener("click",() => {
    if (mobileNav.classList.contains("show-mobile-nav")) {
        mobileNav.classList.remove("show-mobile-nav")
    } else {
        mobileNav.classList.add("show-mobile-nav")
        document.body.addEventListener("click", () => {
        })
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
