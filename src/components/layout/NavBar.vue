<template>
	<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
			<router-link to="/" class="flex items-center space-x-2">
				<span class="text-xl font-bold tracking-tight">Consystnt</span>
			</router-link>
			
			<nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
				<router-link 
					to="/" 
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'home' }"
				>
					Home
				</router-link>
				<router-link 
					to="/pricing" 
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'pricing' }"
				>
					Pricing
				</router-link>
				<router-link 
					to="/gallery" 
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'gallery' }"
				>
					Gallery
				</router-link>
				<router-link 
					to="/faq" 
					class="transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'faq' }"
				>
					FAQ
				</router-link>
			</nav>

			<div class="flex items-center space-x-3">
				<button 
					@click="layoutStore.toggleLayout"
					class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-3 py-2"
					:title="`Switch to ${layoutStore.currentLayout === 'current' ? 'Artist-Focused' : 'Current'} Layout`"
				>
					<svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
					</svg>
					{{ layoutStore.currentLayout === 'current' ? 'Artist' : 'Current' }}
				</button>
				
				<button 
					class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 opacity-60 cursor-not-allowed"
					disabled
				>
					Sign Up
				</button>
				
				<button 
					@click="toggleMobileMenu"
					class="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-10 w-10"
				>
					<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
			</div>
		</div>

		<div v-if="mobileMenuOpen" class="md:hidden border-t bg-background">
			<nav class="container mx-auto px-4 py-4 space-y-3">
				<router-link 
					to="/" 
					@click="closeMobileMenu"
					class="block py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'home' }"
				>
					Home
				</router-link>
				<router-link 
					to="/pricing" 
					@click="closeMobileMenu"
					class="block py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'pricing' }"
				>
					Pricing
				</router-link>
				<router-link 
					to="/gallery" 
					@click="closeMobileMenu"
					class="block py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'gallery' }"
				>
					Gallery
				</router-link>
				<router-link 
					to="/faq" 
					@click="closeMobileMenu"
					class="block py-2 text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60"
					:class="{ 'text-foreground': $route.name === 'faq' }"
				>
					FAQ
				</router-link>
			</nav>
		</div>
	</header>
</template>

<script>
import { useLayoutStore } from '@/stores/layout'

export default {
	name: 'NavBar',
	data() {
		return {
			mobileMenuOpen: false
		}
	},
	computed: {
		layoutStore() {
			return useLayoutStore()
		}
	},
	methods: {
		toggleMobileMenu() {
			this.mobileMenuOpen = !this.mobileMenuOpen
		},
		closeMobileMenu() {
			this.mobileMenuOpen = false
		}
	},
	mounted() {
		document.addEventListener('click', (e) => {
			if (!this.$el.contains(e.target)) {
				this.mobileMenuOpen = false
			}
		})
	}
}
</script>
