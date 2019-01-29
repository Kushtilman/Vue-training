<template lang="pug">
	footer.footer
		.container
			.submission-form
				h5.h5 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				form.form
					input(type="text", placeholder="Some text")
					button(type="submit") Send
			.community
				h5.h5 Comumnity
				ul.list-community
					li: a(href="#") Link 1
					li: a(href="#") Link 1
					li: a(href="#") Some long long like 3
					li: a(href="#") Some long long like 4
			.contact
				h5.h5 Contact
				dl
					dt: span.title Address
					dd: a(href="#") Country, City, Street 123
					dt: span.title Telephone:
					dd: a(href="tel: 1234567890") (123) 456 78 90
					dt: span.title Email:
					dd: a(href="mailto: somemail@mail.com") somemail@mail.com
		footer.footer-bottom
			.container
				span.copyright Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				ul.socials
					li: a(href="#"): span.i.i-twitter
					li: a(href="#"): span.i.i-facebook
					li: a(href="#"): span.i.i-play
</template>

<script>
    import TheFooter from './footer.vue'

    export default {
        name: 'the-footer',
        components: { TheFooter }
    }
</script>

<style></style>