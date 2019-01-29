<template>
	<div id="app">
		<!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
		<the-header/>
		<router-view/>
		<the-footer/>
	</div>

</template>

<script>
    import TheHeader from './views/header.vue';
    import TheFooter from './views/footer.vue';

    export default {
        name: "app",
        components: {
            'the-header': TheHeader,
            'the-footer': TheFooter
        }
    }
</script>


<style lang="scss">
	@import 'scss/_common.scss';

	#app {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
