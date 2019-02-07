<template lang="pug">
	section.story
		.container
			article.article
				.article-holder
					.text-holder
						h1.h1 {{ title }}
						p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt sapiente. Architecto fugit impedit incidunt magnam quas quod temporibus voluptate!
						p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut eveniet in itaque labore molestiae nam neque perferendis ratione recusandae.
						.img-holder
							img(src="../assets/image.jpg" alt="image description")
						span.picture-name Tussenkop
						p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid asperiores at autem blanditiis consectetur culpa, debitis deserunt dolore dolorum enim eum fuga incidunt magnam mollitia nostrum, odio officia omnis qui quibusdam quidem quos reiciendis rem repellendus sed veritatis vero. Animi, assumenda atque doloremque eaque laborum molestias nostrum pariatur voluptatum
			aside.aside
				.aside-holder
					h3.h3 some title
					blockquote.blockquote
						p Lorem ipsum dolor sit amet, consectetuer adipiscing ipsum ipsum ipsum ipsum adipiscing ipsum dolor sit amet, consectetuer adipiscing, consectetuer adipiscing elit, sed diem nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat
					.btn-holder
						a(href="#") Leonardo da Vinci
</template>

<script>
    export default {
        name: 'TheStory',
        computed: {
            title() {
                return this.$store.state.message
            }
        },
        methods: {
            crossFilter: function(){
                this.isActive = !this.isActive;
            }
        }
    }
</script>

<style lang="scss">
	@import '../scss/_base.scss';

	.story {
		.container {
			padding-top: 0;
			display: flex;
			flex-direction: column;
			@include media('>tablet') {
				flex-direction: row;
			}
		}
		.article {
			flex: auto;
			@include media('>tablet') {
				flex: 0 0 67%;
				padding-right: 10px;
			}
			.text-holder {
				line-height: 2;
			}
		}
		.h1 {
			min-width: 210px;
			min-height: 50px;
			background: $yellow;
			text-align: center;
			display: inline-block;
			padding: 7px 15px;
			margin-bottom: 10px;
			line-height: 1.333;
			@include media('>tablet') {
				min-width: 300px;
				padding: 7px 40px;
				text-align: left;
			}
		}
		img {
			width: 100%;
		}
		.picture-name {
			display: block;
			color: $light-grey;
		}
		.aside {
			flex: auto;
			padding-top: 10px;
			@include media('>tablet') {
				padding-left: 10px;
				flex: 0 0 33%;
			}
		}
		.aside-holder {
			padding: 33px 40px;
			background: $dark-blue;
			color: $white;
			position: sticky;
			top: 10px;
			box-shadow: 0px 8px 30px 0px rgba(128, 124, 128, 1);
		}
		.h3 {
			margin-bottom: 34px;
		}
		.blockquote {
			font-size: 15px;
			position: relative;
			margin-left: 0;
			margin-right: 0;
			padding-left: 20px;
			&:before {
				content: "";
				position: absolute;
				left: 0;
				height: 100%;
				width: 4px;
				background: $white;
			}
		}

		.btn-holder {
			display: flex;
			justify-content: flex-end;
			a {
				text-decoration: none;
				color: $yellow;
				font-size: 12px;
				transition: color .3s;
				&:hover {
					color: $light-grey;
					text-align: right;
				}
			}
		}
	}
</style>
