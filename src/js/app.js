"use strict";


import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

import AOS from "aos";
AOS.init({
	disable: 'phone'
});




document.addEventListener("DOMContentLoaded", () => {
	let headerSearch = document.querySelector('.header__search'),
		headerSearching = document.querySelector('.header__searching'),
		header = document.querySelector('.header'),
		close = document.querySelector('#close'),
		search = document.querySelector('svg.search');

	if (headerSearching) {
		headerSearch.addEventListener('click', () => {
			headerSearching.classList.toggle('_active');
			header.classList.toggle('header__active');
			close.classList.toggle('vis');
			search.classList.toggle('none');
		})
	};


});


