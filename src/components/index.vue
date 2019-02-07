<!--<template lang="pug">-->
	<!--doctype html-->
	<!--html(lang='en')-->
	<!--head-->
		<!--meta(http-equiv="x-ua-compatible" content="ie=edge")-->
		<!--meta(name="viewport" content="width=device-width, initial-scale=1.0")-->
		<!--title Test SSA Home-->
		<!--link(href="https://fonts.googleapis.com/css?family=Knewave|Roboto:400,500,700" rel="stylesheet")-->
	<!--body-->
		<!--header.header-->
			<!--.container-->
				<!--nav.menu-->
					<!--a(href="#").opener: span-->
					<!--ul.nav-list-->
						<!--li: a(href="#").active Over Ons-->
						<!--li: a(href="#") Gratis software-->
						<!--li: a(href="#") Showcase-->
						<!--li: a(href="#") Contact-->
				<!--.logo-->
					<!--a(href="#"): img(src="images/logo.png", alt="SSA Group")-->
		<!--main-->
			<!--section.intro.bg-->
				<!--.container-->
					<!--.content-->
						<!--h1.h2 Lorem ipsum dolor sit amet.-->
						<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam architecto aspernatur beatae debitis eaque esse est expedita facere fugiat illum, magni maiores nemo nihil placeat provident quasi quia quibusdam reprehenderit sequi soluta sunt tempore totam vel vero voluptatum! Blanditiis dicta dolorem est ipsa magni quas sit, soluta sunt!-->
					<!--.btn-holder-->
						<!--a(href="#").btn Download-->
						<!--a(href="#").btn.active Meer informatie-->
			<!--section.services-->
				<!--.container-->
					<!--h2.h2 some title-->
					<!--.content-holder-->
						<!--.card-->
							<!--.card-holder-->
								<!--.ing-holder-->
									<!--img(src="images/service01.png", alt="images description")-->
								<!--.text-holder-->
									<!--h4.h4 foto beverking-->
									<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?-->
								<!--a(href="#").btn Meer informatie-->
						<!--.card-->
							<!--.card-holder-->
								<!--.ing-holder-->
									<!--img(src="images/service02.png", alt="images description")-->
								<!--.text-holder-->
									<!--h4.h4 foto beverking-->
									<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?-->
								<!--a(href="#").btn Meer informatie-->
						<!--.card-->
							<!--.card-holder-->
								<!--.ing-holder-->
									<!--img(src="images/service03.png", alt="images description")-->
								<!--.text-holder-->
									<!--h4.h4 foto beverking-->
									<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?-->
								<!--a(href="#").btn Meer informatie-->
						<!--.card-->
							<!--.card-holder-->
								<!--.ing-holder-->
									<!--img(src="images/service04.png", alt="images description")-->
								<!--.text-holder-->
									<!--h4.h4 foto beverking-->
									<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?-->
								<!--a(href="#").btn Meer informatie-->
		<!--footer.footer-->
			<!--.container-->
				<!--.submission-form-->
					<!--h5.h5 Lorem ipsum dolor sit amet, consectetur adipisicing elit.-->
					<!--form.form-->
						<!--input(type="text", placeholder="Some text")-->
						<!--button(type="submit") Send-->
				<!--.community-->
					<!--h5.h5 Comumnity-->
					<!--ul.list-community-->
						<!--li: a(href="#") Link 1-->
						<!--li: a(href="#") Link 1-->
						<!--li: a(href="#") Some long long like 3-->
						<!--li: a(href="#") Some long long like 4-->
				<!--.contact-->
					<!--h5.h5 Contact-->
					<!--dl-->
						<!--dt: span.title Address-->
						<!--dd: a(href="#") Country, City, Street 123-->
						<!--dt: span.title Telephone:-->
						<!--dd: a(href="tel: 1234567890") (123) 456 78 90-->
						<!--dt: span.title Email:-->
						<!--dd: a(href="mailto: somemail@mail.com") somemail@mail.com-->
			<!--footer.footer-->
				<!--.container-->
					<!--span.copyright Lorem ipsum dolor sit amet, consectetur adipisicing elit.-->
					<!--ul.socials-->
						<!--li: a(href="#"): span.i.i-twitter-->
						<!--li: a(href="#"): span.i.i-facebook-->
						<!--li: a(href="#"): span.i.i-play-->
<!--</template>-->

<!--<script>-->

<!--</script>-->

<!--<style>-->

	<!--.header {-->
		<!--background: $ bg-light;-->
		<!--height: 80px;-->
		<!--position: relative;-->

	<!--.container {-->
		<!--min-width: 100%;-->
		<!--padding: 15px;-->
		<!--display: flex;-->
		<!--align-items: center;-->
		<!--justify-content: space-between;-->

	<!--@include media('>tablet') {-->
		<!--padding: 15px 50px;-->
	<!--}-->

	<!--}-->
	<!--.logo {-->
		<!--display: flex;-->
		<!--justify-content: flex-end;-->
	<!--}-->

	<!--.menu {-->

	<!--li {-->
		<!--margin-right: 40px;-->
	<!--}-->

	<!--}-->
	<!--.navbar {-->
		<!--overflow: hidden;-->
		<!--opacity: 0;-->
		<!--transition: visibility .3s ease-in-out, opacity .3s ease-in-out;-->
		<!--font-size: 20px;-->
		<!--list-style-type: none;-->
		<!--text-transform: capitalize;-->
		<!--display: flex;-->
		<!--flex-direction: column;-->
		<!--text-align: center;-->
		<!--padding: 0;-->
		<!--margin: 0 auto;-->

	<!--@include media('>desktop') {-->
		<!--flex-direction: row;-->
		<!--opacity: 1;-->
		<!--overflow: visible;-->
	<!--}-->
	<!--a {-->
		<!--color: $ dark-blue;-->
		<!--font-size: 24px;-->
		<!--text-decoration: none;-->
		<!--transition: color .3s;-->

	<!--&-->
	<!--:hover {-->
		<!--color: $ red;-->
	<!--}-->

	<!--&-->
	<!--.active {-->
		<!--color: $ red;-->
	<!--}-->

	<!--}-->
	<!--.drop-down {-->
		<!--position: relative;-->
	<!--}-->

	<!--.drop-down > ul {-->
		<!--display: none;-->
	<!--}-->

	<!--.drop-down:hover > ul {-->
		<!--display: block;-->
		<!--border-top: 0;-->
		<!--z-index: 3;-->
		<!--position: static;-->

	<!--@include media('>desktop') {-->
		<!--position: absolute;-->
		<!--width: 180px;-->
		<!--top: calc(100% + 48px);-->
		<!--left: 50%;-->
		<!--transform: translateX(-50%);-->
	<!--}-->
	<!--&-->
	<!--:before {-->
		<!--content: "";-->
		<!--width: 100%;-->
		<!--bottom: 100%;-->
		<!--left: 50%;-->
		<!--transform: translateX(-50%);-->
		<!--height: 0;-->
		<!--position: absolute;-->

	<!--@include media('>desktop') {-->
		<!--height: 48px;-->
	<!--}-->
	<!--}-->
	<!--li {-->
		<!--margin: 0;-->
		<!--width: 100%;-->
		<!--text-align: center;-->
		<!--cursor: pointer;-->
		<!--padding: 5px 0;-->
		<!--font-size: 16px;-->

	<!--@include media('>tablet') {-->
		<!--font-size: 18px;-->
	<!--}-->
	<!--@include media('>desktop') {-->
		<!--padding: 10px 0;-->
		<!--font-size: 20px;-->
	<!--}-->
	<!--&-->
	<!--:nth-child(1) {-->

	<!--@include media('>desktop') {-->
		<!--border-top: none;-->
	<!--}-->
	<!--}-->
	<!--&-->
	<!--:last-child {-->
		<!--border-bottom: none;-->
	<!--}-->

	<!--&-->
	<!--:hover {-->

	<!--a {-->
		<!--color: $ white;-->
	<!--}-->

	<!--}-->
	<!--}-->
	<!--}-->
	<!--}-->

	<!--/* burger menu style */-->
	<!--.menu {-->

	<!--.opener {-->
		<!--display: none;-->
		<!--width: 50px;-->
		<!--height: 31px;-->
		<!--position: relative;-->
		<!--text-indent: -9999px;-->
		<!--overflow: hidden;-->

	<!--&-->
	<!--:before,-->

	<!--&-->
	<!--:after,-->
	<!--span {-->
		<!--background: $ red;-->
		<!--border-radius: 4px;-->
		<!--position: absolute;-->
		<!--top: 16px;-->
		<!--left: 25%;-->
		<!--right: 25%;-->
		<!--height: 3px;-->
		<!--margin: -2px 0 0; /* height/2 */-->
		<!-- -webkit-transition: all 0.3s linear;-->
		<!--transition: all 0.3s linear;-->
	<!--}-->

	<!--&-->
	<!--:before,-->

	<!--&-->
	<!--:after {-->
		<!--content: '';-->
		<!--top: 10px;-->
	<!--}-->

	<!--&-->
	<!--:after {-->
		<!--top: 22px;-->
	<!--}-->

	<!--&-->
	<!--:hover {-->
		<!--opacity: .9;-->
	<!--}-->

	<!--}-->
	<!--ul {-->
		<!--margin: 0;-->
		<!--padding: 0;-->
		<!--list-style: none;-->
	<!--}-->

	<!--}-->
	<!--.active {-->

	<!--span {-->
		<!--opacity: 0;-->
	<!--}-->

	<!--}-->
	<!--.close-btn > span,-->
	<!--.close-btn:after,-->
	<!--.close-btn:before,-->
	<!--.active .opener:after,-->
	<!--.active .opener:before {-->
		<!--transform: rotate(45deg);-->
		<!--top: 16px;-->
		<!--left: 15%;-->
		<!--right: 15%;-->
	<!--}-->

	<!--.close-btn:after,-->
	<!--.active .opener:after {-->
		<!--transform: rotate(-45deg);-->
	<!--}-->

	<!--@include media('<1025px') {-->
		<!--.menu {-->

		<!--.opener {-->
			<!--display: block;-->
		<!--}-->

		<!--ul {-->
			<!--border-top: 1px solid $ red;-->
			<!--background: $ bg-light;-->
			<!--overflow: hidden;-->
			<!--position: absolute;-->
			<!--top: 100%;-->
			<!--left: 0;-->
			<!--right: 0;-->
			<!--z-index: 999;-->
		<!--}-->

		<!--li {-->
			<!--margin: 0 auto;-->
			<!--text-align: center;-->
			<!--padding: 0;-->
			<!--background: $ bg-light;-->

		<!--a {-->
			<!--display: block;-->
			<!--padding: 6px 5px;-->
		<!--}-->
	<!--}-->
	<!--}-->
	<!--.container.active {-->

	<!--ul {-->
		<!--opacity: 1;-->
		<!--visibility: visible;-->
		<!--height: auto;-->
	<!--}-->

	<!--}-->
	<!--}-->
	<!--}-->
<!--</style>-->