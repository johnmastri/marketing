<template>
	<div class="space-y-1">
		<div class="text-3xl font-bold">
			${{ price }}
			<span class="text-lg text-muted-foreground font-normal">/mo</span>
		</div>
		<div v-if="savings > 0 && billing === 'annual'" class="text-sm text-green-600">
			Save {{ savings }}% annually
		</div>
	</div>
</template>

<script>
export default {
	name: 'PriceTag',
	props: {
		price: {
			type: Number,
			required: true
		},
		savings: {
			type: Number,
			default: 0
		},
		billing: {
			type: String,
			required: true
		}
	}
}
</script>
