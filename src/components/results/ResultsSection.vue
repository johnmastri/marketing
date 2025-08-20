<template>
	<section class="border-t relative" :style="{ background: bg('results') }">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.results.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					{{ copy.results.description }}
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
				<ResultCard 
					v-for="(metric, index) in copy.results.metrics"
					:key="index"
					:before="metric.before"
					:after="metric.after"
					:description="metric.description"
					:delay="index * 0.2"
				/>
			</div>
		</div>
		<GradientControl section-id="results" />
	</section>
</template>

<script>
import ResultCard from './ResultCard.vue'
import copyData from '@/content/copy.json'
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'ResultsSection',
	components: {
		ResultCard,
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
