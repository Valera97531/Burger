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

	let burger = document.querySelector('.header__burger'),
		headerList = document.querySelector('.header__list');

	burger.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		headerList.classList.toggle('active');
		burger.classList.toggle('active');
	});

	let headerLink = document.querySelectorAll('.header__link');

	headerLink.forEach(item => {
		item.addEventListener('click', () => {
			headerList.classList.remove('active');
			document.body.classList.remove('_lock');
		});
	});

});


