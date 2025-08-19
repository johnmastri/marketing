<template>
	<div 
		ref="planCard"
		class="relative p-6 rounded-lg border bg-card transition-all duration-300 hover:scale-105 hover:shadow-lg"
		:class="{ 'border-primary shadow-lg scale-105': isPopular }"
	>
		<div v-if="plan.badge" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
			<span class="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
				{{ plan.badge }}
			</span>
		</div>
		
		<div class="text-center mb-6">
			<h3 class="text-xl font-bold mb-2">{{ plan.name }}</h3>
			<p class="text-sm text-muted-foreground mb-4">{{ plan.description }}</p>
			
			<PriceTag 
				:price="plan.displayPrice"
				:savings="plan.savings"
				:billing="billing"
			/>
		</div>
		
		<div class="space-y-4 mb-6">
			<div>
				<h4 class="font-semibold text-sm mb-3">Includes:</h4>
				<ul class="space-y-2">
					<FeatureItem 
						v-for="feature in plan.features"
						:key="feature"
						:text="feature"
						:included="true"
					/>
				</ul>
			</div>
			
			<div v-if="plan.limitations && plan.limitations.length > 0">
				<h4 class="font-semibold text-sm mb-3 text-muted-foreground">Limitations:</h4>
				<ul class="space-y-2">
					<FeatureItem 
						v-for="limitation in plan.limitations"
						:key="limitation"
						:text="limitation"
						:included="false"
					/>
				</ul>
			</div>
		</div>
		
		<PlanCTA 
			:plan-name="plan.name"
			:is-popular="isPopular"
			disabled
		/>
	</div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PriceTag from './PriceTag.vue'
import FeatureItem from './FeatureItem.vue'
import PlanCTA from './PlanCTA.vue'
import { usePricingStore } from '@/stores/pricing'

gsap.registerPlugin(ScrollTrigger)

export default {
	name: 'PlanCard',
	components: {
		PriceTag,
		FeatureItem,
		PlanCTA
	},
	props: {
		plan: {
			type: Object,
			required: true
		},
		isPopular: {
			type: Boolean,
			default: false
		}
	},
	data() {
		const pricingStore = usePricingStore()
		return {
			pricingStore
		}
	},
	computed: {
		billing() { return this.pricingStore.billing }
	},
	mounted() {
		gsap.from(this.$refs.planCard, {
			opacity: 0,
			y: 30,
			duration: 0.6,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: this.$refs.planCard,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			}
		})
	}
}
</script>
