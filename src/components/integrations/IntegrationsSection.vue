<template>
	<section class="border-t bg-muted/30 relative" :style="{ background: bg('integrations') }">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ copy.integrations.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto">
					{{ copy.integrations.description }}
				</p>
			</div>
			
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
				<IntegrationCategory 
					v-for="(category, index) in copy.integrations.categories"
					:key="index"
					:title="category.title"
					:items="category.items"
					:delay="index * 0.1"
				/>
			</div>
		</div>
		<GradientControl section-id="integrations" />
	</section>
</template>

<script>
import IntegrationCategory from './IntegrationCategory.vue'
import copyData from '@/content/copy.json'
import GradientControl from '@/components/GradientControl.vue'
import { useGradientsStore } from '@/stores/gradients'

export default {
	name: 'IntegrationsSection',
	components: {
		IntegrationCategory,
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
