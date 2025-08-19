<template>
	<div class="flex items-center space-x-4 p-1 bg-muted rounded-lg">
		<button 
			@click="setBilling('monthly')"
			class="px-4 py-2 text-sm font-medium rounded-md transition-colors"
			:class="billing === 'monthly' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'"
		>
			Monthly
		</button>
		<button 
			@click="setBilling('annual')"
			class="px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center space-x-2"
			:class="billing === 'annual' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'"
		>
			<span>Annual</span>
			<span class="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">Save 20%</span>
		</button>
	</div>
</template>

<script>
import { usePricingStore } from '@/stores/pricing'

export default {
	name: 'BillingToggle',
	data() {
		const pricingStore = usePricingStore()
		return {
			pricingStore
		}
	},
	computed: {
		billing() { return this.pricingStore.billing }
	},
	methods: {
		setBilling(type) {
			this.pricingStore.setBilling(type)
		}
	}
}
</script>
