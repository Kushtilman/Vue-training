<template lang="pug">
	div
		main
			the-intro

			the-services
</template>

<script>
    // @ is an alias to /src
    // import index from '@/components/index.vue'
	//
    // export default {
    //     name: 'home',
    //     components: {
    //         'index': index
    //     }
    // }
    import TheIntro from './intro.vue';
    import TheServices from './services.vue';

    export default {
        name: "app",
        components: {
            'the-intro': TheIntro,
            'the-services': TheServices
        }
    }
</script>
