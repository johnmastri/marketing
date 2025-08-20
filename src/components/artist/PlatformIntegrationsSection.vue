<template>
	<section class="py-20 relative" :style="{ background: bg('artist-platforms') }">
		<div class="container mx-auto max-w-6xl px-4">
			<div class="text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
					Post everywhere your fans are
				</h2>
				<p class="text-xl text-muted-foreground">
					One platform, all your channels covered
				</p>
			</div>

			<div class="relative">
				<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
					<div 
						v-for="platform in platforms" 
						:key="platform.name"
						class="flex flex-col items-center group cursor-pointer"
						@mouseenter="hoveredPlatform = platform.name"
						@mouseleave="hoveredPlatform = null"
					>
						<div 
							class="w-16 h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-200 border-2"
							:class="[
								platform.bgClass,
								hoveredPlatform === platform.name ? 'scale-110 shadow-lg' : 'scale-100'
							]"
						>
							<component :is="platform.icon" class="w-8 h-8 text-white" />
						</div>
						<span class="text-sm font-medium text-center">{{ platform.name }}</span>
						<span class="text-xs text-muted-foreground text-center">{{ platform.type }}</span>
					</div>
				</div>

				<div class="relative bg-background rounded-2xl border shadow-sm p-8 mb-12">
					<div class="text-center mb-8">
						<h3 class="text-xl font-semibold mb-2">Content Flow Visualization</h3>
						<p class="text-muted-foreground">Watch how your content reaches every platform</p>
					</div>
					
					<div class="relative">
						<div class="flex items-center justify-center mb-8">
							<div class="bg-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center">
								<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
								</svg>
							</div>
						</div>
						
						<div class="grid grid-cols-3 md:grid-cols-6 gap-4">
							<div 
								v-for="(platform, index) in platforms.slice(0, 6)" 
								:key="platform.name"
								class="relative"
							>
								<div class="bg-muted rounded-lg p-4 text-center">
									<component :is="platform.icon" class="w-6 h-6 mx-auto mb-2" :class="platform.iconColor" />
									<div class="text-xs font-medium">{{ platform.name }}</div>
								</div>
								
								<div class="absolute -top-8 left-1/2 transform -translate-x-1/2">
									<div 
										class="w-2 h-16 bg-gradient-to-b from-primary to-transparent rounded-full"
										:style="{ animationDelay: `${index * 0.2}s` }"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="grid md:grid-cols-3 gap-6">
					<div class="bg-background rounded-xl p-6 border">
						<div class="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
							<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</div>
						<h3 class="font-semibold mb-2">Instant Distribution</h3>
						<p class="text-sm text-muted-foreground">
							Generate once, post everywhere. Your content automatically adapts to each platform's format and requirements.
						</p>
					</div>

					<div class="bg-background rounded-xl p-6 border">
						<div class="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4">
							<svg class="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
							</svg>
						</div>
						<h3 class="font-semibold mb-2">Smart Optimization</h3>
						<p class="text-sm text-muted-foreground">
							Each post is optimized for maximum engagement on its specific platform, from hashtags to timing.
						</p>
					</div>

					<div class="bg-background rounded-xl p-6 border">
						<div class="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mb-4">
							<svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
							</svg>
						</div>
						<h3 class="font-semibold mb-2">Performance Tracking</h3>
						<p class="text-sm text-muted-foreground">
							Monitor performance across all platforms from one dashboard. See what works and double down.
						</p>
					</div>
				</div>
			</div>
		</div>
		<GradientControl section-id="artist-platforms" />
	</section>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'PlatformIntegrationsSection',
	components: { GradientControl },
	data() {
		return {
			hoveredPlatform: null,
			platforms: [
				{
					name: 'Instagram',
					type: 'Social Media',
					bgClass: 'bg-gradient-to-br from-purple-500 to-pink-500 border-purple-500',
					iconColor: 'text-purple-500',
					icon: 'InstagramIcon'
				},
				{
					name: 'TikTok',
					type: 'Video Platform',
					bgClass: 'bg-gradient-to-br from-black to-gray-800 border-black',
					iconColor: 'text-black',
					icon: 'TikTokIcon'
				},
				{
					name: 'Twitter',
					type: 'Social Media',
					bgClass: 'bg-gradient-to-br from-blue-400 to-blue-600 border-blue-500',
					iconColor: 'text-blue-500',
					icon: 'TwitterIcon'
				},
				{
					name: 'YouTube',
					type: 'Video Platform',
					bgClass: 'bg-gradient-to-br from-red-500 to-red-600 border-red-500',
					iconColor: 'text-red-500',
					icon: 'YouTubeIcon'
				},
				{
					name: 'Spotify',
					type: 'Music Streaming',
					bgClass: 'bg-gradient-to-br from-green-500 to-green-600 border-green-500',
					iconColor: 'text-green-500',
					icon: 'SpotifyIcon'
				},
				{
					name: 'Apple Music',
					type: 'Music Streaming',
					bgClass: 'bg-gradient-to-br from-gray-800 to-black border-gray-800',
					iconColor: 'text-gray-800',
					icon: 'AppleMusicIcon'
				}
			],
			gradients: useGradientsStore()
		}
	},
	methods: { bg(section){ return this.gradients.getCurrent(section) } },
	components: {
		InstagramIcon: {
			template: `
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
				</svg>
			`
		},
		TikTokIcon: {
			template: `
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
				</svg>
			`
		},
		TwitterIcon: {
			template: `
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
				</svg>
			`
		},
		YouTubeIcon: {
			template: `
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
				</svg>
			`
		},
		SpotifyIcon: {
			template: `
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
				</svg>
			`
		},
		AppleMusicIcon: {
			template: `
				<svg fill="currentColor" viewBox="0 0 24 24">
					<path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.001-.08-.004-.12-.004H6.026c-.04 0-.08.003-.12.004-.525.015-1.046.057-1.563.15-.674.121-1.304.353-1.878.727-1.118.733-1.863 1.732-2.18 3.043-.175.72-.24 1.452-.24 2.19v11.726c0 .738.065 1.47.24 2.189.317 1.312 1.062 2.312 2.18 3.044.574.374 1.204.606 1.878.727.517.093 1.038.135 1.563.149.04.001.08.004.12.004h11.948c.04 0 .08-.003.12-.004.526-.014 1.047-.056 1.564-.149.674-.121 1.304-.353 1.878-.727 1.118-.732 1.863-1.732 2.18-3.044.175-.719.24-1.451.24-2.189V6.124zM18.318 9.16c-.026 1.378-.26 2.705-.26 4.09 0 .675-.34 1.24-.897 1.57-.557.33-1.29.33-1.847 0-.557-.33-.897-.895-.897-1.57 0-.675.34-1.24.897-1.57.557-.33 1.29-.33 1.847 0 .557.33.897.895.897 1.57 0 .675-.34 1.24-.897 1.57-.557.33-1.29.33-1.847 0-.557-.33-.897-.895-.897-1.57 0-.675.34-1.24.897-1.57.557-.33 1.29-.33 1.847 0 .557.33.897.895.897 1.57z"/>
				</svg>
			`
		}
	}
}
</script>

<style scoped>
@keyframes flow {
	0% { opacity: 0; transform: translateY(20px); }
	50% { opacity: 1; transform: translateY(0); }
	100% { opacity: 0; transform: translateY(-20px); }
}

.grid > div:nth-child(1) .bg-gradient-to-b { animation: flow 2s infinite 0.2s; }
.grid > div:nth-child(2) .bg-gradient-to-b { animation: flow 2s infinite 0.4s; }
.grid > div:nth-child(3) .bg-gradient-to-b { animation: flow 2s infinite 0.6s; }
.grid > div:nth-child(4) .bg-gradient-to-b { animation: flow 2s infinite 0.8s; }
.grid > div:nth-child(5) .bg-gradient-to-b { animation: flow 2s infinite 1.0s; }
.grid > div:nth-child(6) .bg-gradient-to-b { animation: flow 2s infinite 1.2s; }
</style>
