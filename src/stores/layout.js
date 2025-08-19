import { defineStore } from 'pinia'

export const useLayoutStore = defineStore('layout', {
	state: () => ({
		currentLayout: 'current',
		availableLayouts: {
			current: 'Current Layout',
			artist: 'Artist-Focused Layout'
		}
	}),

	getters: {
		isArtistLayout: (state) => state.currentLayout === 'artist',
		isCurrentLayout: (state) => state.currentLayout === 'current',
		layoutDisplayName: (state) => state.availableLayouts[state.currentLayout]
	},

	actions: {
		setLayout(layout) {
			if (this.availableLayouts[layout]) {
				this.currentLayout = layout
				localStorage.setItem('preferred-layout', layout)
				
				const url = new URL(window.location)
				url.searchParams.set('layout', layout)
				window.history.replaceState({}, '', url)
			}
		},

		toggleLayout() {
			const newLayout = this.currentLayout === 'current' ? 'artist' : 'current'
			this.setLayout(newLayout)
		},

		initializeFromUrl() {
			const urlParams = new URLSearchParams(window.location.search)
			const layoutParam = urlParams.get('layout')
			const storedLayout = localStorage.getItem('preferred-layout')
			
			const preferredLayout = layoutParam || storedLayout || 'current'
			this.setLayout(preferredLayout)
		}
	}
})
