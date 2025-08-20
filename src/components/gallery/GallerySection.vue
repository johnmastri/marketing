<template>
	<section class="border-t bg-muted/30 relative" :style="{ background: bg('gallery') }">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.gallery.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					{{ copy.gallery.description }}
				</p>
			</div>
			
			<GalleryGrid :items="galleryItems" />
		</div>
		<GradientControl section-id="gallery" />
	</section>
</template>

<script>
import GalleryGrid from './GalleryGrid.vue'
import { useGalleryStore } from '@/stores/gallery'
import copyData from '@/content/copy.json'
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'GallerySection',
	components: {
		GalleryGrid,
		GradientControl
	},
	data() {
		const galleryStore = useGalleryStore()
		const gradients = useGradientsStore()
		return {
			copy: copyData,
			galleryItems: galleryStore.featuredItems,
			gradients
		}
	},
	methods: {
		bg(section){ return this.gradients.getCurrent(section) }
	}
}
</script>
