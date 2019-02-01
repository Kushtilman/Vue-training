<template lang="pug">
	header.header
		.container
			nav.menu
				a.opener(href="#" @click="show = !show" v-on:click="crossFilter" v-bind:class="{ active: isActive }"): span
				transition(name="slide-fade")
					ul.navbar(v-show="show")
						li.navbar-list(v-for="item in items" :key="item.id"): a.navbar-link(:href="`${item.href}`" :class="{ 'active': item.status }") {{ item.name }}
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
						href: '/',
						status: true
					},
                    {
                        name: 'Gratis software',
                        href: '/article',
                        status: false
                    },
                    {
                        name: 'Showcase',
                        href: '#',
                        status: false
                    },
                    {
                        name: 'Contact',
                        href: '#',
                        status: false
                    },
                ],
                show: false,
                isActive: false
			}
		},
        components: {
            TheHeader
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

	.header {
		background: $bg-light;
		height: 80px;
		position: relative;
		z-index: 1;

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
			transition: visibility .3s ease-in-out, opacity .3s ease-in-out;
			font-size: 20px;
			list-style-type: none;
			text-transform: capitalize;
			text-align: center;
			padding: 0 50px;
			margin: 0 auto;
			border-top: 1px solid $red;
			background: $bg-light;
			position: absolute;
			top: 100%;
			min-height: 100vh;
			left: 0;
			box-shadow: 1px 2px 2px 0px #f8e81c;
			@include media('>desktop') {
				display: flex !important;
				flex-direction: row;
				opacity: 1;
				overflow: visible;
				position: static;
				border-top: none;
				min-height: auto;
				box-shadow: none;
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
					margin: -2px 0 0;
					-webkit-transition: all .3s linear;
					transition: all .3s linear;
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
			&.opener:after,
			&.opener:before {
				transform: rotate(45deg);
				top: 16px;
				left: 15%;
				right: 15%;
			}
			&.opener:after {
				transform: rotate(-45deg);
			}
		}

		@include media('<1025px') {
			.menu {
				.opener {
					display: block;
				}

				li {
					margin: 0 auto;
					text-align: center;
					padding: 10px 50px;
					border-bottom: 1px solid;
					background: $bg-light;
					&:last-child {
						border-bottom: none;
					}
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
			.slide-fade-enter-active,
			.slide-fade-leave-active {
				transition: all .5s ease;
				position: absolute;
			}
			.slide-fade-enter, .slide-fade-leave-to {
				transform: translateX(-100%);
			}
		}
	}
</style>