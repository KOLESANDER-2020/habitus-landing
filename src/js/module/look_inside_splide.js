
import '@splidejs/splide/css';

import Splide from '@splidejs/splide';


document.addEventListener('DOMContentLoaded', () => {
	new Splide('.splide', {
		type: 'loop',
		perPage: 4.25,
		focus: 'center',
		gap: '40px',
		arrows: false,
		pagination: true,
		fixedWidth: '279px',

		breakpoints: {
			1000: {
				perPage: 2.25,
				pagination: true,
				fixedWidth: '180px',
				gap: '20px',
			}
		}
	}).mount();
});
