<template>
	<section class="border-t bg-muted/30">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.howItWorks.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					Three simple steps to consistent, professional content across all platforms
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
				<StepCard 
					v-for="(step, index) in copy.howItWorks.steps"
					:key="index"
					:number="index + 1"
					:title="step.title"
					:description="step.description"
					:delay="index * 0.2"
				/>
			</div>
		</div>
	</section>
</template>

<script>
import StepCard from './StepCard.vue'
import copyData from '@/content/copy.json'

export default {
	name: 'HowItWorksSection',
	components: {
		StepCard
	},
	data() {
		return {
			copy: copyData
		}
	}
}
</script>
