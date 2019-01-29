<template lang="pug">
	section.services
		.container
			h2.h2 some title
			.content-holder
				.card(v-for="card in cards")
					.card-holder
						.img-holder
							img(:src="getImg")
						.text-holder
							h4.h4 {{ card.title }}
							p {{ card.description }}
						a(href="#").btn {{ card.button }}
				<!--.card-->
					<!--.card-holder-->
						<!--.img-holder-->
							<!--img(src="images/service02.png", alt="images description")-->
						<!--.text-holder-->
							<!--h4.h4 foto beverking-->
							<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?-->
						<!--a(href="#").btn Meer informatie-->
				<!--.card-->
					<!--.card-holder-->
						<!--.img-holder-->
							<!--img(src="images/service03.png", alt="images description")-->
						<!--.text-holder-->
							<!--h4.h4 foto beverking-->
							<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?-->
						<!--a(href="#").btn Meer informatie-->
				<!--.card-->
					<!--.card-holder-->
						<!--.img-holder-->
							<!--img(src="images/service04.png", alt="images description")-->
						<!--.text-holder-->
							<!--h4.h4 foto beverking-->
							<!--p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?-->
						<!--a(href="#").btn Meer informatie-->
</template>

<script>
    import TheServices from './services.vue'

    export default {
        data () {
            return {
                cards: [
                    {
                        noPhoto: require('./assets/service01.png'),
						title: 'foto beverking',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores enim fuga perferendis quam quibusdam tenetur?',
						button: 'Meer informatie'
                    },
                    {
                        image: 'Download',
                        title: 'foto beverking',
                        description: 'Lorem ipsum amet, consectetur adipisicing elit. quibusdam tenetur?',
                        button: 'Meer informatie'
                    },
                    {
                        image: 'Download',
                        title: 'foto beverking',
                        description: 'Lorem ipsum quibusdam tenetur? consectetur adipisicing elit. quibusdam tenetur?',
                        button: 'Meer informatie'
                    },
                    {
                        image: 'Download',
                        title: 'foto beverking',
                        description: 'Lorem ipsum quibusdam tenetur?',
                        button: 'Meer informatie'
                    },
                ]
            }
        },
        computed: {
            getImg: function(){
                if (!!this.show.image){
                    return this.show.image
                } else{
                    return noPhoto//'https://static.nn2.ru/img/2015/no-photo.jpg'
                }
            }
        },
        props: ['show'],
        components: {
            TheServices
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