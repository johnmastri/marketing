<template>
	<section class="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 py-20 lg:py-32" :style="{ background: bg('artist-hero') }">
		<div class="container mx-auto max-w-6xl px-4">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-8">
					<div class="space-y-4">
						<h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
							{{ hero.headline }}
						</h1>
						<p class="text-xl text-muted-foreground leading-relaxed">
							{{ hero.subheadline }}
						</p>
					</div>
					
					<div class="space-y-4">
						<p class="text-lg text-foreground/80 leading-relaxed">
							Our AI platform generates visuals, videos, and posts that 
							<strong class="text-foreground">amplify your vision</strong>, 
							so you can focus on what matters: making music that moves people.
						</p>
					</div>

					<div class="flex flex-col sm:flex-row gap-4">
						<button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-3 text-base">
							{{ hero.primaryCTA }}
						</button>
						<button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border border-input bg-background hover:bg-accent hover:text-accent-foreground h-12 px-8 py-3 text-base">
							<svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
							</svg>
							{{ hero.secondaryCTA }}
						</button>
					</div>
				</div>

				<div class="relative">
					<div class="relative bg-gradient-to-br from-muted/50 to-muted/20 rounded-2xl p-8 border">
						<div class="space-y-6">
							<div class="flex items-center space-x-3">
								<div class="w-3 h-3 bg-red-500 rounded-full"></div>
								<div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
								<div class="w-3 h-3 bg-green-500 rounded-full"></div>
								<div class="flex-1 bg-muted rounded px-3 py-1 text-xs text-muted-foreground">
									AI Content Generation Platform
								</div>
							</div>
							
							<div class="space-y-4">
								<div class="bg-background rounded-lg p-4 border">
									<div class="flex items-center space-x-3 mb-3">
										<div class="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
											<svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
											</svg>
										</div>
										<span class="text-sm font-medium">Upload: "Midnight Dreams.mp3"</span>
									</div>
									<div class="text-xs text-muted-foreground">
										Analyzing vibe: Moody Electronic • Dark Ambient • Cinematic
									</div>
								</div>
								
								<div class="grid grid-cols-2 gap-3">
									<div class="bg-background rounded-lg p-3 border">
										<div class="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded mb-2 flex items-center justify-center">
											<svg class="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 0 1 2.828 0L16 16m-2-2l1.586-1.586a2 2 0 0 1 2.828 0L20 14m-6-6h.01M6 20h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
											</svg>
										</div>
										<div class="text-xs text-muted-foreground">Instagram Post</div>
									</div>
									<div class="bg-background rounded-lg p-3 border">
										<div class="aspect-square bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded mb-2 flex items-center justify-center">
											<svg class="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M5 18h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2z" />
											</svg>
										</div>
										<div class="text-xs text-muted-foreground">TikTok Video</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					
					<div class="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
						AI Generated
					</div>
				</div>
			</div>
		</div>
		
		<div class="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
		<CopyControl />
		<GradientControl section-id="artist-hero" />
	</section>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'
import CopyControl from '@/components/CopyControl.vue'
import { useGradientsStore } from '@/stores/gradients'
import { useCopyStore } from '@/stores/copy'

export default {
	name: 'ArtistHeroSection',
	components: { GradientControl, CopyControl },
	data() { return { gradients: useGradientsStore(), copyStore: useCopyStore() } },
	computed: {
		hero() {
			return this.copyStore.current || { headline: "Stop feeling like you're falling behind", subheadline: 'Create pro-level content that matches your sound—without the team.', primaryCTA: 'Start Free Trial', secondaryCTA: 'See It In Action', socialProof: '' }
		}
	},
	methods: { bg(section){ return this.gradients.getCurrent(section) } }
}
</script>
