import { defineStore } from 'pinia'
import platformsData from '@/content/platforms.json'

export const usePlatformsStore = defineStore('platforms', {
	state: () => ({
		items: platformsData.items
	}),
	getters: {
		supportedPlatforms: (state) => state.items,
		platformCount: (state) => state.items.length,
		getPlatformByKey: (state) => (key) => state.items.find(p => p.key === key)
	}
})
