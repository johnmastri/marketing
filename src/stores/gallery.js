import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
	state: () => ({
		items: [
			{
				id: 1,
				title: 'Artist Portfolio - Instagram',
				platform: 'instagram',
				type: 'post',
				placeholder: true,
				description: 'Consistent branding across artistic posts'
			},
			{
				id: 2,
				title: 'Business Content - TikTok',
				platform: 'tiktok',
				type: 'video',
				placeholder: true,
				description: 'Professional brand presence on TikTok'
			},
			{
				id: 3,
				title: 'Creator Series - YouTube',
				platform: 'youtube',
				type: 'thumbnail',
				placeholder: true,
				description: 'Cohesive thumbnail design'
			},
			{
				id: 4,
				title: 'Brand Campaign - Facebook',
				platform: 'facebook',
				type: 'post',
				placeholder: true,
				description: 'Consistent messaging across platforms'
			},
			{
				id: 5,
				title: 'Product Showcase - Pinterest',
				platform: 'pinterest',
				type: 'pin',
				placeholder: true,
				description: 'Visual consistency in product pins'
			},
			{
				id: 6,
				title: 'Thought Leadership - X',
				platform: 'x',
				type: 'post',
				placeholder: true,
				description: 'Professional voice across platforms'
			},
			{
				id: 7,
				title: 'Behind the Scenes - Instagram Stories',
				platform: 'instagram',
				type: 'story',
				placeholder: true,
				description: 'Authentic brand storytelling'
			},
			{
				id: 8,
				title: 'Tutorial Content - TikTok',
				platform: 'tiktok',
				type: 'video',
				placeholder: true,
				description: 'Educational content with brand consistency'
			},
			{
				id: 9,
				title: 'Announcement - Multi-platform',
				platform: 'multi',
				type: 'campaign',
				placeholder: true,
				description: 'Same message, optimized for each platform'
			}
		],
		selectedItem: null
	}),
	getters: {
		galleryItems: (state) => state.items,
		itemsByPlatform: (state) => (platform) => state.items.filter(item => item.platform === platform || item.platform === 'multi'),
		featuredItems: (state) => state.items.slice(0, 6)
	},
	actions: {
		selectItem(item) {
			this.selectedItem = item
		},
		clearSelection() {
			this.selectedItem = null
		}
	}
})
