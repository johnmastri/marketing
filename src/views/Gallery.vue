<template>
	<div>
		<section class="border-t">
			<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
				<div class="text-center mb-12">
					<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
						Content Gallery
					</h1>
					<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
						Examples of consistent branding across platforms. See how AI personas maintain visual identity while optimizing for each channel.
					</p>
				</div>
				
				<GalleryGrid :items="allItems" />
			</div>
		</section>
		
		<NewsletterSection />
	</div>
</template>

<script>
import GalleryGrid from '@/components/gallery/GalleryGrid.vue'
import NewsletterSection from '@/components/newsletter/NewsletterSection.vue'
import { useGalleryStore } from '@/stores/gallery'

export default {
	name: 'Gallery',
	components: {
		GalleryGrid,
		NewsletterSection
	},
	data() {
		const galleryStore = useGalleryStore()
		return {
			allItems: galleryStore.galleryItems
		}
	}
}
</script>
