<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
		<GalleryItem 
			v-for="item in items"
			:key="item.id"
			:item="item"
			@click="selectItem(item)"
		/>
	</div>
</template>

<script>
import GalleryItem from './GalleryItem.vue'
import { useGalleryStore } from '@/stores/gallery'

export default {
	name: 'GalleryGrid',
	components: {
		GalleryItem
	},
	props: {
		items: {
			type: Array,
			required: true
		}
	},
	methods: {
		selectItem(item) {
			const galleryStore = useGalleryStore()
			galleryStore.selectItem(item)
		}
	}
}
</script>
