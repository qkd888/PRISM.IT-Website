

//******************************************* */
//**************** MOBILE NAV *************** */

const navToggle = document.querySelector(".nav-toggle");
const mobileNav = document.querySelector(".mobile-nav");

// Listen for a click on the navToggle


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
