<template lang="pug">
	footer.footer
		.container
			.submission-form
				h5.h5 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				form.form
					input(type="text" placeholder="Some text")
					button(type="submit") Send
			.community
				h5.h5 Comumnity
				ul.community-list
					li.community-item(v-for="community in communityes" :key="community.id"): a(href="#") {{ community.name }}
			.contact
				h5.h5 Contact
				dl
					div(v-for="contact in contacts" :key="contact.id")
						dt: span.title {{ contact.name }}
						dd: a(:href="`${contact.href}`").title {{ contact.data }}
		footer.footer-bottom
			.container
				span.copyright Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				ul.socials: li(v-for="social in socials" :key="social.id"): a(href="#"): span(:class="`i ${social.icon}`")
</template>

<script>
    import TheFooter from './footer.vue'

    export default {
        data () {
            return {
                communityes: [
                    {
                        name: 'Over Ons'
                    },
                    {
                        name: 'Gratis software'
                    },
                    {
                        name: 'Showcase'
                    },
                    {
                        name: 'Contact'
                    },
                ],
                contacts: [
                    {
                        name: 'Address:',
						href: '#',
                        data: 'Country, City, Street 123'
                    },
                    {
                        name: 'Telephone:',
						href: 'tel: 1234567890',
                        data: '(123) 456 78 90'
                    },
                    {
                        name: 'Email:',
						href: 'mailto: somemail@mail.com',
                        data: 'somemail@mail.com'
                    },
                ],
				socials: [
					{
					    icon: 'i-twitter'
					},
                    {
                        icon: 'i-facebook'
                    },
                    {
                        icon: 'i-play'
                    },
				]
            }
        },
        components: { TheFooter }
    }
</script>

<style lang="scss">
	@import '../scss/_base.scss';

	.footer {
		background: $bg-light;
		.container {
			display: flex;
			flex-wrap: wrap;
			@include media('>380px') {
				justify-content: space-around;
			}
			@include media('>desktop') {
				justify-content: space-between;
			}
		}
		.submission-form,
		.community,
		.contact {
			margin-bottom: 20px;
		}

		.h5 {
			color: $dark-blue;
		}
		.submission-form {
			width: 100%;
			@include media('>desktop') {
				width: auto;
			}
		}
		.form {
			display: flex;
			input {
				flex: 1 1 100%;
				border: 2px solid $dark-blue;
				border-radius: 5px 0 0 5px;
				border-right: none;
				font-size: 24px;
				height: 60px;
				padding: 0 20px;
				min-width: 100px;
				&:focus {
					outline: none;
				}
				&::placeholder {
					color: $dark-blue;
				}
			}
			button {
				flex: 1 0 auto;
				padding: 0 25px;
				color: $dark-blue;
				font-weight: 600;
				border-radius: 0 5px 5px 0;
				background: $yellow;
				border: 2px solid $yellow;
				border-left: none;
				transition: background .3s;
				&:hover {
					background: $white;
				}
				&:focus {
					outline: none;
				}
			}
		}
		.community-list {
			list-style-type: none;
			font-size: 16px;
			padding: 0 20px;
			li {
				position: relative;
				line-height: 2;
				&:before {
					position: absolute;
					content: "";
					left: -16px;
					top: 50%;
					transform: translateY(-50%);
					width: 0;
					height: 0;
					border-top: 3px solid transparent;
					border-left: 6px solid $dark-blue;
					border-bottom: 3px solid transparent;
					padding-right: 10px;
				}
			}
		}
		.contact {
			font-size: 16px;
		}
		.title {
			color: $dark-blue;
		}
		a {
			text-decoration: none;
			color: $dark-blue;
			transition: color .3s;
			&:hover {
				color: $red;
			}
		}
		dl {
			dt {
				font-weight: 600;
				line-height: 2;
			}
			dd {
				margin-left: 0;
				line-height: 2;
			}
		}
		.footer-bottom {
			background: $bg-footer;
			.container {
				display: flex;
				align-items: center;
				flex-direction: column;
				padding-top: 10px;
				padding-bottom: 10px;
				@include media('>tablet') {
					flex-direction: row;
					justify-content: space-between;
				}
			}
		}
		.copyright {
			font-size: 14px;
			font-weight: 600;
			display: block;
			margin-bottom: 15px;
			text-align: center;
			@include media('>tablet') {
				display: inline-block;
				margin-bottom: 0;
				text-align: left;
			}
		}
		.socials {
			display: flex;
			padding-left: 0;
			list-style-type: none;
			li {
				position: relative;
				width: 42px;
				height: 42px;
				border-radius: 50px;
				background: $dark-blue;
				margin-left: 7px;
				margin-right: 7px;
				@include media('>tablet') {
					margin-left: 15px;
					margin-right: 0;
				}
			}
			.i {
				color: $bg-light;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				transition: color .3s;
				&:hover {
					color: $red;
				}
			}
		}
	}
</style>