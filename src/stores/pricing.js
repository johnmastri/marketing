import { defineStore } from 'pinia'
import pricingData from '@/content/pricing.json'

export const usePricingStore = defineStore('pricing', {
	state: () => ({
		billing: 'monthly',
		data: pricingData
	}),
	getters: {
		plans: (state) => state.data.plans.map(plan => ({
			...plan,
			displayPrice: state.billing === 'monthly' ? plan.priceMonthly : plan.priceAnnual,
			savings: state.billing === 'annual' ? Math.round(((plan.priceMonthly * 12) - (plan.priceAnnual * 12)) / (plan.priceMonthly * 12) * 100) : 0
		})),
		popularPlan: (state) => state.data.plans.find(p => p.badge === 'Most Popular'),
		addOns: (state) => state.data.addOns,
		faqItems: (state) => state.data.faq
	},
	actions: {
		toggleBilling() {
			this.billing = this.billing === 'monthly' ? 'annual' : 'monthly'
		},
		setBilling(type) {
			if (['monthly', 'annual'].includes(type)) {
				this.billing = type
			}
		}
	}
})
