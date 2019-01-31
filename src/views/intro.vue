<template lang="pug">
	section.intro.bg
		.container
			.content
				h1.h2 Lorem ipsum dolor sit amet.
				p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias aperiam architecto aspernatur beatae debitis eaque esse est expedita facere fugiat illum, magni maiores nemo nihil placeat provident quasi quia quibusdam reprehenderit sequi soluta sunt tempore totam vel vero voluptatum! Blanditiis dicta dolorem est ipsa magni quas sit, soluta sunt!
			.btn-holder: a.btn(href="#" v-for="button in buttons" :key="button.id" :class="{ 'active': button.status }") {{ button.name }}
</template>

<script>
    import TheIntro from './intro.vue'

    export default {
        data () {
            return {
                buttons: [
                    {
                        name: 'Download',
                        status: true
                    },
                    {
                        name: 'Meer informatie',
                        status: false
                    },
                ]
            }
        },
        components: {
            TheIntro
        }
    }
</script>

<style lang="scss">
	@import '../scss/_base.scss';

	.intro {
		height: calc(100vh - 80px);
		background-image: url(../assets/slide.jpg);
		.container {
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		}
		.content {
			max-width: 700px;
			text-align: center;
			color: $white;
			line-height: 1.33;
			font-size: calc(100vw * 0.0089 + 15px);
			@include media('>widescreen') {
				font-size: 26px;
			}
		}
		.btn-holder {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
		}
		.h2 {
			color: $yellow;
			line-height: 1;
		}
		.btn {
			border: 2px solid $yellow;
			background: $yellow;
			margin: 0 10px 20px;
			min-width: 200px;
			@include media('>tablet') {
				min-width: auto;
			}
			&:hover {
				background: none;
				color: $white;
				border: 2px solid $white;
			}
			&.active {
				background: none;
				color: $white;
				border: 2px solid $white;
			}
		}
	}
</style>