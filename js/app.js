

//******************************************* */
//**************** MOBILE NAV *************** */

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

// Listen for a click on the navToggle
// check if mobile Nav contains Show Mobile nav class. If it doesn't add class
// Listen for a click event on the body
// if body contains show mobile nav class, remove it.
// else, remove show mobile nav class.

navToggle.addEventListener('click', () => {
	if (!mobileNav.classList.contains('show-mobile-nav')) {
		mobileNav.classList.add('show-mobile-nav')
		document.body.addEventListener('click', e => {
			if (!navToggle.contains(e.target)) {
				mobileNav.classList.remove('show-mobile-nav')
			}
		})
	} else {
		mobileNav.classList.remove('show-mobile-nav')
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
