<template lang="pug">
	header.header
		.container
			nav.menu
				a(href="#").opener: span
				ul.nav-list
					li: a(href="#").active Over Ons
					li: a(href="#") Gratis software
					li: a(href="#") Showcase
					li: a(href="#") Contact
			.logo
				a(href="#"): img(src="images/logo.png", alt="SSA Group")
</template>

<script>
    import TheHeader from './header.vue'

    export default {
        name: 'the-header',
        components: { TheHeader }
    }
</script>

<style></style>