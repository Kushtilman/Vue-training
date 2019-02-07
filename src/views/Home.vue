<template lang="pug">
	main
		the-intro
		the-services
</template>

<script>
    import TheIntro from './intro.vue';
    import TheServices from './services.vue';

    export default {
        name: "TheHome",
        components: {
            'the-intro': TheIntro,
            'the-services': TheServices
        }
    }
</script>
