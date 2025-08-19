<template>
	<section class="border-t bg-muted/30">
		<div class="container mx-auto max-w-6xl px-4 py-16 md:py-20">
			<div class="text-center mb-12">
				<h2 class="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
					{{ pricingData.headline }}
				</h2>
				<p class="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
					{{ pricingData.description }}
				</p>
				<p class="text-sm text-muted-foreground">
					{{ pricingData.note }}
				</p>
			</div>
			
			<div class="flex justify-center mb-12">
				<BillingToggle />
			</div>
			
			<PlanGrid :plans="plans" />
			
			<div v-if="addOns.length > 0" class="mt-16">
				<h3 class="text-xl font-semibold text-center mb-8">Add-ons</h3>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
					<div 
						v-for="addon in addOns"
						:key="addon.name"
						class="p-6 rounded-lg border bg-card text-center"
					>
						<h4 class="font-semibold mb-2">{{ addon.name }}</h4>
						<p class="text-sm text-muted-foreground mb-4">{{ addon.description }}</p>
						<div class="text-lg font-semibold">${{ addon.price }} <span class="text-sm text-muted-foreground">{{ addon.unit }}</span></div>
					</div>
				</div>
			</div>
			
			<div v-if="faqItems.length > 0" class="mt-16">
				<h3 class="text-xl font-semibold text-center mb-8">Pricing FAQ</h3>
				<div class="max-w-2xl mx-auto space-y-6">
					<div 
						v-for="item in faqItems"
						:key="item.question"
						class="border-b pb-4"
					>
						<h4 class="font-semibold mb-2">{{ item.question }}</h4>
						<p class="text-sm text-muted-foreground">{{ item.answer }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import BillingToggle from './BillingToggle.vue'
import PlanGrid from './PlanGrid.vue'
import { usePricingStore } from '@/stores/pricing'

export default {
	name: 'PricingSection',
	components: {
		BillingToggle,
		PlanGrid
	},
	data() {
		const pricingStore = usePricingStore()
		return {
			pricingStore
		}
	},
	computed: {
		pricingData() { return this.pricingStore.data },
		plans() { return this.pricingStore.plans },
		addOns() { return this.pricingStore.addOns },
		faqItems() { return this.pricingStore.faqItems }
	}
}
</script>
