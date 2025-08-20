<template>
	<section class="py-20 bg-muted/30 relative" :style="{ background: bg('artist-metrics') }">
		<div class="container mx-auto max-w-6xl px-4">
			<div class="space-y-12">
				<div class="text-center">
					<h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
						Real artists, real growth
					</h2>
					<p class="text-xl text-muted-foreground">
						See the metrics that matter for music careers
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
					<div class="bg-background rounded-xl p-6 border">
						<div class="flex items-center space-x-3 mb-4">
							<div class="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<div class="text-sm text-muted-foreground">Posts/month</div>
							</div>
						</div>
						<div class="grid grid-cols-2 gap-3 mb-2">
							<div class="rounded-lg border p-3">
								<div class="text-xs text-muted-foreground">Before</div>
								<div class="text-xl font-semibold">3</div>
							</div>
							<div class="rounded-lg border p-3 bg-green-500/5">
								<div class="text-xs text-muted-foreground">After</div>
								<div class="text-xl font-semibold text-green-600">30</div>
							</div>
						</div>
						<p class="text-sm text-muted-foreground">Stayed consistent for the first time ever.</p>
					</div>

					<div class="bg-background rounded-xl p-6 border">
						<div class="flex items-center space-x-3 mb-4">
							<div class="w-10 h-10 bg-purple-500/10 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h6m-6 4h10" />
								</svg>
							</div>
							<div>
								<div class="text-sm text-muted-foreground">Comment engagement</div>
							</div>
						</div>
						<div class="grid grid-cols-2 gap-3 mb-2">
							<div class="rounded-lg border p-3">
								<div class="text-xs text-muted-foreground">Before</div>
								<div class="text-xl font-semibold">10%</div>
							</div>
							<div class="rounded-lg border p-3 bg-green-500/5">
								<div class="text-xs text-muted-foreground">After</div>
								<div class="text-xl font-semibold text-purple-600">50%</div>
							</div>
						</div>
						<p class="text-sm text-muted-foreground">Fans stopped scrolling and started talking.</p>
					</div>

					<div class="bg-background rounded-xl p-6 border">
						<div class="flex items-center space-x-3 mb-4">
							<div class="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
							</div>
							<div>
								<div class="text-sm text-muted-foreground">Time saved</div>
							</div>
						</div>
						<div class="grid grid-cols-2 gap-3 mb-2">
							<div class="rounded-lg border p-3">
								<div class="text-xs text-muted-foreground">Before</div>
								<div class="text-sm font-medium">Editing + scheduling every week</div>
							</div>
							<div class="rounded-lg border p-3 bg-green-500/5">
								<div class="text-xs text-muted-foreground">After</div>
								<div class="text-xl font-semibold text-green-600">10+ hrs/week</div>
							</div>
						</div>
						<p class="text-sm text-muted-foreground">No more editing apps or scheduling headaches.</p>
					</div>

					<div class="bg-background rounded-xl p-6 border">
						<div class="flex items-center space-x-3 mb-4">
							<div class="w-10 h-10 bg-orange-500/10 rounded-full flex items-center justify-center">
								<svg class="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
								</svg>
							</div>
							<div>
								<div class="text-sm text-muted-foreground">Cross-platform coverage</div>
							</div>
						</div>
						<div class="grid grid-cols-2 gap-3 mb-2">
							<div class="rounded-lg border p-3">
								<div class="text-xs text-muted-foreground">Before</div>
								<div class="text-sm font-medium">Single-platform posting</div>
							</div>
							<div class="rounded-lg border p-3 bg-green-500/5">
								<div class="text-xs text-muted-foreground">After</div>
								<div class="text-xl font-semibold text-orange-600">100% coverage</div>
							</div>
						</div>
						<p class="text-sm text-muted-foreground">Instagram, TikTok, and YouTube Shorts—handled in one flow.</p>
					</div>
				</div>

				<div class="bg-primary/5 rounded-xl p-6 border border-primary/20 max-w-4xl mx-auto">
					<div class="flex items-start space-x-3">
						<div class="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
							<svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<p class="text-sm font-medium text-primary mb-1">Timeline: 6 months</p>
							<p class="text-sm text-muted-foreground">
								Results achieved through consistent daily posting with AI-generated content, 
								strategic hashtag optimization, and cross-platform distribution.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<GradientControl section-id="artist-metrics" />
	</section>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'ArtistMetricsSection',
	components: { GradientControl },
	data() { return { gradients: useGradientsStore() } },
	methods: { bg(section){ return this.gradients.getCurrent(section) } }
}
</script>
