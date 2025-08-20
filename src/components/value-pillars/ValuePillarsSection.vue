<template>
	<section class="border-t bg-muted/30 relative" :style="{ background: bg('value-pillars') }">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.valuePillars.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					{{ copy.valuePillars.description }}
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
				<ValuePillar 
					v-for="(pillar, index) in copy.valuePillars.pillars"
					:key="index"
					:title="pillar.title"
					:description="pillar.description"
					:icon="pillar.icon"
					:delay="index * 0.2"
				/>
			</div>
		</div>
		<GradientControl section-id="value-pillars" />
	</section>
</template>

<script>
import ValuePillar from './ValuePillar.vue'
import copyData from '@/content/copy.json'
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'ValuePillarsSection',
	components: {
		ValuePillar,
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
