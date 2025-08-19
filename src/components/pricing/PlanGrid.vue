<template>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		<PlanCard 
			v-for="plan in plans"
			:key="plan.key"
			:plan="plan"
			:is-popular="plan.badge === 'Most Popular'"
		/>
	</div>
</template>

<script>
import PlanCard from './PlanCard.vue'

export default {
	name: 'PlanGrid',
	components: {
		PlanCard
	},
	props: {
		plans: {
			type: Array,
			required: true
		}
	}
}
</script>
