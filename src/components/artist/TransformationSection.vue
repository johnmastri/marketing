<template>
	<section class="py-20 bg-muted/30 relative" :style="{ background: bg('transformation') }">
		<div class="container mx-auto max-w-6xl px-4">
			<div class="text-center mb-16">
				<h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
					From posting once a week to daily professional content
				</h2>
				<p class="text-xl text-muted-foreground">
					Finally look as professional as you sound
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="space-y-6">
					<div class="bg-background rounded-2xl p-6 border shadow-sm">
						<div class="flex items-center space-x-3 mb-4">
							<div class="w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center">
								<svg class="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</div>
							<h3 class="font-semibold text-red-600">Before: Inconsistent & Basic</h3>
						</div>
						
						<div class="space-y-4">
							<div class="grid grid-cols-3 gap-3">
								<div class="aspect-square bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
									<span class="text-xs text-muted-foreground">No post</span>
								</div>
								<div class="aspect-square bg-muted rounded-lg border flex items-center justify-center">
									<div class="text-center">
										<div class="w-6 h-6 bg-muted-foreground/30 rounded mx-auto mb-1"></div>
										<div class="text-xs text-muted-foreground">Phone pic</div>
									</div>
								</div>
								<div class="aspect-square bg-muted/50 rounded-lg border-2 border-dashed border-muted-foreground/20 flex items-center justify-center">
									<span class="text-xs text-muted-foreground">No post</span>
								</div>
							</div>
							
							<div class="text-sm text-muted-foreground space-y-2">
								<div class="flex items-center space-x-2">
									<div class="w-2 h-2 bg-red-500 rounded-full"></div>
									<span>3 posts in 3 months</span>
								</div>
								<div class="flex items-center space-x-2">
									<div class="w-2 h-2 bg-red-500 rounded-full"></div>
									<span>Inconsistent branding</span>
								</div>
								<div class="flex items-center space-x-2">
									<div class="w-2 h-2 bg-red-500 rounded-full"></div>
									<span>Low engagement</span>
								</div>
							</div>
						</div>
					</div>
					<!-- Close first column -->
				</div>

				<div class="space-y-6">
					<div class="bg-background rounded-2xl p-6 border shadow-sm">
						<div class="flex items-center space-x-3 mb-4">
							<div class="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
								<svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h3 class="font-semibold text-green-600">After: Professional & Consistent</h3>
						</div>
						
						<div class="space-y-4">
							<div class="grid grid-cols-3 gap-3">
								<div class="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg border flex items-center justify-center">
									<div class="text-center">
										<div class="w-6 h-6 bg-purple-500 rounded mx-auto mb-1"></div>
										<div class="text-xs text-purple-600 font-medium">Album Art</div>
									</div>
								</div>
								<div class="aspect-square bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-lg border flex items-center justify-center">
									<div class="text-center">
										<div class="w-6 h-6 bg-pink-500 rounded mx-auto mb-1"></div>
										<div class="text-xs text-pink-600 font-medium">Video</div>
									</div>
								</div>
								<div class="aspect-square bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border flex items-center justify-center">
									<div class="text-center">
										<div class="w-6 h-6 bg-blue-500 rounded mx-auto mb-1"></div>
										<div class="text-xs text-blue-600 font-medium">Story</div>
									</div>
								</div>
							</div>
							
							<div class="text-sm text-muted-foreground space-y-2">
								<div class="flex items-center space-x-2">
									<div class="w-2 h-2 bg-green-500 rounded-full"></div>
									<span>Daily professional posts</span>
								</div>
								<div class="flex items-center space-x-2">
									<div class="w-2 h-2 bg-green-500 rounded-full"></div>
									<span>Cohesive brand aesthetic</span>
								</div>
								<div class="flex items-center space-x-2">
									<div class="w-2 h-2 bg-green-500 rounded-full"></div>
									<span>3x higher engagement</span>
								</div>
							</div>
						</div>
					</div>
				<!-- Close second column -->
			</div>
			</div>

			<div class="text-center mt-12">
				<div class="inline-flex items-center space-x-4 bg-background rounded-full px-6 py-3 border shadow-sm">
					<div class="flex items-center space-x-2">
						<div class="w-3 h-3 bg-red-500 rounded-full"></div>
						<span class="text-sm font-medium">200 followers</span>
					</div>
					<svg class="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
					</svg>
					<div class="flex items-center space-x-2">
						<div class="w-3 h-3 bg-green-500 rounded-full"></div>
						<span class="text-sm font-medium">10K followers</span>
					</div>
					<div class="text-xs text-muted-foreground bg-muted rounded-full px-2 py-1">
						6 months
					</div>
				</div>
			</div>
		</div>
		<GradientControl section-id="transformation" />
	</section>
</template>

<script>
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'TransformationSection',
	components: { GradientControl },
	data() { return { gradients: useGradientsStore() } },
	methods: { bg(section){ return this.gradients.getCurrent(section) } }
}
</script>
