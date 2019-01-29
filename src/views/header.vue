<template lang="pug">
	header.header
		.container
			nav.menu
				a(href="#").opener: span
				ul.navbar
					li.navbar-list(v-for="item in items"): a.navbar-link(href="#" :class="{ 'active': item.status }") {{ item.name }}
			.logo
				a(href="#"): img(src="../assets/logo.png", alt="SSA Group")

</template>

<script>
    import TheHeader from './header.vue'

    export default {
        data () {
            return {
                items: [
					{
					    name: 'Over Ons',
						status: true
					},
                    {
                        name: 'Gratis software',
                        status: false
                    },
                    {
                        name: 'Showcase',
                        status: false
                    },
                    {
                        name: 'Contact',
                        status: false
                    },
                ]
			}
		},
        components: {
            TheHeader
        }
    }
</script>

<style lang="scss">
	@import '../scss/_base.scss';

	.header {
		background: $bg-light;
		height: 80px;
		position: relative;

		.container {
			max-width: 100%;
			padding: 15px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			@include media('>tablet') {
				padding: 15px 50px;
			}

		}

		.logo {
			display: flex;
			justify-content: flex-end;
		}

		.menu {
			li {
				margin-right: 40px;
			}
		}

		.navbar {
			overflow: hidden;
			opacity: 0;
			transition: visibility .3s ease-in-out, opacity .3s ease-in-out;
			font-size: 20px;
			list-style-type: none;
			text-transform: capitalize;
			display: flex;
			flex-direction: column;
			text-align: center;
			padding: 0;
			margin: 0 auto;
			@include media('>desktop') {
				flex-direction: row;
				opacity: 1;
				overflow: visible;
			}

			.drop-down {
				position: relative;
			}

			.drop-down > ul {
				display: none;
			}

			.drop-down:hover > ul {
				display: block;
				border-top: 0;
				z-index: 3;
				position: static;
				@include media('>desktop') {
					position: absolute;
					width: 180px;
					top: calc(100% + 48px);
					left: 50%;
					transform: translateX(-50%);
				}

				&:before {
					content: "";
					width: 100%;
					bottom: 100%;
					left: 50%;
					transform: translateX(-50%);
					height: 0;
					position: absolute;
					@include media('>desktop') {
						height: 48px;
					}
				}

				.navbar-list {
					margin: 0;
					width: 100%;
					text-align: center;
					cursor: pointer;
					padding: 5px 0;
					font-size: 16px;
					@include media('>tablet') {
						font-size: 18px;
					}
					@include media('>desktop') {
						padding: 10px 0;
						font-size: 20px;
					}

					&:nth-child(1) {
						@include media('>desktop') {
							border-top: none;
						}
					}

					&:last-child {
						border-bottom: none;
					}

					&:hover {
						a {
							color: $white;
						}
					}
				}
			}
		}

		.navbar-link {
			color: $dark-blue;
			font-size: 24px;
			text-decoration: none;
			transition: color .3s;

			&:hover {
				color: $red;
			}

			&.active {
				color: $red;
			}
		}

		/* burger menu style */
		.menu {
			.opener {
				display: none;
				width: 50px;
				height: 31px;
				position: relative;
				text-indent: -9999px;
				overflow: hidden;

				&:before,
				&:after,
				span {
					background: $red;
					border-radius: 4px;
					position: absolute;
					top: 16px;
					left: 25%;
					right: 25%;
					height: 3px;
					margin: -2px 0 0; /* height/2 */
					-webkit-transition: all 0.3s linear;
					transition: all 0.3s linear;
				}

				&:before,
				&:after {
					content: '';
					top: 10px;
				}

				&:after {
					top: 22px;
				}

				&:hover {
					opacity: .9;
				}
			}

			ul {
				margin: 0;
				padding: 0;
				list-style: none;
			}
		}

		.active {
			span {
				opacity: 0;
			}
		}

		.close-btn > span,
		.close-btn:after,
		.close-btn:before,
		.active .opener:after,
		.active .opener:before {
			transform: rotate(45deg);
			top: 16px;
			left: 15%;
			right: 15%;
		}

		.close-btn:after,
		.active .opener:after {
			transform: rotate(-45deg);
		}

		@include media('<1025px') {
			.menu {
				.opener {
					display: block;
				}

				ul {
					border-top: 1px solid $red;
					background: $bg-light;
					overflow: hidden;
					position: absolute;
					top: 100%;
					left: 0;
					right: 0;
					z-index: 999;
				}

				li {
					margin: 0 auto;
					text-align: center;
					padding: 0;
					background: $bg-light;

					a {
						display: block;
						padding: 6px 5px;
					}
				}
			}
			.container.active {
				ul {
					opacity: 1;
					visibility: visible;
					height: auto;
				}
			}
		}
	}
</style>