<template>
	<section class="border-t relative" :style="{ background: bg('core-features') }">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.coreFeatures.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					{{ copy.coreFeatures.description }}
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
				<FeatureCard 
					v-for="(feature, index) in copy.coreFeatures.features"
					:key="index"
					:title="feature.title"
					:description="feature.description"
					:icon="feature.icon"
					:delay="index * 0.15"
				/>
			</div>
		</div>
		<GradientControl section-id="core-features" />
	</section>
</template>

<script>
import FeatureCard from './FeatureCard.vue'
import copyData from '@/content/copy.json'
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'CoreFeaturesSection',
	components: {
		FeatureCard,
		GradientControl
	},
	data() {
		const gradients = useGradientsStore()
		return {
			copy: copyData,
			gradients
		}
	},
	methods: {
		bg(section){ return this.gradients.getCurrent(section) }
	}
}
</script>
