<template>
	<div class="hero-visual relative">
		<div class="aspect-square md:aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 border border-border/50 flex items-center justify-center">
			<div class="text-center space-y-4 p-8">
				<div class="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
					<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<div class="space-y-2">
					<h3 class="text-lg font-semibold">AI-Powered Consistency</h3>
					<p class="text-sm text-muted-foreground">Your brand, perfectly represented across every platform</p>
				</div>
				<div class="flex justify-center space-x-2">
					<div class="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
					<div class="w-2 h-2 rounded-full bg-primary animate-pulse" style="animation-delay: 0.2s"></div>
					<div class="w-2 h-2 rounded-full bg-primary animate-pulse" style="animation-delay: 0.4s"></div>
				</div>
			</div>
		</div>
		
		<div class="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
		<div class="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl"></div>
	</div>
</template>

<script>
export default {
	name: 'HeroVisual'
}
</script>
