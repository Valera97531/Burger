"use strict";


import * as flsFunctions from "./modules/function.js";
flsFunctions.isWebp();

document.addEventListener("DOMContentLoaded", () => {
	let headerSearch = document.querySelector('.header__search'),
		headerSearching = document.querySelector('.header__searching'),
		header = document.querySelector('.header');

	if (headerSearching) {
		headerSearch.addEventListener('click', () => {
			headerSearching.classList.toggle('_active');
			header.classList.toggle('header__active');
		})
	};


});


