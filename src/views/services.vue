<template lang="pug">
	section.services
		.container
			h2.h2 some title
			.content-holder
				.card(v-for="card in cards" :key="card.id")
					.card-holder
						img(:src="card.image" :alt="`${card.alt}`")
						.text-holder
							h4.h4 {{ card.title }}
							p {{ card.description }}
						a(href="#").btn {{ card.button }}
</template>

<script>
    export default {
        name: 'TheServices',
        data () {
            return {
                cards: [
                    {
                        image: require('./../assets/service01.png'),
						alt: 'image-1',
						title: 'foto beverking',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?',
						button: 'Meer informatie'
                    },
                    {
                        image: require('./../assets/service02.png'),
                        alt: 'image-2',
                        title: 'foto beverking',
                        description: 'Lorem ipsum amet, consectetur adipisicing elit. quibusdam tenetur?',
                        button: 'Meer informatie'
                    },
                    {
                        image: require('./../assets/service03.png'),
                        alt: 'image-3',
                        title: 'foto beverking',
                        description: 'Lorem ipsum quibusdam tenetur? consectetur adipisicing elit. quibusdam tenetur?',
                        button: 'Meer informatie'
                    },
                    {
                        image: require('./../assets/service04.png'),
                        alt: 'image-4',
                        title: 'foto beverking',
                        description: 'Lorem ipsum quibusdam tenetur?',
                        button: 'Meer informatie'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss">
	@import '../scss/_base.scss';

	.services {
		background: $dark-blue;
		.content-holder {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.h2 {
			font-weight: 400;
			color: $bg-light;
			text-align: center;
			margin-bottom: 40px;
		}
		.btn {
			max-width: 200px;
			margin: 0 auto;
			color: $white;
			border: 2px solid $white;
			&:hover {
				background: none;
				color: $bg-light;
				border: 2px solid $bg-light;
			}
		}
	}
</style>