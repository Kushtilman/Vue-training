<template lang="pug">
	section.story
		.container
			article.article
				.article-holder
					.text-holder
						.title-holder
							h1.h1 text input
						p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nesciunt sapiente. Architecto fugit impedit incidunt magnam quas quod temporibus voluptate!
						p Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut eveniet in itaque labore molestiae nam neque perferendis ratione recusandae.
						.img-holder
							img(src="images/image.jpg" alt="image description")
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
    import TheStory from './story.vue'

    export default {
        data () {
            return {}
		},
        components: {
            TheStory
        },
        methods: {
            crossFilter: function(){
                this.isActive = !this.isActive;
            }
        }
    }
</script>
